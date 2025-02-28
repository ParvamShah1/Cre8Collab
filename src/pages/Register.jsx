import { useState, useEffect } from 'react';
import { Phone, ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function App() {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [utype, sutype] = useState('influencer');
  const [resultconfirm, setresult] = useState(null);
  const [verifying, setverify] = useState(false);
  const [error, setError] = useState('');

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [invalid,setinvalid] = useState(false);


  const invalidOTP= ()=>{
    setinvalid(true);
  }

  useEffect(() => {
    window.recaptchaveri = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log(response);
      }
    });
  }, [auth]);

  const phonesubmit = async (e) => {
    e.preventDefault();
    setError('');
    setverify(true);
    
    try {
      const forphone = `+91${phoneNumber}`;
      
      const resultconfirm = await signInWithPhoneNumber(
        auth, 
        forphone, 
        window.recaptchaveri
      );
      
      setresult(resultconfirm);
      setShowOTP(true);
    } catch (error) {
      console.error("Error sending verification code:", error);
      setError(error.message);
    } finally {
      setverify(false);
    }
  };

  const otpchange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const otpsubmit = async (e) => {
    e.preventDefault();
    setError('');
    setverify(true);
    
    try {
      const otpCode = otp.join('');
      await resultconfirm.confirm(otpCode);
      
      console.log('Phone verification successful!');
      
      if (utype === 'influencer') {
        navigate('/influencer-onboard');
      } else if (utype === 'business') {
        navigate('/brand-onboard');
      }
    } catch (error) {
      console.log("Error verifying code:", error);
      invalidOTP();
    } finally {
      setverify(false);
    }
  };


  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/register_cover.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(1.3)'
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      
      <div id="recaptcha-container"></div>

      <div className="w-full max-w-md relative">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 transition-all duration-300 border border-white/10">
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-white text-sm">
              {error}
            </div>
          )}
          
          {!showOTP ? (
            <form onSubmit={phonesubmit} className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Register</h2>
                <p className="text-white/60">Enter your phone number to continue</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="flex">
                    <div className="h-full px-3 py-3 rounded-l-lg bg-white/5 border border-r-0 border-white/10 text-white flex items-center space-x-2">
                      <span className="text-xl">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter phone number"
                      className="flex-1 px-4 py-3 rounded-r-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white placeholder-white/40"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="flex justify-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="utype"
                      value="influencer"
                      checked={utype === 'influencer'}
                      onChange={(e) => sutype(e.target.value)}
                      className="w-4 h-4 text-white border-white/30 focus:ring-white/20 focus:ring-offset-0 bg-white/5"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">I'm an Influencer</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="utype"
                      value="business"
                      checked={utype === 'business'}
                      onChange={(e) => sutype(e.target.value)}
                      className="w-4 h-4 text-white border-white/30 focus:ring-white/20 focus:ring-offset-0 bg-white/5"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">I'm a Brand/Business</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg"
                  disabled={verifying}
                >
                  {verifying ? 'Sending OTP...' : 'Continue'}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={otpsubmit} className="space-y-6">
              <button
                type="button"
                onClick={() => setShowOTP(false)}
                className="absolute top-8 left-8 text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Verify OTP</h2>
                <p className="text-white/60">Enter the 6-digit code sent to +91 {phoneNumber}</p>
              </div>

              <div className="flex justify-center space-x-3 my-8">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => otpchange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white"
                    required
                  />
                ))}
                </div>
                      {invalid && (
                <div className="bg-red-300/30 backdrop-blur-lg rounded-md p-3 mt-2 text-red-700 border border-red-500/10 shadow-md font-bold">
                  Invalid OTP. Please try again.
                </div>
              )}

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg"
                  disabled={verifying || otp.some(digit => digit === '')}
                >
                  {verifying ? 'Verifying...' : 'Verify'}
                </button>
                <button
                  type="button"
                  onClick={phonesubmit}
                  className="w-full text-white/60 hover:text-white text-sm transition-colors"
                  disabled={verifying}
                >
                  Didn't receive the code? Resend it
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

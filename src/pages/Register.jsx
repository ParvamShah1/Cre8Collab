import { useState } from 'react';
import { Phone, ArrowLeft, Lock, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState(['', '', '', '']);
  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+91',
    flag: '🇮🇳',
    name: 'India'
  });
  const [userType, setUserType] = useState('influencer');

  const countries = [
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
  ];

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleOTPChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp.join(''));
    if (userType === 'influencer') {
        navigate('/influencer/dashboard');
      } else if (userType === 'business') {
        navigate('/brand/dashboard');
      }
  };

  const handleResendOTP = () => {
    console.log('Resending OTP...');
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

      <div className="w-full max-w-md relative">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 transition-all duration-300 border border-white/10">
          {!showOTP ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
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
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryList(!showCountryList)}
                        className="h-full px-3 py-3 rounded-l-lg bg-white/5 border border-r-0 border-white/10 text-white flex items-center space-x-2 hover:bg-white/10 transition-colors"
                      >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                        <ChevronDown className="w-4 h-4 text-white/60" />
                      </button>
                      
                      {showCountryList && (
                        <div className="absolute top-full left-0 mt-1 w-48 max-h-60 overflow-y-auto bg-black/90 border border-white/10 rounded-lg shadow-lg z-10">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setShowCountryList(false);
                              }}
                              className="w-full px-4 py-2 text-left text-white hover:bg-white/10 flex items-center space-x-3"
                            >
                              <span className="text-xl">{country.flag}</span>
                              <span>{country.name}</span>
                              <span className="text-white/60">{country.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      name="userType"
                      value="influencer"
                      checked={userType === 'influencer'}
                      onChange={(e) => setUserType(e.target.value)}
                      className="w-4 h-4 text-white border-white/30 focus:ring-white/20 focus:ring-offset-0 bg-white/5"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">I'm a Influencer</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="userType"
                      value="business"
                      checked={userType === 'business'}
                      onChange={(e) => setUserType(e.target.value)}
                      className="w-4 h-4 text-white border-white/30 focus:ring-white/20 focus:ring-offset-0 bg-white/5"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">I'm a Brand/Business</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg"
                >
                  Continue
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOTPSubmit} className="space-y-6">
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
                <p className="text-white/60">Enter the code sent to your phone</p>
              </div>

              <div className="flex justify-center space-x-4 my-8">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    className="w-14 h-14 text-center text-2xl rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-white"
                    required
                  />
                ))}
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg"
                >
                  Verify
                </button>
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="w-full text-white/60 hover:text-white text-sm transition-colors"
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

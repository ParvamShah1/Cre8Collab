import 'react';

const HowItWorks = () => {
  return (
    <section id="howItWorks" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-400">Simple steps to launch your influencer campaign</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="relative animate__animated animate__fadeInUp">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:-translate-y-2 transition-transform duration-300 border border-neutral-700 hover:border-white/50">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Create Profile</h3>
                <p className="text-gray-400 text-center">Sign up and complete your brand or influencer profile with relevant details and preferences.</p>
              </div>
            </div>

            <div className="relative animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:-translate-y-2 transition-transform duration-300 border border-neutral-700 hover:border-white/50">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Define Campaign</h3>
                <p className="text-gray-400 text-center">Set your campaign goals, budget, and requirements for potential collaborations.</p>
              </div>
            </div>

            <div className="relative animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:-translate-y-2 transition-transform duration-300 border border-neutral-700 hover:border-white/50">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Match & Connect</h3>
                <p className="text-gray-400 text-center">Get matched with perfect partners based on our AI-powered algorithm and analytics.</p>
              </div>
            </div>

            <div className="relative animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:-translate-y-2 transition-transform duration-300 border border-neutral-700 hover:border-white/50">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Launch & Track</h3>
                <p className="text-gray-400 text-center">Manage your campaign, track performance, and measure ROI in real-time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <button className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Start Your Campaign Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
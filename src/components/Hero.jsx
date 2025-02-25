import 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-black via-neutral-900 to-black text-white pt-16">
      <div className="max-w-7xl mx-auto min-h-[70vh] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 text-center md:text-left animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Connect Your Brand with 
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"> Perfect Influencers</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Launch impactful campaigns with authentic creators. Get matched with influencers who align with your brand values and reach your target audience effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/brand-onboard">
              <button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                I'm a Brand
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                I'm an Influencer
              </button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-gray-400">Active Influencers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5K+</div>
              <div className="text-gray-400">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-400">Campaigns</div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 animate__animated animate__fadeInRight">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-300 rounded-lg blur opacity-20"></div>
            <div className="relative bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Matching</h3>
              <div className="space-y-4">
                <div className="bg-neutral-800/80 backdrop-blur-sm p-4 rounded-lg border border-neutral-700 hover:border-white/50 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Smart Influencer Tagging</p>
                      <p className="text-sm text-gray-400">Multi-parameter classification for perfect matches</p>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/80 backdrop-blur-sm p-4 rounded-lg border border-neutral-700 hover:border-white/50 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">AI Content Generation</p>
                      <p className="text-sm text-gray-400">Create stunning marketing assets instantly</p>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/80 backdrop-blur-sm p-4 rounded-lg border border-neutral-700 hover:border-white/50 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Performance Predictor</p>
                      <p className="text-sm text-gray-400">AI-based campaign success forecasting</p>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/80 backdrop-blur-sm p-4 rounded-lg border border-neutral-700 hover:border-white/50 transition-colors duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Brand Voice Analyzer</p>
                      <p className="text-sm text-gray-400">Maintain consistent messaging automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <svg className="w-full h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24.9999C240 74.9999 480 74.9999 720 24.9999C960 -25.0001 1200 -25.0001 1440 24.9999V73.9999H0V24.9999Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
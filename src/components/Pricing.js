import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold">$99</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Up to 5 active campaigns
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Basic analytics
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Email support
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-purple-600 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 relative animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-tr-2xl rounded-bl-2xl font-semibold">
              Popular
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold">$199</span>
                <span className="text-gray-200 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Up to 20 active campaigns
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom reporting
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-full bg-white hover:bg-gray-100 transition-colors text-purple-600 font-semibold">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-extrabold">$499</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited campaigns
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom analytics
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 dedicated support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                API access
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

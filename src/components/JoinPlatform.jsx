import 'react';

const JoinPlatform = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Future of 
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"> Influencer Marketing</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a brand looking to grow or an influencer ready to shine, 
              our platform provides the tools and connections you need to succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">Smart matching algorithm</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">Real-time analytics and insights</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">Secure payment protection</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700 animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">I am a...</label>
                <select
                  id="type"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                >
                  <option value="brand">Brand</option>
                  <option value="influencer">Influencer</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Create Free Account
              </button>
            </form>
            <p className="text-sm text-gray-400 text-center mt-6">
              By signing up, you agree to our{' '}
              <a href="#" className="text-white hover:text-gray-300">Terms of Service</a> and{' '}
              <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate__animated animate__fadeInUp">
            <div className="text-3xl font-bold mb-2">30 Days</div>
            <p className="text-gray-400">Free Trial Period</p>
          </div>
          <div className="text-center animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold mb-2">5 Minutes</div>
            <p className="text-gray-400">Setup Time</p>
          </div>
          <div className="text-center animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p className="text-gray-400">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinPlatform;
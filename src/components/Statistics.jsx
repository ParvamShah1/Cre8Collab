import 'react';

const Statistics = () => {
  return (
    <section id="statistics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Statistics</h2>
          <p className="text-xl text-gray-600">Our growing community and success metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
            <div className="flex items-center justify-between mb-4">
              <div className="h-14 w-14 bg-neutral-300/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-gray-900">50K+</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Active Influencers</h3>
            <p className="text-gray-600">Verified content creators across all major platforms</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="h-14 w-14 bg-neutral-300/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-gray-900">100K+</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Successful Campaigns</h3>
            <p className="text-gray-600">Completed campaigns with measurable results</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="h-14 w-14 bg-neutral-300/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-gray-900">500M+</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Total Reach</h3>
            <p className="text-gray-600">Combined audience reach across all platforms</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="h-14 w-14 bg-neutral-300/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-gray-900">350%</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Average ROI</h3>
            <p className="text-gray-600">Return on investment for our clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

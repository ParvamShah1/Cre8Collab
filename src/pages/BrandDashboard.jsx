import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrandDashboard = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const notifications = [
    {
      id: 1,
      type: 'application',
      message: 'New application from @lifestyle_creator',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 2,
      type: 'campaign',
      message: 'Your campaign "Summer Collection" is trending',
      time: '3 hours ago',
      unread: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-black/50 to-neutral-900/50 pointer-events-none"></div>
      
      <div className="relative">
        <nav className="bg-neutral-800/50 backdrop-blur-sm border-b border-neutral-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700/50 focus:outline-none mr-2"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <Link to="/" className="text-2xl font-bold text-white">
                  Cre<span className="text-white">8</span>Collab
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-300 hover:text-white focus:outline-none"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-white ring-2 ring-neutral-800"></span>
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-neutral-800/50 backdrop-blur-sm rounded-lg shadow-lg py-1 z-50 border border-neutral-700">
                      <div className="px-4 py-2 border-b border-neutral-700">
                        <h3 className="text-lg font-semibold text-white">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-neutral-700/50 cursor-pointer ${
                              notification.unread ? 'bg-neutral-700/50' : ''
                            }`}
                          >
                            <p className="text-sm text-white">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=Brand+User"
                      alt="Profile"
                    />
                    <span>Fashion Brand X</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
          <div
            className={`${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            } fixed lg:static inset-y-0 left-0 w-64 min-h-[calc(100vh-4rem)] bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700 transition-transform duration-300 ease-in-out z-30`}
          >
            <div className="p-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('campaigns')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'campaigns'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span>Campaigns</span>
                </button>

                <button
                  onClick={() => setActiveTab('influencers')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'influencers'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Find Influencers</span>
                </button>

                <button
                  onClick={() => setActiveTab('applications')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'applications'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Applications</span>
                  <span className="ml-auto bg-white text-black text-xs px-2 py-1 rounded-full">3</span>
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'analytics'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Analytics</span>
                </button>
              </div>

              <div className="mt-8">
                <div className="px-4 py-2">
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Campaign Stats</h3>
                </div>
                <div className="px-4 py-2 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Active Campaigns</span>
                      <span className="text-white">4</span>
                    </div>
                    <div className="mt-1 h-1 bg-neutral-700 rounded-full">
                      <div className="w-1/2 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Applications</span>
                      <span className="text-white">12</span>
                    </div>
                    <div className="mt-1 h-1 bg-neutral-700 rounded-full">
                      <div className="w-3/4 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex-1 ${isSidebarOpen ? 'lg:ml-0' : ''}`}>
            <div className="p-6">
              <div className="max-w-5xl">
                <h1 className="text-3xl font-bold text-white mb-8">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                {activeTab === 'campaigns' && <CampaignsTab />}
                {activeTab === 'influencers' && <InfluencersTab />}
                {activeTab === 'applications' && <ApplicationsTab />}
                {activeTab === 'analytics' && <AnalyticsTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CampaignsTab = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Your Campaigns</h2>
        <button className="bg-white hover:bg-neutral-700/50 text-black px-4 py-2 rounded-lg">
          Create Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">Summer Collection Launch</h3>
            <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
              Active
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Looking for fashion influencers to promote our new summer collection.
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Budget: Rs. 5,000</span>
            <span>5 spots left</span>
          </div>
        </div>

        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">Holiday Special</h3>
            <span className="px-2 py-1 text-xs font-medium bg-gray-500/10 text-gray-400 rounded-full">
              Draft
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Holiday season campaign targeting lifestyle influencers.
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Budget: Rs. 3,000</span>
            <span>Not published</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfluencersTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">Find Influencers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select className="w-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-white">
              <option>All Categories</option>
              <option>Fashion</option>
              <option>Beauty</option>
              <option>Lifestyle</option>
              <option>Tech</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Followers</label>
            <select className="w-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-white">
              <option>Any</option>
              <option>1K - 10K</option>
              <option>10K - 50K</option>
              <option>50K - 100K</option>
              <option>100K+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Engagement Rate</label>
            <select className="w-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-white">
              <option>Any</option>
              <option>1% - 3%</option>
              <option>3% - 5%</option>
              <option>5% - 10%</option>
              <option>10%+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
            <select className="w-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-white">
              <option>Worldwide</option>
              <option>United States</option>
              <option>Europe</option>
              <option>Asia</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <img
                className="h-16 w-16 rounded-full"
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="Influencer"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">@fashionista</h3>
                <p className="text-white text-sm">Fashion & Lifestyle</p>
                <div className="mt-2 flex space-x-4 text-sm text-gray-400">
                  <span>50K followers</span>
                  <span>4.8% engagement</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full bg-white hover:bg-neutral-700/50 text-black px-4 py-2 rounded-lg">
                View Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ApplicationsTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Applications</h2>
      <div className="space-y-6">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <div className="flex items-start space-x-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://ui-avatars.com/api/?name=Lifestyle+Creator"
              alt="Influencer"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">@lifestyle_creator</h3>
                  <p className="text-white text-sm">Applied for: Summer Collection Campaign</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
                  Under Review
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Followers</p>
                  <p className="text-white font-medium">50K</p>
                </div>
                <div>
                  <p className="text-gray-400">Engagement</p>
                  <p className="text-white font-medium">4.8%</p>
                </div>
                <div>
                  <p className="text-gray-400">Previous Collabs</p>
                  <p className="text-white font-medium">12</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-400 text-sm">Applied on: Feb 14, 2025</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-white hover:bg-neutral-700/50 text-black rounded-lg transition-colors duration-200">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors duration-200">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <div className="flex items-start space-x-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://ui-avatars.com/api/?name=Beauty+Blogger"
              alt="Influencer"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">@beauty_blogger</h3>
                  <p className="text-white text-sm">Applied for: Beauty Product Launch</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
                  Accepted
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Followers</p>
                  <p className="text-white font-medium">75K</p>
                </div>
                <div>
                  <p className="text-gray-400">Engagement</p>
                  <p className="text-white font-medium">5.2%</p>
                </div>
                <div>
                  <p className="text-gray-400">Previous Collabs</p>
                  <p className="text-white font-medium">18</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-400 text-sm">Applied on: Feb 12, 2025</p>
                <button className="px-4 py-2 bg-white hover:bg-neutral-700/50 text-black rounded-lg transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Campaign Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <h3 className="text-gray-400 text-sm mb-2">Total Reach</h3>
          <p className="text-2xl font-bold text-white">1.2M</p>
          <span className="text-green-500 text-sm">↑ 12% from last month</span>
        </div>
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <h3 className="text-gray-400 text-sm mb-2">Engagement Rate</h3>
          <p className="text-2xl font-bold text-white">4.8%</p>
          <span className="text-green-500 text-sm">↑ 0.5% from last month</span>
        </div>
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <h3 className="text-gray-400 text-sm mb-2">Active Campaigns</h3>
          <p className="text-2xl font-bold text-white">3</p>
          <span className="text-purple-400 text-sm">2 pending approval</span>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;

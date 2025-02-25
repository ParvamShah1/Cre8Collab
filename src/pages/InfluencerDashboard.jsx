import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InfluencerDashboard = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
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
      type: 'opportunity',
      message: 'New campaign opportunity from Fashion Brand X',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 2,
      type: 'message',
      message: 'Message from Beauty Co regarding your application',
      time: '3 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'system',
      message: 'Your profile has been viewed by 5 new brands',
      time: '1 day ago',
      unread: false,
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
                      <div className="px-4 py-2 border-t border-neutral-700">
                        <button className="text-sm text-white hover:text-gray-400">
                          Mark all as read
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=Influencer+User"
                      alt="Profile"
                    />
                    <span>@lifestyle_creator</span>
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
                  onClick={() => setActiveTab('opportunities')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'opportunities'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Opportunities</span>
                </button>

                <button
                  onClick={() => setActiveTab('requests')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'requests'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                  </svg>
                  <span>Brand Requests</span>
                  <span className="ml-auto bg-white text-black text-xs px-2 py-1 rounded-full">2</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                  </svg>
                  <span>My Applications</span>
                  <span className="ml-auto bg-neutral-700 text-gray-300 text-xs px-2 py-1 rounded-full">3</span>
                </button>

                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === 'profile'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile</span>
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
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Quick Stats</h3>
                </div>
                <div className="px-4 py-2 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Profile Views</span>
                      <span className="text-white">1.2K</span>
                    </div>
                    <div className="mt-1 h-1 bg-neutral-700 rounded-full">
                      <div className="w-3/4 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Rate</span>
                      <span className="text-white">85%</span>
                    </div>
                    <div className="mt-1 h-1 bg-neutral-700 rounded-full">
                      <div className="w-4/5 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-1 ${isSidebarOpen ? 'lg:ml-0' : ''}`}>
            <div className="p-6">
              <div className="max-w-5xl">
                <h1 className="text-3xl font-bold text-white mb-8">{activeTab === 'applications' ? 'My Applications' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                {activeTab === 'opportunities' && <OpportunitiesTab />}
                {activeTab === 'applications' && <ApplicationsTab />}
                {activeTab === 'requests' && <BrandRequestsTab />}
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'analytics' && <AnalyticsTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OpportunitiesTab = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Available Opportunities</h2>
        <div className="flex space-x-4">
          <select className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500">
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Lifestyle</option>
            <option>Tech</option>
          </select>
          <select className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500">
            <option>All Budgets</option>
            <option>$100 - $500</option>
            <option>$500 - $1000</option>
            <option>$1000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-white/50 transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Summer Fashion Campaign</h3>
              <p className="text-white text-sm">Fashion Brand X</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
              Open
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Looking for fashion influencers to showcase our new summer collection. Must have experience in fashion photography.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs bg-neutral-700 text-gray-300 rounded-full">Fashion</span>
            <span className="px-2 py-1 text-xs bg-neutral-700 text-gray-300 rounded-full">Photography</span>
            <span className="px-2 py-1 text-xs bg-neutral-700 text-gray-300 rounded-full">Summer</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Budget: Rs.500 - Rs.1000</span>
            <button className="bg-white hover:bg-neutral-700/50 text-black px-4 py-2 rounded-lg">
              Show Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApplicationsTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">My Applications</h2>
      <div className="space-y-6">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Beauty Product Launch</h3>
              <p className="text-white text-sm">Beauty Co</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
              Under Review
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Applied on: February 10, 2025
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Budget: Rs.800</span>
            <button className="text-white hover:text-gray-400">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BrandRequestsTab = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const requests = [
    {
      id: 1,
      brand: {
        name: 'Fashion Brand X',
        logo: 'https://ui-avatars.com/api/?name=FB&background=6366f1&color=fff',
        description: 'Leading fashion brand specializing in contemporary streetwear.',
        website: 'www.fashionbrandx.com',
        location: 'Jaipur, Rajasthan',
        previousCollabs: 45
      },
      message: "Hi! We love your content and style. We'd love to collaborate with you on our upcoming summer collection launch.",
      budget: 'Rs.800 - Rs.1,200',
      requirements: [
        'Create 3 Instagram posts',
        'Create 2 Instagram stories',
      ],
      status: 'pending',
      date: '2025-02-14',
      type: 'Product Promotion'
    },
    {
      id: 2,
      brand: {
        name: 'Beauty Co',
        logo: 'https://ui-avatars.com/api/?name=BC&background=8b5cf6&color=fff',
        description: 'Premium beauty and skincare brand focused on natural ingredients.',
        website: 'www.beautyco.com',
        location: 'Indore, Madhya Pradesh',
        previousCollabs: 78
      },
      message: "We're launching a new skincare line and think you'd be perfect to help us reach our target audience.",
      budget: 'Rs.1,000 - Rs.1,500',
      requirements: [
        'Detailed product review video',
        '4 Instagram posts over 2 weeks',
        'Before/After content'
      ],
      status: 'pending',
      date: '2025-02-13',
      type: 'Product Review'
    }
  ];

  return (
    <div className="flex gap-6">
      <div className="w-1/2 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Brand Requests</h2>
          <select className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500">
            <option>All Requests</option>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Declined</option>
          </select>
        </div>

        {requests.map((request) => (
          <div
            key={request.id}
            onClick={() => setSelectedRequest(request)}
            className={`bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border cursor-pointer transition-all duration-300 ${
              selectedRequest?.id === request.id
                ? 'border-white'
                : 'border-neutral-700 hover:border-white/50'
            }`}
          >
            <div className="flex items-start space-x-4">
              <img
                className="h-12 w-12 rounded-lg"
                src={request.brand.logo}
                alt={request.brand.name}
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{request.brand.name}</h3>
                    <p className="text-white text-sm">{request.type}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
                    {request.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">{request.message}</p>
                <div className="flex justify-between items-center mt-4 text-sm">
                  <span className="text-gray-400">Budget: {request.budget}</span>
                  <span className="text-gray-400">{request.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/2">
        {selectedRequest ? (
          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 sticky top-8">
            <div className="flex items-start space-x-4 mb-6">
              <img
                className="h-16 w-16 rounded-lg"
                src={selectedRequest.brand.logo}
                alt={selectedRequest.brand.name}
              />
              <div>
                <h3 className="text-xl font-semibold text-white">{selectedRequest.brand.name}</h3>
                <p className="text-white">{selectedRequest.type}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-400">{selectedRequest.brand.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">About the Brand</h4>
                <p className="text-gray-400">{selectedRequest.brand.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-400">
                    {selectedRequest.brand.previousCollabs} Previous Collaborations
                  </span>
                  <a
                    href={`https://${selectedRequest.brand.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Campaign Details</h4>
                <p className="text-gray-400 mb-4">{selectedRequest.message}</p>
                <div className="bg-neutral-700/50 rounded-lg p-4">
                  <h5 className="font-medium text-white mb-2">Requirements:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedRequest.requirements.map((req, index) => (
                      <li key={index} className="text-gray-400 text-sm">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-white hover:bg-neutral-700/50 text-black px-4 py-3 rounded-lg transition-colors duration-200">
                  Accept Request
                </button>
                <button className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-3 rounded-lg transition-colors duration-200">
                  Decline
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 text-center">
            <p className="text-gray-400">Select a request to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileTab = () => {
  return (
    <div>
      <div className="flex items-center space-x-6 mb-8">
        <img
          className="h-24 w-24 rounded-full border-4 border-white"
          src="https://ui-avatars.com/api/?name=Influencer+User&size=96"
          alt="Profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-white">@lifestyle_creator</h2>
          <p className="text-white">Lifestyle & Fashion Influencer</p>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <span>50K Followers</span>
            <span>4.8% Engagement Rate</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-4">Profile Stats</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Profile Views (Last 30 days)</p>
              <p className="text-2xl font-bold text-white">1,234</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Brand Interests</p>
              <p className="text-2xl font-bold text-white">15</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Successful Collaborations</p>
              <p className="text-2xl font-bold text-white">25</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-4">Categories & Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full">Lifestyle</span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full">Fashion</span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full">Beauty</span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full">Travel</span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full">Photography</span>
          </div>
        </div>
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 md:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
          <p className="text-gray-400">
            Passionate lifestyle and fashion influencer with 5+ years of experience creating authentic content.
            Specializing in fashion photography and lifestyle branding. Always looking for exciting collaborations
            with brands that align with my values.
          </p>
        </div>
      </div>
    </div>
  );
};

const AnalyticsTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-4">Engagement Rate</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Average Engagement Rate (Last 30 days)</p>
            <p className="text-2xl font-bold text-white">4.8%</p>
          </div>
          <div className="mt-4 h-1 bg-neutral-700 rounded-full">
            <div className="w-4/5 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-4">Reach</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Total Reach (Last 30 days)</p>
            <p className="text-2xl font-bold text-white">50K</p>
          </div>
          <div className="mt-4 h-1 bg-neutral-700 rounded-full">
            <div className="w-3/4 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 md:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Top Performing Content</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Post with the highest engagement rate</p>
              <p className="text-lg font-bold text-white">Summer Fashion Campaign</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Post with the highest reach</p>
              <p className="text-lg font-bold text-white">Beauty Product Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;

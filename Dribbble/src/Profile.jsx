import React from 'react'

const Profile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Profile Picture and Name */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 mx-auto mb-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Alex Johnson"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Alex Johnson</h2>
        <p className="text-sm text-blue-600 font-medium">AVAILABLE IN 2-4 WEEKS</p>
        <p className="text-gray-600 mt-2">Senior UI/UX Designer @ Greenhouse</p>
      </div>

      {/* Profile Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
          <span>Senior</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>GMT+02:00, Barcelona, Spain</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          <span>€60-80/hour</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Spanish, English</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        <button className="w-full bg-greenhouse-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-greenhouse-700 transition-colors">
          Hire Alex
        </button>
        <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Add to Wishlist
        </button>
      </div>

      {/* Top Skills */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top skills</h3>
        <div className="grid grid-cols-2 gap-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">FinTech</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">SaaS</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">Healthcare</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">Website Design</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">Mobile Apps</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">UX Strategy</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">React</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm">Figma</span>
        </div>
      </div>
    </div>
  )
}

export default Profile

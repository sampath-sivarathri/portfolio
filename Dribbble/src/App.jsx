import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Profile from './Profile.jsx'
import MainContent from './MainContent.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-1">
            <Profile />
          </div>
          
          {/* Right Main Content */}
          <div className="lg:col-span-2">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

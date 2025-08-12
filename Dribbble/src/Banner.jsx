import React from 'react'

const Banner = () => {
  return (
    <div className="relative bg-white">
      {/* Main Banner */}
      <div className="relative h-96 bg-gradient-to-r from-greenhouse-800 to-greenhouse-600 overflow-hidden rounded-3xl mx-6 my-4">
        {/* Left side with text and patterns */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative">
            {/* Abstract leaf-like patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 bg-greenhouse-300 rounded-full"></div>
              <div className="absolute top-32 left-20 w-16 h-16 bg-greenhouse-200 rounded-full"></div>
              <div className="absolute top-48 left-8 w-12 h-12 bg-greenhouse-100 rounded-full"></div>
              <div className="absolute top-20 left-40 w-8 h-8 bg-greenhouse-400 rounded-full"></div>
            </div>
            
            {/* Main text */}
            <div className="relative z-10 h-full flex items-center pl-16">
              <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Hire for</span>
                <span className="block">what's next.</span>
              </h1>
            </div>
          </div>
          
          {/* Right side with woman's photo */}
          <div className="w-1/2 flex justify-end">
            <div className="relative h-full w-96 -mr-8">
              <img
                src="/Professional woman.png"
                alt="Professional woman"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-white px-6 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <span>Greenhouse</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">Alex Johnson</span>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Banner

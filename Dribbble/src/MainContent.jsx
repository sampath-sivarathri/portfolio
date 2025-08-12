import React, { useState } from 'react'

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('About')

  const tabs = ['About', 'Skills', 'Experience', 'Tools', 'Career Highlights', 'Testimonials', 'Similar Talent']

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-greenhouse-500 text-greenhouse-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeTab === 'About' && (
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">
                I'm Alex Johnson, a Senior UI/UX Designer with a passion for crafting seamless digital experiences. 
                With expertise in FinTech, SaaS, and Healthcare, I specialize in designing intuitive web and mobile 
                applications that drive engagement and efficiency. My skill set includes UX strategy, design systems, 
                and front-end technologies like React and Vue.js, ensuring both aesthetic and functional excellence. 
                Based in Barcelona (GMT+2), I work closely with global teams to build scalable, user-friendly products. 
                Let's collaborate to bring your vision to life!
              </p>
            </div>

            {/* Top Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Top skills</h3>
              <div className="flex items-start space-x-8">
                {/* Skills Chart */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32">
                    {/* Donut Chart */}
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 32 32">
                      {/* Figma - 30% */}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 14 * 0.3} ${2 * Math.PI * 14}`}
                        strokeDashoffset="0"
                      />
                      {/* User Testing - 20% */}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 14 * 0.2} ${2 * Math.PI * 14}`}
                        strokeDashoffset={`-${2 * Math.PI * 14 * 0.3}`}
                      />
                      {/* Web Design - 20% */}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#EAB308"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 14 * 0.2} ${2 * Math.PI * 14}`}
                        strokeDashoffset={`-${2 * Math.PI * 14 * 0.5}`}
                      />
                      {/* Miro - 10% */}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 14 * 0.1} ${2 * Math.PI * 14}`}
                        strokeDashoffset={`-${2 * Math.PI * 14 * 0.7}`}
                      />
                      {/* SaaS - 20% */}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 14 * 0.2} ${2 * Math.PI * 14}`}
                        strokeDashoffset={`-${2 * Math.PI * 14 * 0.8}`}
                      />
                    </svg>
                    
                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900">5 SKILLS</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-3">Verified by</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Figma</span>
                      <span className="text-gray-500">5 years (30%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">User Testing</span>
                      <span className="text-gray-500">5 years (20%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Web Design</span>
                      <span className="text-gray-500">3 years (20%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Miro</span>
                      <span className="text-gray-500">5 years (10%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">SaaS</span>
                      <span className="text-gray-500">4 years (20%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Skills' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">UI/UX Design</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-greenhouse-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Design Systems</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-greenhouse-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Prototyping</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-greenhouse-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">React</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-greenhouse-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Vue.js</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-greenhouse-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">CSS/SCSS</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-greenhouse-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Experience' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-greenhouse-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Senior UI/UX Designer</h3>
                  <span className="text-sm text-gray-500">2021 - Present</span>
                </div>
                <p className="text-greenhouse-600 font-medium mb-2">Greenhouse • Barcelona, Spain</p>
                <p className="text-gray-700 mb-3">
                  Leading design initiatives for enterprise SaaS products, focusing on user experience optimization 
                  and design system development. Collaborating with cross-functional teams to deliver intuitive 
                  interfaces that drive user engagement and business growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-greenhouse-100 text-greenhouse-800 px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-greenhouse-100 text-greenhouse-800 px-3 py-1 rounded-full text-sm">Design Systems</span>
                  <span className="bg-greenhouse-100 text-greenhouse-800 px-3 py-1 rounded-full text-sm">User Research</span>
                </div>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">UI/UX Designer</h3>
                  <span className="text-sm text-gray-500">2019 - 2021</span>
                </div>
                <p className="text-greenhouse-600 font-medium mb-2">TechFlow • Madrid, Spain</p>
                <p className="text-gray-700 mb-3">
                  Designed user interfaces for mobile applications and web platforms, specializing in FinTech 
                  and healthcare solutions. Conducted user research and usability testing to improve product experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Sketch</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Prototyping</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Mobile Design</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Tools' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Design & Development Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Tools</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Figma (Expert)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Sketch (Advanced)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Adobe XD (Proficient)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prototyping</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Framer (Expert)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Principle (Advanced)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">InVision (Proficient)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">VS Code (Expert)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Git (Advanced)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenhouse-500 rounded-full"></div>
                    <span className="text-gray-700">Terminal (Proficient)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Career Highlights' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Highlights & Achievements</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-greenhouse-50 to-greenhouse-100 p-6 rounded-lg border border-greenhouse-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-greenhouse-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Design System Implementation</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Successfully designed and implemented a comprehensive design system for a major FinTech platform, 
                  resulting in 40% faster design iterations and improved consistency across 15+ products.
                </p>
                <div className="text-sm text-greenhouse-600 font-medium">2023 • Greenhouse</div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mobile App Redesign</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Led the complete redesign of a healthcare mobile application, achieving 60% improvement in 
                  user satisfaction scores and 35% increase in daily active users within 6 months.
                </p>
                <div className="text-sm text-blue-600 font-medium">2022 • TechFlow</div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Team Leadership</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Mentored 5 junior designers and established design best practices that improved team 
                  productivity by 25% and reduced design review cycles by 30%.
                </p>
                <div className="text-sm text-purple-600 font-medium">2021 - Present • Greenhouse</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Testimonials' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client & Colleague Testimonials</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-greenhouse-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-greenhouse-600 font-semibold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-gray-500">Product Manager, FinTech Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Alex transformed our complex financial dashboard into an intuitive, user-friendly interface. 
                  His attention to detail and user-centered approach resulted in a 45% reduction in user errors 
                  and significantly improved customer satisfaction."
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Rodriguez</h4>
                    <p className="text-sm text-gray-500">CTO, Healthcare Startup</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Working with Alex was a game-changer for our healthcare platform. His expertise in user 
                  experience design and ability to translate complex medical workflows into simple interfaces 
                  made our product accessible to both healthcare professionals and patients."
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold text-lg">E</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emma Thompson</h4>
                    <p className="text-sm text-gray-500">Design Lead, Greenhouse</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Alex is not just a talented designer but also an excellent mentor. His systematic approach 
                  to design problems and ability to communicate complex concepts clearly has elevated our entire 
                  design team's capabilities."
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Similar Talent' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Talent You Might Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">L</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lisa Chen</h4>
                    <p className="text-sm text-gray-500">Senior UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Specializes in mobile app design and user research. Based in Amsterdam, available in 1-2 weeks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-greenhouse-600 font-medium">€70-90/hour</span>
                  <button className="text-greenhouse-600 hover:text-greenhouse-700 text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">D</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">David Kim</h4>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Expert in SaaS product design and design systems. Located in Berlin, available immediately.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-greenhouse-600 font-medium">€65-85/hour</span>
                  <button className="text-greenhouse-600 hover:text-greenhouse-700 text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ana Rodriguez</h4>
                    <p className="text-sm text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Focuses on healthcare and FinTech design. Based in Barcelona, available in 3-4 weeks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-greenhouse-600 font-medium">€55-75/hour</span>
                  <button className="text-greenhouse-600 hover:text-greenhouse-700 text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tom Wilson</h4>
                    <p className="text-sm text-gray-500">Design Systems Lead</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Specializes in design systems and component libraries. Located in London, available in 2-3 weeks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-greenhouse-600 font-medium">€80-100/hour</span>
                  <button className="text-greenhouse-600 hover:text-greenhouse-700 text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainContent

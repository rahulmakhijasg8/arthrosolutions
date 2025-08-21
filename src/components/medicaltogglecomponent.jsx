"use client"

import { useState } from 'react';

const MedicalToggleComponent = ({ tabs, defaultTab = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTab);

  const currentTab = tabs[activeTabIndex];

  return (
    <div className="flex flex-col p-6 bg-white">
      {/* Toggle Buttons */}
      <div className="flex justify-center border-[1px] rounded-[6px] border-[#2D2D2D24] mb-15 w-fit mx-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`px-6 py-2 rounded-[6px] border-[1px] border-solid border-white text-sm font-medium ${
              activeTabIndex === index
                ? 'bg-[#0D4F7A] text-white'
                : 'text-gray-700 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            {tab.buttonLabel}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white w-[90%] md:max-w-none md:w-[80%] md:h-[549px] rounded-[18px] mx-auto shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Image */}
          <div 
            className="w-full md:w-1/2 object-top relative h-[350px] md:h-full"
            style={{
              backgroundImage: currentTab.image ? `url(${currentTab.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: currentTab.image ? 'transparent' : '#9CA3AF'
            }}
          >
            {!currentTab.image && (
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                {currentTab.imagePlaceholder || 'Image Placeholder'}
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: currentTab.gradientOverlay || 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.64) 84.26%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-[20px] font-[600] mb-2">{currentTab.title}</h3>
              {currentTab.badges && (
                <div className="flex space-x-4">
                  {currentTab.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs rounded-[100px] ${badge.className || 'bg-blue-600'}`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 p-6 h-auto md:h-full">
            {/* Conditions Treated */}
            {currentTab.conditions && (
              <div className="mb-6">
                <h4 className="text-[20px] font-[600] text-[#0D4F7A] mb-3">
                  {currentTab.conditionsTitle || 'Conditions Treated'}
                </h4>
                <ul className="space-y-2">
                  {currentTab.conditions.map((condition, index) => (
                    <li key={index} className="flex items-center text-[16px] font-[400] text-[#64648A]">
                      <span className={`w-2 h-2 rounded-full mr-3 ${condition.bulletColor || 'bg-[#4CAF50]'}`}></span>
                      {condition.text || condition}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Procedures */}
            {currentTab.procedures && (
              <div className='mt-12'>
                <h4 className="text-[20px] font-[600] text-[#0D4F7A] mb-3">
                  {currentTab.proceduresTitle || 'Key Procedures'}
                </h4>
                <div className="space-y-4">
                  {currentTab.procedures.map((procedure, index) => (
                    <div key={index} className='rounded-[8px] border-[1px] border-[#2D2D2D24] p-3'>
                      <h5 className="font-[500] text-[#2D2D2D] text-[16px]">{procedure.name}</h5>
                      
                      <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center">
                        {procedure.benefit && (
                          <p className="text-[12px] text-[#4CAF50] font-[400] font-['Inter'] mb-1 md:mb-0">
                            <span className="text-[#2D2D2D] font-[300]">Benefit:</span> {procedure.benefit}
                          </p>
                        )}
                        {procedure.recovery && (
                          <p className="text-[12px] text-[#FE7C49] font-[400] font-['Inter'] mb-1 md:mb-0">
                            <span className="text-[#2D2D2D] font-[300]">Recovery:</span> {procedure.recovery}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalToggleComponent;
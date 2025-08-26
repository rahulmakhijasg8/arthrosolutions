"use client"

import { useState } from 'react';

const MedicalToggleComponent = ({ tabs, defaultTab = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTab);

  const currentTab = tabs[activeTabIndex];

  return (
    <div className="flex flex-col px-[20px] md:px-[60px] lg:px-[100px] bg-white">
      {/* Toggle Buttons */}
      <div className="flex justify-center mt-[18px] md:mt-[36px] border-[1px] rounded-[6px] border-[#2D2D2D24] w-fit mx-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`px-[8px] md:px-[14px] py-[6px] md:py[12px] rounded-[6px] border-[1px] border-solid border-white text-[12px] md:text-[16px] font-medium ${
              activeTabIndex === index
                ? 'bg-[#0D4F7A] font-[400] text-white'
                : 'text-[#2D2D2D] font-[400] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            {tab.buttonLabel}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white w-full mt-[32px] md:mt-[60px] md:h-[570px] rounded-[12px] md:rounded-[20px] overflow-hidden" 
     style={{boxShadow: '0 14px 34px 1px rgba(0, 0, 0, 0.09)'}}>
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Image */}
          <div 
            className="w-full md:w-1/2 object-top relative h-[400px] md:h-full"
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
              <h3 className="text-[20px] font-['Inter'] font-[600] mb-2">{currentTab.title}</h3>
              {currentTab.badges && (
                <div className="flex space-x-4">
                  {currentTab.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 font-['Inter'] text-xs rounded-[100px] ${badge.className || 'bg-blue-600'}`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 p-[12px] md:px-[34px] md:py-[24px] h-auto md:h-full">
            {/* Conditions Treated */}
            {currentTab.conditions && (
              <div className="mb-6">
                <h4 className="text-[20px] font-['Inter'] font-[600] text-[#0D4F7A] mb-3">
                  {currentTab.conditionsTitle || 'Conditions Treated'}
                </h4>
                <ul className="mt-[12px] md:mt-[18px] space-y-[8px] md:space-y-[12px]">
                  {currentTab.conditions.map((condition, index) => (
                    <li key={index} className="flex items-center text-[16px] font-[400] text-[#64648A]">
                      <span className={`w-2 h-2 font-['Inter'] rounded-full mr-3 ${condition.bulletColor || 'bg-[#4CAF50]'}`}></span>
                      {condition.text || condition}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Procedures */}
            {currentTab.procedures && (
              <div className='mt-[16px] md:mt-[34px]'>
                <h4 className="text-[20px] font-['Inter'] font-[600] text-[#0D4F7A] mb-3">
                  {currentTab.proceduresTitle || 'Key Procedures'}
                </h4>
                <div className="mt-[12px] md:mt-[18px] space-y-[12px] md:space-y-[6px]">
                  {currentTab.procedures.map((procedure, index) => (
                    <div key={index} className='rounded-[8px] border-[1px] border-[#2D2D2D24] p-[14px]'>
                      <h5 className="font-[500] fint-['Inter'] text-[#2D2D2D] text-[16px]">{procedure.name}</h5>
                      
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
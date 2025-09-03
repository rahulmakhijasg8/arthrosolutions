"use client"

import Image from "next/image"
import { GraduationCap, X } from "lucide-react"
import { useState, useEffect } from "react"
import { FadeInView, SlideInRight, SlideInLeft } from "./animations/AnimationWrappers"

export default function ShortBio() {
  const [selectedDegree, setSelectedDegree] = useState(null)

  const degrees = [
    {
      id: 'ms',
      name: 'MS Degree',
      color: '#0D4F7A',
      image: '/MSDegree.svg' // Replace with your actual image path
    },
    {
      id: 'frcs',
      name: 'FRCS Degree',
      color: '#FE7C49',
      image: '/FRCSDegree.svg' // Replace with your actual image path
    },
    {
      id: 'dnb',
      name: 'DNB Degree',
      color: '#4CAF50',
      image: '/DNBDegree.svg' // Replace with your actual image path
    }
  ]

  const openModal = (degree) => {
    setSelectedDegree(degree)
    document.body.style.overflow = 'hidden' // Disable scroll
  }

  const closeModal = () => {
    setSelectedDegree(null)
    document.body.style.overflow = 'unset' // Re-enable scroll
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (selectedDegree) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedDegree])

  return (
    <>
      <div className="w-full px-[20px] md:px-[60px] mt-[60px] md:mt-[122px] lg:px-[100px] py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:gap-[97px]">
            {/* Profile Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="w-full h-96 md:h-[520px] rounded-2xl overflow-hidden bg-gray-900">
                <SlideInLeft delay={0.3}><Image
                  src="/biophoto.png"
                  alt="Dr. Mohit Upadhyaya"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-top"
                /></SlideInLeft>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="w-full md:w-1/2 flex-1">
              <FadeInView delay={0.5}><h2 className="text-[28px] font-['Outfit'] md:text-[52px] font-[600] text-[#2D2D2D] mt-[24px] md:mt-0 ">Short Bio</h2></FadeInView>
              
              <FadeInView delay={0.7}><div className="text-[#2D2D2D] text-[16px] font-['Inter'] font-[400] leading-[26px] md:leading-[28px] space-y-[6px]">
                <p>
                  Dr. Mohit. Upadhyaya, Completed post graduate orthopaedic training from the prestigious Sassoon hospital and B.J. Govt Medical College Pune. He then worked as a senior registrar at DR. R.N. Cooper hospital & HBT Medical College, Mumbai and was subsequently promoted to assistant professor in orthopaedic surgery. He completed the Diplomate of National Board examination in orthopaedic while at cooper hospital.
                </p>
                <p>
                 Mohit then chose to pursue further sub specialty training in the UK. He was awarded the coveted Fellowship of the Royal College of Surgeons of Edinburgh during his tenure there.
                </p>
                <p>
                  Dr. Upadhyaya is a specialist in both minimally invasive joint preservation & ligament surgery as well as joint replacement surgery.
                </p>
              </div></FadeInView>
              
              {/* Qualification Buttons */}
              <div className="flex flex-wrap mt-[14px] md:mt-[26px] gap-[24px] md:gap-[10px]">
                {degrees.map((degree) => (
                  <button
                    key={degree.id}
                    onClick={() => openModal(degree)}
                    className={`px-3 py-1.5 flex gap-[8px] md:px-4 md:py-2 rounded-[6px] border transition-all duration-300 cursor-pointer group hover:scale-105 active:scale-95`}
                    style={{
                      borderColor: degree.color,
                      color: degree.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = degree.color
                      e.currentTarget.style.color = 'white'
                      const icon = e.currentTarget.querySelector('svg')
                      const text = e.currentTarget.querySelector('span')
                      if (icon) icon.style.color = 'white'
                      if (text) text.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = degree.color
                      const icon = e.currentTarget.querySelector('svg')
                      const text = e.currentTarget.querySelector('span')
                      if (icon) icon.style.color = degree.color
                      if (text) text.style.color = degree.color
                    }}
                  >
                    <GraduationCap height={18} width={18} />
                    <span className="text-xs md:text-[16px] font-[400]">{degree.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDegree && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          style={{ zIndex: 9999 }}
        >
          <div 
            className="w-[98vw] h-[98vh] relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-1.5 transition-all duration-200"
            >
              <X size={16} className="text-white" />
            </button>
            
            {/* Degree Image Container */}
            <div className="w-full h-full flex items-center justify-center p-2">
              <div className="relative w-full h-full">
                <Image
                  src={selectedDegree.image}
                  alt={selectedDegree.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Optional: Degree Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                {selectedDegree.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
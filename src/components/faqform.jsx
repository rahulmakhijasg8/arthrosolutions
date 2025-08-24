"use client"

import { useState } from "react"

export default function MedicalQuestionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    medicalQuestion: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Medical question form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="w-full px-[20px] py-[60px] md:py-[90px] md:px-[60px] lg:px-[100px] mt-[32px] md:mt-[60px] relative">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
            style={{
              backgroundImage: 'url("/faqbg.png")',
            }}
          />
      <div className="max-w-7xl mx-auto md:px-[120px] relative z-10">
        <h2 className="font-['Outfit'] text-center text-[#2D2D2D] font-[600] text-[36px] md:text-[56px] leading-tight px-[30px] md:px-[100px] ">
          Still have a medical question?
        </h2>
        
        <h3 className="font-['Inter'] text-center text-[#2D2D2D] md:px-47 font-[400] leading-[28px] text-[16px] md:mt-[2px] mt-[6px]">
          Can't find the answer you're looking for? Ask our medical team and we'll respond within 24 hours with personalized guidance.
        </h3>
        <div 
          className="bg-white rounded-[18px] mt-[32px] md:mt-[60px] p-[12px] md:px-[24px] md:py-[34px]"
          style={{
            boxShadow: '0 14px 34px 1px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div className="space-y-[14px] md:space-y-[28px]">
            {/* Full Name and Email */}
            <div className="grid md:grid-cols-2 gap-[14px] md:gap-[32px]">
              <div className="space-y-2">
                <label className="text-[16px] font-[400] text-[#2D2D2D] block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900"
                  style={{ caretColor: '#374151' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-[400] text-[#2D2D2D] block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900"
                  style={{ caretColor: '#374151' }}
                />
              </div>
            </div>

            {/* Your Medical Question - Full Width */}
            <div className="space-y-2">
              <label className="text-[16px] font-[400] text-[#2D2D2D] block">Your Medical Question</label>
              <textarea
                placeholder="Please describe your medical question or concern"
                value={formData.medicalQuestion}
                onChange={(e) => handleInputChange("medicalQuestion", e.target.value)}
                rows={4}
                className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 resize-none"
                style={{ caretColor: '#374151' }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#0D4F7A] hover:bg-[#0B4269] text-white py-[14px] md:py-[16px] mt-[26px] md:mt-[46px] px-[44px] rounded-[6px] text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D4F7A] focus:ring-offset-2"
            >
              Send Medical Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
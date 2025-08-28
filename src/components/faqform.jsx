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
      <div className="max-w-7xl relative mx-auto md:px-[120px] relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden lg:block top-80 right-0" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path opacity="0.54" d="M36.5348 2.85324C35.7275 2.85324 35.0696 2.21272 35.0696 1.42662C35.0696 0.640526 35.7275 0 36.5348 0C37.3422 0 38 0.640526 38 1.42662C38 2.21758 37.3422 2.85324 36.5348 2.85324ZM38 9.9621C38 9.176 37.3422 8.53548 36.5348 8.53548C35.7275 8.53548 35.0696 9.176 35.0696 9.9621C35.0696 10.7482 35.7275 11.3887 36.5348 11.3887C37.3422 11.3887 38 10.753 38 9.9621ZM38 18.4976C38 17.7115 37.3422 17.071 36.5348 17.071C35.7275 17.071 35.0696 17.7115 35.0696 18.4976C35.0696 19.2837 35.7275 19.9242 36.5348 19.9242C37.3422 19.929 38 19.2885 38 18.4976ZM38 27.0379C38 26.2518 37.3422 25.6113 36.5348 25.6113C35.7275 25.6113 35.0696 26.2518 35.0696 27.0379C35.0696 27.824 35.7275 28.4645 36.5348 28.4645C37.3422 28.4645 38 27.824 38 27.0379ZM38 35.5734C38 34.7873 37.3422 34.1468 36.5348 34.1468C35.7275 34.1468 35.0696 34.7873 35.0696 35.5734C35.0696 36.3595 35.7275 37 36.5348 37C37.3422 37 38 36.3595 38 35.5734ZM29.2338 1.42662C29.2338 0.640526 28.576 0 27.7686 0C26.9613 0 26.3035 0.640526 26.3035 1.42662C26.3035 2.21272 26.9613 2.85324 27.7686 2.85324C28.576 2.85324 29.2338 2.21758 29.2338 1.42662ZM29.2338 9.9621C29.2338 9.176 28.576 8.53548 27.7686 8.53548C26.9613 8.53548 26.3035 9.176 26.3035 9.9621C26.3035 10.7482 26.9613 11.3887 27.7686 11.3887C28.576 11.3887 29.2338 10.753 29.2338 9.9621ZM29.2338 18.4976C29.2338 17.7115 28.576 17.071 27.7686 17.071C26.9613 17.071 26.3035 17.7115 26.3035 18.4976C26.3035 19.2837 26.9613 19.9242 27.7686 19.9242C28.576 19.929 29.2338 19.2885 29.2338 18.4976ZM29.2338 27.0379C29.2338 26.2518 28.576 25.6113 27.7686 25.6113C26.9613 25.6113 26.3035 26.2518 26.3035 27.0379C26.3035 27.824 26.9613 28.4645 27.7686 28.4645C28.576 28.4645 29.2338 27.824 29.2338 27.0379ZM29.2338 35.5734C29.2338 34.7873 28.576 34.1468 27.7686 34.1468C26.9613 34.1468 26.3035 34.7873 26.3035 35.5734C26.3035 36.3595 26.9613 37 27.7686 37C28.576 37 29.2338 36.3595 29.2338 35.5734ZM20.4627 1.42662C20.4627 0.640526 19.8048 0 18.9975 0C18.1902 0 17.5323 0.640526 17.5323 1.42662C17.5323 2.21272 18.1902 2.85324 18.9975 2.85324C19.8098 2.85324 20.4627 2.21758 20.4627 1.42662ZM20.4627 9.9621C20.4627 9.176 19.8048 8.53548 18.9975 8.53548C18.1902 8.53548 17.5323 9.176 17.5323 9.9621C17.5323 10.7482 18.1902 11.3887 18.9975 11.3887C19.8098 11.3887 20.4627 10.753 20.4627 9.9621ZM20.4627 18.4976C20.4627 17.7115 19.8048 17.071 18.9975 17.071C18.1902 17.071 17.5323 17.7115 17.5323 18.4976C17.5323 19.2837 18.1902 19.9242 18.9975 19.9242C19.8098 19.929 20.4627 19.2885 20.4627 18.4976ZM20.4627 27.0379C20.4627 26.2518 19.8048 25.6113 18.9975 25.6113C18.1902 25.6113 17.5323 26.2518 17.5323 27.0379C17.5323 27.824 18.1902 28.4645 18.9975 28.4645C19.8098 28.4645 20.4627 27.824 20.4627 27.0379ZM20.4627 35.5734C20.4627 34.7873 19.8048 34.1468 18.9975 34.1468C18.1902 34.1468 17.5323 34.7873 17.5323 35.5734C17.5323 36.3595 18.1902 37 18.9975 37C19.8098 37 20.4627 36.3595 20.4627 35.5734ZM11.6965 1.42662C11.6965 0.640526 11.0387 0 10.2313 0C9.42398 0 8.76618 0.640526 8.76618 1.42662C8.76618 2.21272 9.42398 2.85324 10.2313 2.85324C11.0437 2.85324 11.6965 2.21758 11.6965 1.42662ZM11.6965 9.9621C11.6965 9.176 11.0387 8.53548 10.2313 8.53548C9.42398 8.53548 8.76618 9.176 8.76618 9.9621C8.76618 10.7482 9.42398 11.3887 10.2313 11.3887C11.0437 11.3887 11.6965 10.753 11.6965 9.9621ZM11.6965 18.4976C11.6965 17.7115 11.0387 17.071 10.2313 17.071C9.42398 17.071 8.76618 17.7115 8.76618 18.4976C8.76618 19.2837 9.42398 19.9242 10.2313 19.9242C11.0437 19.929 11.6965 19.2885 11.6965 18.4976ZM11.6965 27.0379C11.6965 26.2518 11.0387 25.6113 10.2313 25.6113C9.42398 25.6113 8.76618 26.2518 8.76618 27.0379C8.76618 27.824 9.42398 28.4645 10.2313 28.4645C11.0437 28.4645 11.6965 27.824 11.6965 27.0379ZM11.6965 35.5734C11.6965 34.7873 11.0387 34.1468 10.2313 34.1468C9.42398 34.1468 8.76618 34.7873 8.76618 35.5734C8.76618 36.3595 9.42398 37 10.2313 37C11.0437 37 11.6965 36.3595 11.6965 35.5734ZM2.93036 1.42662C2.93036 0.640526 2.27253 0 1.46518 0C0.657837 0 0 0.640526 0 1.42662C0 2.21272 0.657837 2.85324 1.46518 2.85324C2.27253 2.85324 2.93036 2.21758 2.93036 1.42662ZM2.93036 9.9621C2.93036 9.176 2.27253 8.53548 1.46518 8.53548C0.657837 8.53548 0 9.176 0 9.9621C0 10.7482 0.657837 11.3887 1.46518 11.3887C2.27253 11.3887 2.93036 10.753 2.93036 9.9621ZM2.93036 18.4976C2.93036 17.7115 2.27253 17.071 1.46518 17.071C0.657837 17.071 0 17.7115 0 18.4976C0 19.2837 0.657837 19.9242 1.46518 19.9242C2.27253 19.9242 2.93036 19.2885 2.93036 18.4976ZM2.93036 27.0379C2.93036 26.2518 2.27253 25.6113 1.46518 25.6113C0.657837 25.6113 0 26.2518 0 27.0379C0 27.824 0.657837 28.4645 1.46518 28.4645C2.27253 28.4645 2.93036 27.824 2.93036 27.0379ZM2.93036 35.5734C2.93036 34.7873 2.27253 34.1468 1.46518 34.1468C0.657837 34.1468 0 34.7873 0 35.5734C0 36.3595 0.657837 37 1.46518 37C2.27253 37 2.93036 36.3595 2.93036 35.5734Z" fill="#0D4F7A"/>
</svg>
        <h2 className="font-['Outfit'] text-center text-[#2D2D2D] font-[600] text-[36px] md:text-[56px] leading-tight px-[30px] md:px-[20px]">
          Still have a medical question?
        </h2>
        
        <h3 className="font-['Inter'] text-center text-[#2D2D2D] md:px-25 lg:px-23  font-[400] leading-[28px] text-[16px] md:mt-[2px] mt-[6px]">
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
                <label className="text-[16px] font-['Inter'] font-[400] text-[#2D2D2D] block">Full Name</label>
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
                <label className="text-[16px] font-['Inter'] font-[400] text-[#2D2D2D] block">Email</label>
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
              <label className="text-[16px] font-['Inter'] font-[400] text-[#2D2D2D] block">Your Medical Question</label>
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
              className="w-full bg-[#0D4F7A] font-['Inter'] hover:bg-[#0B4269] text-white py-[14px] md:py-[16px] mt-[26px] md:mt-[46px] px-[44px] rounded-[6px] text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D4F7A] focus:ring-offset-2"
            >
              Send Medical Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
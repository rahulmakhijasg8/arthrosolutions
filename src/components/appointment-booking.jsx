"use client"

import { useState, useRef } from "react"


export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phoneNumber: "",
    email: "",
    service: "",
    location: "",
    date: "",
    time: "",
  })

  const dateInputRef = useRef(null)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const openDatePicker = () => {
  if (dateInputRef.current) {
    dateInputRef.current.showPicker?.() || dateInputRef.current.focus()
  }
}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    
    <div className="w-full px-[20px] md:px-[60px] lg:px-[100px] mt-[32px] md:mt-[60px] font-['Inter']">
  <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-[24px] md:gap-[54px]">
        {/* Form Section */}
        <div 
          className="bg-white rounded-[18px] p-3 md:p-6 md:pt-[34px] "
          style={{
            boxShadow: '0 14px 34px 1px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div className="space-y-[14px] md:space-y-[28px]">
            {/* Full Name and Age */}
            <div className="grid md:grid-cols-2 gap-[14px] md:gap-[32px]">
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Full Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      value={formData.fullName}
      onChange={(e) => handleInputChange("fullName", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter']"
      style={{ caretColor: '#374151' }}
    />
  </div>
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Age</label>
    <select
      value={formData.age}
      onChange={(e) => handleInputChange("age", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter']"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        caretColor: '#374151'
      }}
    >
      <option value="" className="text-[#999999] font-['Inter']">Select your age</option>
      <option value="18-25" className="text-gray-900 font-['Inter']">18-25</option>
      <option value="26-35" className="text-gray-900 font-['Inter']">26-35</option>
      <option value="36-45" className="text-gray-900 font-['Inter']">36-45</option>
      <option value="46-55" className="text-gray-900 font-['Inter']">46-55</option>
      <option value="56-65" className="text-gray-900 font-['Inter']">56-65</option>
      <option value="65+" className="text-gray-900 font-['Inter']">65+</option>
    </select>
  </div>
</div>

{/* Phone Number and Email */}
<div className="grid md:grid-cols-2 gap-[14px] md:gap-[32px]">
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Phone Number</label>
    <input
      type="tel"
      placeholder="Enter your number"
      value={formData.phoneNumber}
      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter']"
      style={{ caretColor: '#374151' }}
    />
  </div>
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={(e) => handleInputChange("email", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter']"
      style={{ caretColor: '#374151' }}
    />
  </div>
</div>

{/* Service and Location */}
<div className="grid md:grid-cols-2 gap-[14px] md:gap-[32px]">
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Select Service</label>
    <select
      value={formData.service}
      onChange={(e) => handleInputChange("service", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter']"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        caretColor: '#374151'
      }}
    >
      <option value="" className="text-[#999999] font-['Inter']">Select service</option>
      <option value="consultation" className="text-gray-900 font-['Inter']">General Consultation</option>
      <option value="checkup" className="text-gray-900 font-['Inter']">Health Checkup</option>
      <option value="treatment" className="text-gray-900 font-['Inter']">Treatment</option>
      <option value="followup" className="text-gray-900 font-['Inter']">Follow-up</option>
    </select>
  </div>
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Preferred Location</label>
    <select
      value={formData.location}
      onChange={(e) => handleInputChange("location", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter']"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        caretColor: '#374151'
      }}
    >
      <option value="" className="text-[#999999] font-['Inter']">Select clinic</option>
      <option value="downtown" className="text-gray-900 font-['Inter']">Downtown Clinic</option>
      <option value="uptown" className="text-gray-900 font-['Inter']">Uptown Branch</option>
      <option value="suburbs" className="text-gray-900 font-['Inter']">Suburban Center</option>
      <option value="online" className="text-gray-900 font-['Inter']">Online Consultation</option>
    </select>
  </div>
</div>

{/* Date and Time */}
<div className="grid md:grid-cols-2 gap-[14px] md:gap-[32px]">
  <div className="space-y-2">
  <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Preferred Date</label>
  <div className="relative">
    <input
      ref={dateInputRef}  // Add this ref
      type="date"
      placeholder="Select date"
      value={formData.date}
      onChange={(e) => handleInputChange("date", e.target.value)}
      className="w-full pl-10 pr-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter']"
      style={{ caretColor: '#374151' }}
    />
    <svg 
      onClick={openDatePicker}  // Add this click handler
      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer" // Add cursor-pointer
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none"
    >        <path d="M17.4114 1.17578H15.6467V2.94049C15.6467 3.29343 15.3526 3.52872 15.0585 3.52872C14.7644 3.52872 14.4702 3.29343 14.4702 2.94049V1.17578H5.05848V2.94049C5.05848 3.29343 4.76436 3.52872 4.47024 3.52872C4.17613 3.52872 3.88201 3.29343 3.88201 2.94049V1.17578H2.1173C1.23495 1.17578 0.587891 1.94049 0.587891 2.94049V5.05813H19.4114V2.94049C19.4114 1.94049 18.3526 1.17578 17.4114 1.17578ZM0.587891 6.29343V17.0581C0.587891 18.117 1.23495 18.8228 2.17613 18.8228H17.4702C18.4114 18.8228 19.4702 18.0581 19.4702 17.0581V6.29343H0.587891ZM5.82318 16.1758H4.41142C4.17613 16.1758 3.94083 15.9993 3.94083 15.7052V14.2346C3.94083 13.9993 4.1173 13.764 4.41142 13.764H5.88201C6.1173 13.764 6.3526 13.9405 6.3526 14.2346V15.7052C6.29377 15.9993 6.1173 16.1758 5.82318 16.1758ZM5.82318 10.8817H4.41142C4.17613 10.8817 3.94083 10.7052 3.94083 10.4111V8.94049C3.94083 8.70519 4.1173 8.4699 4.41142 8.4699H5.88201C6.1173 8.4699 6.3526 8.64637 6.3526 8.94049V10.4111C6.29377 10.7052 6.1173 10.8817 5.82318 10.8817ZM10.5291 16.1758H9.05848C8.82318 16.1758 8.58789 15.9993 8.58789 15.7052V14.2346C8.58789 13.9993 8.76436 13.764 9.05848 13.764H10.5291C10.7644 13.764 10.9997 13.9405 10.9997 14.2346V15.7052C10.9997 15.9993 10.8232 16.1758 10.5291 16.1758ZM10.5291 10.8817H9.05848C8.82318 10.8817 8.58789 10.7052 8.58789 10.4111V8.94049C8.58789 8.70519 8.76436 8.4699 9.05848 8.4699H10.5291C10.7644 8.4699 10.9997 8.64637 10.9997 8.94049V10.4111C10.9997 10.7052 10.8232 10.8817 10.5291 10.8817ZM15.2349 16.1758H13.7644C13.5291 16.1758 13.2938 15.9993 13.2938 15.7052V14.2346C13.2938 13.9993 13.4702 13.764 13.7644 13.764H15.2349C15.4702 13.764 15.7055 13.9405 15.7055 14.2346V15.7052C15.7055 15.9993 15.5291 16.1758 15.2349 16.1758ZM15.2349 10.8817H13.7644C13.5291 10.8817 13.2938 10.7052 13.2938 10.4111V8.94049C13.2938 8.70519 13.4702 8.4699 13.7644 8.4699H15.2349C15.4702 8.4699 15.7055 8.64637 15.7055 8.94049V10.4111C15.7055 10.7052 15.5291 10.8817 15.2349 10.8817Z" fill="#0D4F7A"/>
      </svg>
    </div>
  </div>
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block">Preferred Time</label>
    <select
      value={formData.time}
      onChange={(e) => handleInputChange("time", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter']"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        caretColor: '#374151'
      }}
    >
      <option value="" className="text-[#999999] font-['Inter']">Select time</option>
      <option value="9:00" className="text-gray-900 font-['Inter']">9:00 AM</option>
      <option value="10:00" className="text-gray-900 font-['Inter']">10:00 AM</option>
      <option value="11:00" className="text-gray-900 font-['Inter']">11:00 AM</option>
      <option value="14:00" className="text-gray-900 font-['Inter']">2:00 PM</option>
      <option value="15:00" className="text-gray-900 font-['Inter']">3:00 PM</option>
      <option value="16:00" className="text-gray-900 font-['Inter']">4:00 PM</option>
    </select>
  </div>
</div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#0D4F7A] hover:bg-[#0B4269] text-white py-3 mt-[24px] md:mt-[18px] px-6 rounded-[6px] text-base font-medium font-['Inter'] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D4F7A] focus:ring-offset-2"
            >
              Book my appointment
            </button>
          </div>
        </div>

        {/* Information Section */}
        <div className="space-y-[24px] md:space-y-[24px]">
          {/* What to Expect */}
          <div 
            className="rounded-[18px] p-[14px] md:p-[34px] md:pr-[54px]"
            style={{ background: '#FAFAFA' }}
          >
            <h3 className="text-[18px] md:text-[20px] font-[600] font-['Inter'] text-[#0D4F7A]">What to Expect</h3>
            <div className="mt-[12px] md:mt-[24px] space-y-[20px]">
              <div className="flex items-center gap-[8px]">
  <div className="w-8 h-8 bg-[#0D4F7A] font-['Inter'] text-white rounded-full flex items-center justify-center text-[14px] font-[400] flex-shrink-0">
    1
  </div>
  <div>
    <h4 className="font-[400] text-[16px] font-['Inter'] text-[#2D2D2D]">Comprehensive Assessment</h4>
    <p className="font-[300] text-[14px] font-['Inter'] text-[#2D2D2D]">Thorough evaluation of your condition and medical history</p>
  </div>
</div>
<div className="flex items-center gap-[8px]">
  <div className="w-8 h-8 bg-[#4CAF50] font-['Inter'] text-white rounded-full flex items-center justify-center text-[14px] font-[400] flex-shrink-0">
    2
  </div>
  <div>
    <h4 className="font-[400] text-[16px] font-['Inter'] text-[#2D2D2D]">Personalized Treatment Plan</h4>
    <p className="font-[300] text-[14px] font-['Inter'] text-[#2D2D2D]">Customized approach based on your lifestyle and goals</p>
  </div>
</div>
<div className="flex items-center gap-[8px]">
  <div className="w-8 h-8 bg-[#FE7C49] font-['Inter'] text-white rounded-full flex items-center justify-center text-[14px] font-[400] flex-shrink-0">
    3
  </div>
  <div>
    <h4 className="font-[400] text-[16px] font-['Inter'] text-[#2D2D2D]">Clear Next Steps</h4>
    <p className="font-[300] text-[14px] font-['Inter'] text-[#2D2D2D]">Detailed explanation of treatment options and timeline</p>
  </div>
</div>
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className="px-[14px] md:pl-[34px]"
          >
            <h3 className="text-[18px] md:text-[20px] font-['Inter'] font-[600] text-[#0D4F7A]">Contact Information</h3>
            <div className="space-y-[6px] my-[14px] md:my-[14px] ">
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
      <svg className="h-6 w-6 text-gray-500" fill="none" stroke="#0D4F7A" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
    <span className="text-[14px] md:text-[16px] font-['Inter'] font-[400] text-[#64648A]">Upadhyaya.mohit@gmail.com</span>
  </div>
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
      <svg className="h-6 w-6 text-gray-500" fill="none" stroke="#4CAF50" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </div>
    <span className="text-[14px] md:text-[16px] font-['Inter'] font-[400] text-[#64648A]">+91 - 9820273995</span>
  </div>
</div>

            <div 
              className="w-full h-px my-[14px] md:my-[12px]"
              style={{ backgroundColor: '#0000003D' }}
            ></div>

            <div className="flex flex-col items-center">
              <p className="text-[14px] text-[#2D2D2D] font-[400] font-['Inter']">Prefer WhatsApp?</p>
              <button className="w-fit md:w-fit mt-[12px] border border-[#4CAF50] text-[#4CAF50] hover:bg-green-50 bg-transparent py-3 px-4 rounded-lg font-['Inter'] text-[14px] font-[400] transition-colors duration-200 flex items-center justify-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                Chat with us on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-outer-spin-button {
    display: none;
  }
`}</style>
    </div>
  )
}
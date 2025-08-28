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
  <div className="max-w-7xl relative mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 bottom-50 -right-20" width="559" height="689" viewBox="0 0 559 689" fill="none">
  <g filter="url(#filter0_f_163_7543)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M359.561 256.388C385.22 260.341 388.444 295.926 405.469 315.493C420.137 332.351 448.865 339.075 450.857 361.316C452.89 384.01 432.873 402.638 414.483 416.136C398.776 427.665 378.985 426.655 359.561 428.327C337.012 430.268 313.263 438.772 294.273 426.483C272.27 412.244 255.475 387.484 256.013 361.316C256.544 335.442 278.701 317.204 296.895 298.766C315.302 280.115 333.638 252.395 359.561 256.388Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7543" x="0" y="0" width="707" height="689" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="128" result="effect1_foregroundBlur_163_7543"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-50 -left-26" width="35" height="69" viewBox="0 0 35 69" fill="none">
  <path opacity="0.24" d="M32.2624 5.32092C30.754 5.32092 29.5248 4.12643 29.5248 2.66046C29.5248 1.19449 30.754 0 32.2624 0C33.7709 0 35 1.19449 35 2.66046C35 4.13548 33.7709 5.32092 32.2624 5.32092ZM35 18.578C35 17.112 33.7709 15.9175 32.2624 15.9175C30.754 15.9175 29.5248 17.112 29.5248 18.578C29.5248 20.0439 30.754 21.2384 32.2624 21.2384C33.7709 21.2384 35 20.053 35 18.578ZM35 34.4955C35 33.0295 33.7709 31.835 32.2624 31.835C30.754 31.835 29.5248 33.0295 29.5248 34.4955C29.5248 35.9614 30.754 37.1559 32.2624 37.1559C33.7709 37.165 35 35.9705 35 34.4955ZM35 50.422C35 48.9561 33.7709 47.7616 32.2624 47.7616C30.754 47.7616 29.5248 48.9561 29.5248 50.422C29.5248 51.888 30.754 53.0825 32.2624 53.0825C33.7709 53.0825 35 51.888 35 50.422ZM35 66.3395C35 64.8736 33.7709 63.6791 32.2624 63.6791C30.754 63.6791 29.5248 64.8736 29.5248 66.3395C29.5248 67.8055 30.754 69 32.2624 69C33.7709 69 35 67.8055 35 66.3395ZM18.6211 2.66046C18.6211 1.19449 17.392 0 15.8835 0C14.3751 0 13.1459 1.19449 13.1459 2.66046C13.1459 4.12643 14.3751 5.32092 15.8835 5.32092C17.392 5.32092 18.6211 4.13548 18.6211 2.66046ZM18.6211 18.578C18.6211 17.112 17.392 15.9175 15.8835 15.9175C14.3751 15.9175 13.1459 17.112 13.1459 18.578C13.1459 20.0439 14.3751 21.2384 15.8835 21.2384C17.392 21.2384 18.6211 20.053 18.6211 18.578ZM18.6211 34.4955C18.6211 33.0295 17.392 31.835 15.8835 31.835C14.3751 31.835 13.1459 33.0295 13.1459 34.4955C13.1459 35.9614 14.3751 37.1559 15.8835 37.1559C17.392 37.165 18.6211 35.9705 18.6211 34.4955ZM18.6211 50.422C18.6211 48.9561 17.392 47.7616 15.8835 47.7616C14.3751 47.7616 13.1459 48.9561 13.1459 50.422C13.1459 51.888 14.3751 53.0825 15.8835 53.0825C17.392 53.0825 18.6211 51.888 18.6211 50.422ZM18.6211 66.3395C18.6211 64.8736 17.392 63.6791 15.8835 63.6791C14.3751 63.6791 13.1459 64.8736 13.1459 66.3395C13.1459 67.8055 14.3751 69 15.8835 69C17.392 69 18.6211 67.8055 18.6211 66.3395ZM2.23292 2.66046C2.23292 1.19449 1.0038 0 -0.504662 0C-2.01312 0 -3.24224 1.19449 -3.24224 2.66046C-3.24224 4.12643 -2.01312 5.32092 -0.504662 5.32092C1.01311 5.32092 2.23292 4.13548 2.23292 2.66046ZM2.23292 18.578C2.23292 17.112 1.0038 15.9175 -0.504662 15.9175C-2.01312 15.9175 -3.24224 17.112 -3.24224 18.578C-3.24224 20.0439 -2.01312 21.2384 -0.504662 21.2384C1.01311 21.2384 2.23292 20.053 2.23292 18.578ZM2.23292 34.4955C2.23292 33.0295 1.0038 31.835 -0.504662 31.835C-2.01312 31.835 -3.24224 33.0295 -3.24224 34.4955C-3.24224 35.9614 -2.01312 37.1559 -0.504662 37.1559C1.01311 37.165 2.23292 35.9705 2.23292 34.4955ZM2.23292 50.422C2.23292 48.9561 1.0038 47.7616 -0.504662 47.7616C-2.01312 47.7616 -3.24224 48.9561 -3.24224 50.422C-3.24224 51.888 -2.01312 53.0825 -0.504662 53.0825C1.01311 53.0825 2.23292 51.888 2.23292 50.422ZM2.23292 66.3395C2.23292 64.8736 1.0038 63.6791 -0.504662 63.6791C-2.01312 63.6791 -3.24224 64.8736 -3.24224 66.3395C-3.24224 67.8055 -2.01312 69 -0.504662 69C1.01311 69 2.23292 67.8055 2.23292 66.3395ZM-14.146 2.66046C-14.146 1.19449 -15.3751 0 -16.8836 0C-18.392 0 -19.6211 1.19449 -19.6211 2.66046C-19.6211 4.12643 -18.392 5.32092 -16.8836 5.32092C-15.3658 5.32092 -14.146 4.13548 -14.146 2.66046ZM-14.146 18.578C-14.146 17.112 -15.3751 15.9175 -16.8836 15.9175C-18.392 15.9175 -19.6211 17.112 -19.6211 18.578C-19.6211 20.0439 -18.392 21.2384 -16.8836 21.2384C-15.3658 21.2384 -14.146 20.053 -14.146 18.578ZM-14.146 34.4955C-14.146 33.0295 -15.3751 31.835 -16.8836 31.835C-18.392 31.835 -19.6211 33.0295 -19.6211 34.4955C-19.6211 35.9614 -18.392 37.1559 -16.8836 37.1559C-15.3658 37.165 -14.146 35.9705 -14.146 34.4955ZM-14.146 50.422C-14.146 48.9561 -15.3751 47.7616 -16.8836 47.7616C-18.392 47.7616 -19.6211 48.9561 -19.6211 50.422C-19.6211 51.888 -18.392 53.0825 -16.8836 53.0825C-15.3658 53.0825 -14.146 51.888 -14.146 50.422ZM-14.146 66.3395C-14.146 64.8736 -15.3751 63.6791 -16.8836 63.6791C-18.392 63.6791 -19.6211 64.8736 -19.6211 66.3395C-19.6211 67.8055 -18.392 69 -16.8836 69C-15.3658 69 -14.146 67.8055 -14.146 66.3395ZM-30.5248 2.66046C-30.5248 1.19449 -31.754 0 -33.2624 0C-34.7709 0 -36 1.19449 -36 2.66046C-36 4.12643 -34.7709 5.32092 -33.2624 5.32092C-31.754 5.32092 -30.5248 4.13548 -30.5248 2.66046ZM-30.5248 18.578C-30.5248 17.112 -31.754 15.9175 -33.2624 15.9175C-34.7709 15.9175 -36 17.112 -36 18.578C-36 20.0439 -34.7709 21.2384 -33.2624 21.2384C-31.754 21.2384 -30.5248 20.053 -30.5248 18.578ZM-30.5248 34.4955C-30.5248 33.0295 -31.754 31.835 -33.2624 31.835C-34.7709 31.835 -36 33.0295 -36 34.4955C-36 35.9614 -34.7709 37.1559 -33.2624 37.1559C-31.754 37.1559 -30.5248 35.9705 -30.5248 34.4955ZM-30.5248 50.422C-30.5248 48.9561 -31.754 47.7616 -33.2624 47.7616C-34.7709 47.7616 -36 48.9561 -36 50.422C-36 51.888 -34.7709 53.0825 -33.2624 53.0825C-31.754 53.0825 -30.5248 51.888 -30.5248 50.422ZM-30.5248 66.3395C-30.5248 64.8736 -31.754 63.6791 -33.2624 63.6791C-34.7709 63.6791 -36 64.8736 -36 66.3395C-36 67.8055 -34.7709 69 -33.2624 69C-31.754 69 -30.5248 67.8055 -30.5248 66.3395Z" fill="#0D4F7A"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 -left-15 -bottom-15" width="71" height="69" viewBox="0 0 71 69" fill="none">
  <path opacity="0.24" d="M68.2624 5.32092C66.754 5.32092 65.5248 4.12643 65.5248 2.66046C65.5248 1.19449 66.754 0 68.2624 0C69.7709 0 71 1.19449 71 2.66046C71 4.13548 69.7709 5.32092 68.2624 5.32092ZM71 18.578C71 17.112 69.7709 15.9175 68.2624 15.9175C66.754 15.9175 65.5248 17.112 65.5248 18.578C65.5248 20.0439 66.754 21.2384 68.2624 21.2384C69.7709 21.2384 71 20.053 71 18.578ZM71 34.4955C71 33.0295 69.7709 31.835 68.2624 31.835C66.754 31.835 65.5248 33.0295 65.5248 34.4955C65.5248 35.9614 66.754 37.1559 68.2624 37.1559C69.7709 37.165 71 35.9705 71 34.4955ZM71 50.422C71 48.9561 69.7709 47.7616 68.2624 47.7616C66.754 47.7616 65.5248 48.9561 65.5248 50.422C65.5248 51.888 66.754 53.0825 68.2624 53.0825C69.7709 53.0825 71 51.888 71 50.422ZM71 66.3395C71 64.8736 69.7709 63.6791 68.2624 63.6791C66.754 63.6791 65.5248 64.8736 65.5248 66.3395C65.5248 67.8055 66.754 69 68.2624 69C69.7709 69 71 67.8055 71 66.3395ZM54.6211 2.66046C54.6211 1.19449 53.392 0 51.8835 0C50.3751 0 49.1459 1.19449 49.1459 2.66046C49.1459 4.12643 50.3751 5.32092 51.8835 5.32092C53.392 5.32092 54.6211 4.13548 54.6211 2.66046ZM54.6211 18.578C54.6211 17.112 53.392 15.9175 51.8835 15.9175C50.3751 15.9175 49.1459 17.112 49.1459 18.578C49.1459 20.0439 50.3751 21.2384 51.8835 21.2384C53.392 21.2384 54.6211 20.053 54.6211 18.578ZM54.6211 34.4955C54.6211 33.0295 53.392 31.835 51.8835 31.835C50.3751 31.835 49.1459 33.0295 49.1459 34.4955C49.1459 35.9614 50.3751 37.1559 51.8835 37.1559C53.392 37.165 54.6211 35.9705 54.6211 34.4955ZM54.6211 50.422C54.6211 48.9561 53.392 47.7616 51.8835 47.7616C50.3751 47.7616 49.1459 48.9561 49.1459 50.422C49.1459 51.888 50.3751 53.0825 51.8835 53.0825C53.392 53.0825 54.6211 51.888 54.6211 50.422ZM54.6211 66.3395C54.6211 64.8736 53.392 63.6791 51.8835 63.6791C50.3751 63.6791 49.1459 64.8736 49.1459 66.3395C49.1459 67.8055 50.3751 69 51.8835 69C53.392 69 54.6211 67.8055 54.6211 66.3395ZM38.2329 2.66046C38.2329 1.19449 37.0038 0 35.4953 0C33.9869 0 32.7578 1.19449 32.7578 2.66046C32.7578 4.12643 33.9869 5.32092 35.4953 5.32092C37.0131 5.32092 38.2329 4.13548 38.2329 2.66046ZM38.2329 18.578C38.2329 17.112 37.0038 15.9175 35.4953 15.9175C33.9869 15.9175 32.7578 17.112 32.7578 18.578C32.7578 20.0439 33.9869 21.2384 35.4953 21.2384C37.0131 21.2384 38.2329 20.053 38.2329 18.578ZM38.2329 34.4955C38.2329 33.0295 37.0038 31.835 35.4953 31.835C33.9869 31.835 32.7578 33.0295 32.7578 34.4955C32.7578 35.9614 33.9869 37.1559 35.4953 37.1559C37.0131 37.165 38.2329 35.9705 38.2329 34.4955ZM38.2329 50.422C38.2329 48.9561 37.0038 47.7616 35.4953 47.7616C33.9869 47.7616 32.7578 48.9561 32.7578 50.422C32.7578 51.888 33.9869 53.0825 35.4953 53.0825C37.0131 53.0825 38.2329 51.888 38.2329 50.422ZM38.2329 66.3395C38.2329 64.8736 37.0038 63.6791 35.4953 63.6791C33.9869 63.6791 32.7578 64.8736 32.7578 66.3395C32.7578 67.8055 33.9869 69 35.4953 69C37.0131 69 38.2329 67.8055 38.2329 66.3395ZM21.854 2.66046C21.854 1.19449 20.6249 0 19.1164 0C17.608 0 16.3789 1.19449 16.3789 2.66046C16.3789 4.12643 17.608 5.32092 19.1164 5.32092C20.6342 5.32092 21.854 4.13548 21.854 2.66046ZM21.854 18.578C21.854 17.112 20.6249 15.9175 19.1164 15.9175C17.608 15.9175 16.3789 17.112 16.3789 18.578C16.3789 20.0439 17.608 21.2384 19.1164 21.2384C20.6342 21.2384 21.854 20.053 21.854 18.578ZM21.854 34.4955C21.854 33.0295 20.6249 31.835 19.1164 31.835C17.608 31.835 16.3789 33.0295 16.3789 34.4955C16.3789 35.9614 17.608 37.1559 19.1164 37.1559C20.6342 37.165 21.854 35.9705 21.854 34.4955ZM21.854 50.422C21.854 48.9561 20.6249 47.7616 19.1164 47.7616C17.608 47.7616 16.3789 48.9561 16.3789 50.422C16.3789 51.888 17.608 53.0825 19.1164 53.0825C20.6342 53.0825 21.854 51.888 21.854 50.422ZM21.854 66.3395C21.854 64.8736 20.6249 63.6791 19.1164 63.6791C17.608 63.6791 16.3789 64.8736 16.3789 66.3395C16.3789 67.8055 17.608 69 19.1164 69C20.6342 69 21.854 67.8055 21.854 66.3395ZM5.47515 2.66046C5.47515 1.19449 4.24604 0 2.73758 0C1.22912 0 0 1.19449 0 2.66046C0 4.12643 1.22912 5.32092 2.73758 5.32092C4.24604 5.32092 5.47515 4.13548 5.47515 2.66046ZM5.47515 18.578C5.47515 17.112 4.24604 15.9175 2.73758 15.9175C1.22912 15.9175 0 17.112 0 18.578C0 20.0439 1.22912 21.2384 2.73758 21.2384C4.24604 21.2384 5.47515 20.053 5.47515 18.578ZM5.47515 34.4955C5.47515 33.0295 4.24604 31.835 2.73758 31.835C1.22912 31.835 0 33.0295 0 34.4955C0 35.9614 1.22912 37.1559 2.73758 37.1559C4.24604 37.1559 5.47515 35.9705 5.47515 34.4955ZM5.47515 50.422C5.47515 48.9561 4.24604 47.7616 2.73758 47.7616C1.22912 47.7616 0 48.9561 0 50.422C0 51.888 1.22912 53.0825 2.73758 53.0825C4.24604 53.0825 5.47515 51.888 5.47515 50.422ZM5.47515 66.3395C5.47515 64.8736 4.24604 63.6791 2.73758 63.6791C1.22912 63.6791 0 64.8736 0 66.3395C0 67.8055 1.22912 69 2.73758 69C4.24604 69 5.47515 67.8055 5.47515 66.3395Z" fill="#0D4F7A"/>
</svg>
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
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Full Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      value={formData.fullName}
      onChange={(e) => handleInputChange("fullName", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
      style={{ caretColor: '#374151' }}
    />
  </div>
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Age</label>
    <select
      value={formData.age}
      onChange={(e) => handleInputChange("age", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
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
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Phone Number</label>
    <input
      type="tel"
      placeholder="Enter your number"
      value={formData.phoneNumber}
      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
      style={{ caretColor: '#374151' }}
    />
  </div>
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={(e) => handleInputChange("email", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-[#999999] text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
      style={{ caretColor: '#374151' }}
    />
  </div>
</div>

{/* Service and Location */}
<div className="grid md:grid-cols-2 gap-[14px] md:gap-[32px]">
  <div className="space-y-2">
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Select Service</label>
    <select
      value={formData.service}
      onChange={(e) => handleInputChange("service", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
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
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Preferred Location</label>
    <select
      value={formData.location}
      onChange={(e) => handleInputChange("location", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
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
  <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Preferred Date</label>
  <div className="relative ml-[2px] md:ml-0">
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
    <label className="text-[16px] font-[400] font-['Inter'] text-[#2D2D2D] block ml-[2px] md:ml-0">Preferred Time</label>
    <select
      value={formData.time}
      onChange={(e) => handleInputChange("time", e.target.value)}
      className="w-full px-3 py-3 border border-[#C1C1C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none text-gray-900 font-['Inter'] ml-[2px] md:ml-0"
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
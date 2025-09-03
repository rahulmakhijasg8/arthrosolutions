import Navbar from "@/components/navbar";
import OrthopedicHero from "@/components/orthopedichero";
import Heading from "@/components/heading";
import ThreeCardRow from "@/components/threecardrow";
import MedicalToggleComponent from "@/components/medicaltogglecomponent";
import StatsComponent from "@/components/stats";
import DoctorHeroSection from "@/components/doctorherosection";
import { ClinicCardContainer } from "@/components/clinic-cardcontainer";
import TestimonialCarousel from "@/components/testimonial-carousal";
import AppointmentBooking from "@/components/appointment-booking";
import Image from "next/image";

export default function Home() {

  const Cards = [
    {
      icon: '/fellowship.png',
      title: ' Young, UK-Fellowship Trained Surgeon',
    },
    {
      icon: '/techniques.png',
      title: 'Cutting-Edge Minimally Invasive Techniques',
    },
    {
      icon: '/focus.png',
      title: 'Age-Neutral Focus: 18 to 85+'
    }
  ]

  const medicalTabsData = [
    {
      buttonLabel: "SHOULDER CARE",
      title: "For Throwers, Swimmers & Active Lifestyles",
      image: "/shoulder.png", // Replace with actual image path
      imageAlt: "Shoulder care treatment",
      imagePlaceholder: "Shoulder Care Image",
      gradientOverlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.64) 84.26%)",
      badges: [
        { text: "Ideal For Athletes", className: "bg-[#7D7D7D]" },
        { text: "Minimally Invasive", className: "bg-[#7D7D7D]" }
      ],
      conditionsTitle: "Conditions Treated",
      conditions: [
        "Rotator Cuff Tears",
        "Shoulder Impingement", 
        "Frozen Shoulder",
        "Sports-Related Injuries",
        "Arthritis"
      ],
      proceduresTitle: "Key Procedures",
      procedures: [
        {
          name: "Arthroscopic Rotator Cuff Repair",
          benefit: "Minimal scarring, faster recovery",
          recovery: "4-6 months to sport",
          borderColor: "border-blue-600"
        },
        {
          name: "Shoulder Replacement",
          benefit: "Pain-free movement", 
          recovery: "6-12 months for full activity",
          borderColor: "border-blue-600"
        },
        {
          name: "Arthroscopic Stabilization",
          benefit: "Shoulder stability",
          recovery: "4 to 6 months to return to sport",
          borderColor: "border-blue-600"
        }
      ]
    },
    {
      buttonLabel: "KNEE REVOLUTION",
      title: "For Athletes & Active Individuals",
      image: "/knee-solutions.png", // Replace with actual image path
      imageAlt: "Doctor examining patient's knee",
      imagePlaceholder: "Knee Revolution Image",
      badges: [
        { text: "Advanced Technology", className: "bg-[#7D7D7D]" },
        { text: "Quick Recovery", className: "bg-[#7D7D7D]" }
      ],
      conditions: [
  "ACL/PCL Tears",
  "Meniscus Injuries",
  "Knee Arthritis",
  "Patella Dislocation",
  "Sports Injuries"
],

procedures: [
  {
    name: "ACL Reconstruction",
    benefit: "Return to pre-injury performance",
    recovery: "6-9 months to competitive sport",
    borderColor: "border-red-600"
  },
  {
    name: "Total / Partial Knee Replacement",
    benefit: "Complete pain relief", 
    recovery: "6-8 weeks return to activity",
    borderColor: "border-red-600"
  },
  {
    name: "Meniscus Repair ",
    benefit: "Preserves natural cartilage",
    recovery: "6-12 weeks return to activity",
    borderColor: "border-red-600"
  }
]
    },
    {
      buttonLabel: "HIP RENEWAL",
      title: "For Runners & Movement Enthusiasts", 
      image: "/hip-solutions.png", // Replace with actual image path
      imageAlt: "Doctor examining patient's hip",
      imagePlaceholder: "Hip Renewal Image",
      badges: [
        { text: "MOBILITY EXPERT", className: "[#7D7D7D]" },
        { text: "MOVEMENT FOCUSED", className: "[#7D7D7D]" }
      ],
      conditions: [
  "Hip Arthritis",
  "Hip Fractures",
  "Femoroacetabular Impingement",
  "Avascular Necrosis"
],

procedures: [
  {
    name: "Hip Replacement",
    benefit: "Minimally invasive repair",
    recovery: "4-6 weeks rehabilitation",
    borderColor: "border-red-600"
  }
]
    }
  ];

const clinicsData = [
  {
    id: 1,
    title: "Kumar Nursing Home",
    subtitle: "Main consultation clinic with advanced diagnostic facilities",
    address: "14th/A road, Khar West",
    phone: "+91 - 9820273995",
    timing: "Tuesday/ Thursday/ Saturday: 9 AM-12 Noon",
    services: "Quick Consult & Rehabilitation",
    imageUrl: "/Kumar.png",
    badgeText: "Main Clinic",
    mapLink: "https://www.google.com/maps/place/Kumar+Nursing+Home/@19.0748635,72.8324545,723m/data=!3m1!1e3!4m6!3m5!1s0x3be7c90c0b7cc485:0x72c18878fe91f878!8m2!3d19.0748635!4d72.8324545!16s%2Fg%2F1tlgwf86?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 2,
    title: "Surya Multispecialty Hospital",
    subtitle: "State-of-the-art surgical facility with OT and recovery suites",
    address: "Mangal ashirwad, 101-102, SV road, Santacruz west, Mumbai 54",
    phone: "+91 - 9820273995",
    timing: "Tuesday/ Thursday: 5 PM-7 PM",
    services: "Consult & Surgeries",
    imageUrl: "/surya.png",
    badgeText: "Main Clinic",
    mapLink: "https://www.google.com/maps/place/Surya+Hospitals/@19.0855625,72.8353123,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c9a669e34eef:0xe4c3095ea3853d52!8m2!3d19.0855574!4d72.8378872!16s%2Fg%2F1vhkh__k?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 3,
    title: "Upadhyaya Nursing Home",
    subtitle: "Dedicated orthopaedic surgical centre",
    address: "1st floor, Moiz apartment, 12th road, Sen nagar, Santacruz East, Mumbai 55",
    phone: "+91 - 9820273995",
    timing: "Wednesday/ Saturday: 5 PM-8 PM",
    services: "Consult & Surgeries",
    imageUrl: "/raheja.png",
    badgeText: "Main Clinic",
    mapLink: "https://www.google.com/maps/place/Upadhyay+Nursing+Home/@19.0813223,72.8436903,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c90e1a9897c1:0x4eacb757e2c278a9!8m2!3d19.0813172!4d72.8462652!16s%2Fg%2F1tdm6sr4?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 4,
    title: "S.L. Raheja hospital",
    subtitle: "Comprehensive multispeciality hospital and surgical set up",
    address: "Raheja Rugnalaya Marg, mahim west, mumbai 16",
    phone: "+91 - 9820273995",
    timing: "Monday/ Friday: 6 PM-8 PM",
    services: "Consult & Surgeries",
    imageUrl: "/raheja.png",
    badgeText: "Main Clinic",
    mapLink: "https://www.google.com/maps/place/Fortis+S+L+Raheja+Hospital+-+Best+Hospital+in+Mumbai/@19.046289,72.8401043,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c92f84c13ec9:0x807c1cbf1b5e8536!8m2!3d19.0462839!4d72.8426792!16s%2Fg%2F1thz03zj?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Ritik Mehra",
    procedure: "ACL Surgery",
    testimonial: "Resumed gym in 16 weeks post-ACL surgery! Dr. Mohit's technique was incredible minimal pain and the fastest recovery.",
    rating: 5,
    initials: "RM",
    profileImage: "/t1.png", // Add your image path here
    bgColor: "from-pink-200 to-pink-300",
  },
  {
    id: 2,
    name: "Monika Rathi",
    procedure: "Shoulder Surgery",
    testimonial: "Back to cricket in 12 weeks! The arthroscopic shoulder surgery was a game-changer. Professional approach and excellent results.",
    rating: 5,
    initials: "MR",
    profileImage: "/t2.png", // Add your image path here
    bgColor: "from-purple-200 to-purple-300",
  },
  {
    id: 3,
    name: "Ramesh Sharma",
    procedure: "Hip Replacement",
    testimonial: "Hip replacement at 70? Now I dance with grandkids! The care and attention from the entire team made this journey so much easier.",
    rating: 5,
    initials: "RS",
    profileImage: '/t3.png',
    bgColor: "from-green-200 to-green-300",
  },
  {
    id: 4,
    name: "Monika Rathi",
    procedure: "Shoulder Surgery",
    testimonial: "Back to cricket in 12 weeks! The arthroscopic shoulder surgery was a game-changer. Professional approach and excellent results.",
    rating: 5,
    initials: "MR",
    profileImage: "/t2.png", // Add your image path here
    bgColor: "from-purple-200 to-purple-300",
  },
  {
    id: 5,
    name: "Ramesh Sharma",
    procedure: "Hip Replacement",
    testimonial: "Hip replacement at 70? Now I dance with grandkids! The care and attention from the entire team made this journey so much easier.",
    rating: 5,
    initials: "RS",
    profileImage: '/t3.png',
    bgColor: "from-green-200 to-green-300",
  },
  {
    id: 6,
    name: "Monika Rathi",
    procedure: "Shoulder Surgery",
    testimonial: "Back to cricket in 12 weeks! The arthroscopic shoulder surgery was a game-changer. Professional approach and excellent results.",
    rating: 5,
    initials: "MR",
    profileImage: "/t2.png", // Add your image path here
    bgColor: "from-purple-200 to-purple-300",
  },
  {
    id: 7,
    name: "Ramesh Sharma",
    procedure: "Hip Replacement",
    testimonial: "Hip replacement at 70? Now I dance with grandkids! The care and attention from the entire team made this journey so much easier.",
    rating: 5,
    initials: "RS",
    profileImage: '/t3.png',
    bgColor: "from-green-200 to-green-300",
  },
];

  return (
    <>
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden lg:block top-0 left-0" width="316" height="315" viewBox="0 0 316 315" fill="none">
  <g filter="url(#filter0_f_163_7599)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M102.012 50.1023C118.753 50.4123 138.025 39.4265 150.328 50.7853C162.688 62.1977 154.655 82.2832 155.081 99.1012C155.527 116.724 165.541 137.705 152.835 149.925C140.141 162.133 119.611 149.475 102.012 150.141C82.9848 150.86 61.0639 166.963 47.1946 153.918C33.3573 140.903 46.9016 118.079 47.7475 99.1012C48.5237 81.6855 38.9337 60.6454 51.8724 48.9621C64.7709 37.3152 84.6357 49.7805 102.012 50.1023Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7599" x="-115" y="-112" width="430.25" height="427" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="78" result="effect1_foregroundBlur_163_7599"/>
    </filter>
  </defs>
</svg>
    <Navbar/>
    </div>
    {/* Sticky WhatsApp Button */}
<div className="fixed bottom-6 hidden lg:block right-6 z-50">
  <a 
    href="#" 
    // target="_blank" 
    className="block hover:scale-110 transition-transform duration-300"
  >
    <Image 
      src="/whatsappanimation.svg" 
      width={56} 
      height={56} 
      alt="WhatsApp Contact"
      className="drop-shadow-lg"
    />
  </a>
</div>
    <OrthopedicHero title={[
          { text: "Precise Orthopaedic care ", highlight: false },
          { text: "for athletic performance", highlight: true },
          { text: " and ageless joints", highlight: false }
        ]} description='From Sports Injuries to Joint Replacement, Comprehensive Solutions Under one roof by globally trained Orthopaedic surgeon, Dr. Mohit Upadhyaya.'
        buttonText="Schedule A Consultation" buttonHref="#" rightImageAlt="test" rightImage='/homehero.png'
        stats={[
  { number: "7+", label: "Years Experience", numberColor: "#0D4F7A" },
  { number: "3000+", label: "Surgeries", numberColor: "#4EBA64" },
]} />
<div className="relative">
<svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 hidden lg:block -top-60 left-0" width="436" height="626" viewBox="0 0 436 626" fill="none">
  <g filter="url(#filter0_f_163_7557)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0257 229.755C54.3681 217.536 78.9594 245.371 105.015 253.304C126.87 259.957 151.379 256.476 168.281 271.845C190.304 291.869 215.429 318.613 208.74 347.617C202.067 376.546 167.497 388.598 139.247 397.731C118.234 404.525 97.9186 392.528 75.9233 390.556C47.7908 388.033 12.7332 406.435 -5.3818 384.764C-23.4094 363.197 -2.55692 331.56 3.70258 304.156C9.79258 277.495 5.58399 242.023 30.0257 229.755Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7557" x="-238.561" y="0.698547" width="674.4" height="625.095" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="113" result="effect1_foregroundBlur_163_7557"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute z-10 hidden lg:block -top-80 right-50" width="498" height="585" viewBox="0 0 498 585" fill="none">
  <g filter="url(#filter0_f_163_7600)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M321.685 234.265C337.859 236.923 355.264 237.04 366.705 248.778C378.038 260.406 380.664 277.588 379.707 293.797C378.811 308.974 372.313 322.927 361.685 333.798C350.921 344.807 336.797 350.194 321.685 353.143C301.483 357.086 279.777 364.046 262.287 353.195C241.795 340.482 226.682 317.904 226.025 293.797C225.356 269.257 238.115 244.042 258.958 231.071C277.436 219.571 300.208 230.735 321.685 234.265Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7600" x="0" y="0" width="605.888" height="585" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="113" result="effect1_foregroundBlur_163_7600"/>
    </filter>
  </defs>
</svg>
<Heading title='Why Choose Arthro Solutions?' optionalsubtitle='Surgery to Rehabilitation in One Ecosystem' subtitle="Unlike traditional orthopaedic clinics, we merge non operative management & surgical precision with tailored rehab programs – ensuring athletes return stronger and seniors reclaim active lives." />
  </div>
   <ThreeCardRow cards={Cards}  />
   <div className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 hidden lg:block right-0 bottom-0" width="480" height="632" viewBox="0 0 480 632" fill="none">
  <g filter="url(#filter0_f_163_7556)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M336.833 227.075C362.739 224.219 394.364 225.837 409.305 247.192C423.783 267.885 403.055 294.452 401.612 319.665C400.333 342.024 414.936 366.406 401.461 384.294C387.269 403.134 360.359 407.354 336.833 405.658C314.885 404.075 298.28 389.091 280.896 375.602C259.44 358.954 226.517 346.817 226.006 319.665C225.495 292.483 257.886 279.014 278.75 261.583C296.716 246.573 313.562 229.64 336.833 227.075Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7556" x="0" y="0" width="640.417" height="632" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="113" result="effect1_foregroundBlur_163_7556"/>
    </filter>
  </defs>
</svg>
  <Heading title='Surgical Precision for Every Joint, Every Age' />
  <MedicalToggleComponent tabs={medicalTabsData} defaultTab={0} />
  </div>
  <StatsComponent />
  <DoctorHeroSection />
  <Heading title='Strategic Locations Across Mumbai' subtitle="From consultation to surgery to rehabilitation we're strategically located for your convenience" />
  <ClinicCardContainer clinics={clinicsData} />
  <div id="testimonies">
  <Heading title='Where Science Meets Movement' subtitle='Real stories from real patients who returned to the life they love' />
  <TestimonialCarousel testimonials={testimonials} />
  </div>
  <Heading title='Book an Appointment with Ease' subtitle="Quick, simple, and personalized orthopaedic consultation. Just fill out the form and we'll take care of the rest." />
  <AppointmentBooking />
    </>
  );
}

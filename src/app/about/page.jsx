import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import AboutHeroSection from "@/components/about-hero-section";
import ShortBio from "@/components/shortbio";
import Philosophy from "@/components/philosophy";
import ThreeCardRow from "@/components/threecardrow";
import { ClinicCardContainer } from "@/components/clinic-cardcontainer";
import TestimonialCarousel from "@/components/testimonial-carousal";
import AppointmentBooking from "@/components/appointment-booking";

export default function About() {

    const Cards = [
    {
      icon: '/education.png',
      title: 'FRCS-Ed, Royal College of Surgeons (Edinburgh)',
      description: 'Fellowship training in advanced orthopedic surgery'
    },
    {
      icon: '/fellowshipabout.png',
      title: 'Fellowship: Musculoskeletal Surgery & Arthroscopy',
      description: 'Specialized training in minimally invasive techniques'
    },
    {
      icon: '/experience.png',
      title: 'Ex-Assistant Professor, Cooper Hospital, Mumbai',
      description: 'Teaching excellence and clinical practice'
    }
  ]

  const Cards1 = [
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

  return (
    <>
    <div className="bg-[#F4F8FF]">
    <Navbar/>
  <AboutHeroSection />
  </div>
  <ShortBio />
  <Heading title='Credentials & Experience' subtitle='International training + local experience.' />
  <ThreeCardRow cards={Cards} />
  <Philosophy />
  <Heading title='Why Choose Arthro Solutions?' secodarysubtitle='In Association with Embody Physiotherapy Clinic' subtitle='Surgery to Rehabilitation in One Ecosystem' optionalsubtitle='Unlike traditional orthopaedic clinics, we merge advanced surgical precision with tailored rehab programs – ensuring athletes return stronger and seniors reclaim active lives.' />
  <ThreeCardRow cards={Cards1} />
  <Heading title='Strategic Locations Across Mumbai' subtitle="From consultation to surgery to rehabilitation we're strategically located for your convenience" />
    <ClinicCardContainer clinics={clinicsData} />
    <Heading title='Where Science Meets Movement' subtitle='Real stories from real patients who returned to the life they love' />
    <TestimonialCarousel testimonials={testimonials} />
    <Heading title='Book an Appointment with Ease' subtitle="Quick, simple, and personalized orthopaedic consultation. Just fill out the form and we'll take care of the rest." />
    <AppointmentBooking />
    </>
  );
}

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
    badgeText: "Main Clinic"
  },
  {
    id: 2,
    title: "Surya Multispecialty Hospital",
    subtitle: "State-of-the-art surgical facility with OT and recovery suites",
    address: "Mangal ashirwad, 101-102, SV road, Santacruz west, Mumbai 54",
    phone: "+91 - 9820273995",
    timing: "Tuesday/ Thursday: 5 PM-7 PM",
    services: "Consult & Surgeries",
    imageUrl: "/surya.png",
    badgeText: "Main Clinic"
  },
  {
    id: 3,
    title: "Upadhyaya Nursing Home",
    subtitle: "Comprehensive rehabilitation center with modern equipment",
    address: "1st floor, Moiz apartment, 12th road, Sen nagar, Santacruz East, Mumbai 55",
    phone: "+91 - 9820273995",
    timing: "Wednesday/ Saturday: 5 PM-8 PM",
    services: "Consult & Surgeries",
    imageUrl: "/raheja.png",
    badgeText: "Main Clinic"
  },
  {
    id: 4,
    title: "S.L. Raheja hospital",
    subtitle: "Comprehensive rehabilitation center with modern equipment",
    address: "Raheja Rugnalaya Marg, mahim west, mumbai 16",
    phone: "+91 - 9820273995",
    timing: "Monday/ Friday: 6 PM-8 PM",
    services: "Consult & Surgeries",
    imageUrl: "/raheja.png",
    badgeText: "Main Clinic"
  }
];

  return (
    <>
    <Navbar/>
  <AboutHeroSection />
  <ShortBio />
  <Heading title='Credentials & Experience' subtitle='International training + local experience.' />
  <ThreeCardRow cards={Cards} />
  <Philosophy />
  <Heading title='Why Choose Arthro Solutions?' subtitle='Surgery to Rehabilitation in One Ecosystem' optionalsubtitle='Unlike traditional orthopaedic clinics, we merge advanced surgical precision with tailored rehab programs – ensuring athletes return stronger and seniors reclaim active lives.' />
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

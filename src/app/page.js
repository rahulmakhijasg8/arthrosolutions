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
import ServicesHeroSection from "@/components/services-hero-section";
import ServiceIntro from "@/components/service-intro";
import ConditionsTreated from "@/components/conditions-treated";
import MedicalProcedureContainer from "@/components/medical-procedure-container";
import SplitHeading from "@/components/split-heading";

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
        { text: "JOINT SPECIALIST", className: "bg-[#7D7D7D]" },
        { text: "ATHLETIC FOCUSED", className: "bg-[#7D7D7D]" }
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
      image: "/path/to/knee-image.jpg", // Replace with actual image path
      imageAlt: "Knee treatment procedures",
      imagePlaceholder: "Knee Revolution Image",
      badges: [
        { text: "SPORTS MEDICINE", className: "bg-red-600" },
        { text: "PERFORMANCE", className: "bg-purple-600" }
      ],
      conditions: [
        "ACL Tears",
        "Meniscus Injuries",
        "Knee Arthritis", 
        "Patella Dislocation",
        "Cartilage Damage"
      ],
      procedures: [
        {
          name: "ACL Reconstruction",
          benefit: "Restore knee stability",
          recovery: "6-9 months to sport",
          borderColor: "border-red-600"
        },
        {
          name: "Meniscus Repair",
          benefit: "Preserve joint function", 
          recovery: "3-4 months for full activity",
          borderColor: "border-red-600"
        },
        {
          name: "Knee Replacement",
          benefit: "Pain relief and mobility",
          recovery: "3-6 months to return to activities",
          borderColor: "border-red-600"
        }
      ]
    },
    {
      buttonLabel: "HIP RENEWAL",
      title: "For Runners & Movement Enthusiasts", 
      image: "/path/to/hip-image.jpg", // Replace with actual image path
      imageAlt: "Hip renewal treatment",
      imagePlaceholder: "Hip Renewal Image",
      badges: [
        { text: "MOBILITY EXPERT", className: "bg-orange-600" },
        { text: "MOVEMENT FOCUSED", className: "bg-teal-600" }
      ],
      conditions: [
        "Hip Impingement",
        "Labral Tears",
        "Hip Arthritis",
        "Bursitis", 
        "Hip Dysplasia"
      ],
      procedures: [
        {
          name: "Hip Arthroscopy",
          benefit: "Minimal invasion, quick recovery",
          recovery: "3-4 months to sport",
          borderColor: "border-orange-600"
        },
        {
          name: "Hip Replacement", 
          benefit: "Long-term pain relief",
          recovery: "3-6 months for full activity",
          borderColor: "border-orange-600"
        },
        {
          name: "Labral Repair",
          benefit: "Restore hip stability", 
          recovery: "4-6 months to return to sport",
          borderColor: "border-orange-600"
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

const procedures = [
  {
    id: 1,
    title: "Arthroscopic Instability Surgery",
    subtitle: "Anchor-based stabilization",
    returnTime: "Return to sport 4-6 months",
    description: "Minimally invasive procedure to stabilize recurring shoulder dislocations using bioabsorbable anchors.",
    patientType: "Athletes with recurrent dislocations"
  },
  {
    id: 2,
    title: "Rotator Cuff Repair",
    subtitle: "Suture-bridge technique",
    returnTime: "90% strength recovery in 3-5 months",
    description: "Advanced double-row repair technique for optimal healing and strength restoration.",
    patientType: "Active adults with rotator cuff tears"
  },
  {
    id: 3,
    title: "Frozen Shoulder Release",
    subtitle: "Arthroscopic capsular release",
    returnTime: "70% mobility improvement in 6 hours",
    description: "Precise arthroscopic release of tight capsular structures for immediate mobility gains.",
    patientType: "Patients with adhesive capsulitis"
  },
  {
    id: 4,
    title: "Shoulder Replacement",
    subtitle: "Anatomic / Reverse prosthesis",
    returnTime: "Long-term pain relief",
    description: "Total or reverse shoulder replacement for end-stage arthritis and massive rotator cuff tears.",
    patientType: "Severe arthritis or massive cuff tears"
  }
];

  return (
    <>
    <Navbar/>
    <OrthopedicHero title={[
          { text: "Precise Orthopaedic care for ", highlight: false },
          { text: "athletic performance", highlight: true },
          { text: " and ageless joints", highlight: false }
        ]} description='From Sports Injuries to Joint Replacement Comprehensive Solutions Under one roof by globally trained Orthopaedic surgeon, Dr. Mohit Upadhyaya.'
        buttonText="Schedule A Consultation" buttonHref="#" rightImageAlt="test" rightImage='/homehero.png'
        stats={[
  { number: "7+", label: "Years Experience", numberColor: "#0D4F7A" },
  { number: "3000+", label: "Surgeries", numberColor: "#4EBA64" },
]} />
<Heading title='Why Choose Arthro Solutions?' optionalsubtitle='Surgery to Rehabilitation in One Ecosystem' subtitle="Unlike traditional orthopaedic clinics, we merge non operative management, surgical precision with tailored rehab programs – ensuring athletes return stronger and seniors reclaim active lives." />
   <ThreeCardRow cards={Cards}  />
  <Heading title='Surgical Precision for Every Joint, Every Age' />
  <MedicalToggleComponent tabs={medicalTabsData} defaultTab={0} />
  <StatsComponent />
  <DoctorHeroSection />
  <Heading title='Strategic Locations Across Mumbai' subtitle="From consultation to surgery to rehabilitation we're strategically located for your convenience" />
  <ClinicCardContainer clinics={clinicsData} />
  <Heading title='Where Science Meets Movement' subtitle='Real stories from real patients who returned to the life they love' />
  <TestimonialCarousel testimonials={testimonials} />
  <Heading title='Book an Appointment with Ease' subtitle="Quick, simple, and personalized orthopaedic consultation. Just fill out the form and we'll take care of the rest." />
  <AppointmentBooking />
  <ServicesHeroSection />
 <ServiceIntro
  badge={{
    text: "Shoulder Care",
    bgColor: "#0D4F7A", 
    textColor: "white",
    iconSrc: "/shoulder.svg"
  }}
  title={{
    main: "Shoulder Care — For Throwers,",
    highlighted: "Swimmers & Active Lives",
    highlightColor: "#3B82F6"
  }}
  description="Shoulder conditions can limit overhead sports and everyday tasks. We prioritise stability, strength and return-to-sport timelines."
  image={{
    src: "/shoulder-care-image.jpg",
    alt: "Doctor examining patient's shoulder"
  }}
  bgColor="#F4F8FF"
  textColor="#6B7280"
/>
<ConditionsTreated />
<SplitHeading firstText="Advanced" secondText="Procedures" accentColor="#0D4F7A" />
<MedicalProcedureContainer procedures={procedures} />
    </>
  );
}

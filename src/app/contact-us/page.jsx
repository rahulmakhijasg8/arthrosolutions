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
import FaqSection from "@/components/faqsection";
import MedicalQuestionForm from "@/components/faqform";
import SplitHeading from "@/components/split-heading";
import Hero from "@/components/faqhero";
import ProceduresList from "@/components/procedurelist";

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

const Faqs = [
  {
    question: "What is a total hip replacement?",
    answer: "A total hip replacement, or total hip arthroplasty, is a surgical procedure in which a damaged hip joint is removed and replaced with an artificial joint (prosthesis). It is most commonly performed to relieve pain and improve mobility in patients with hip arthritis or injury."
  },
  {
    question: "Why would I need a hip replacement?",
    answer: "Hip replacement is typically recommended when conservative treatments have failed to provide adequate relief from hip pain and mobility issues. Common reasons include severe arthritis (osteoarthritis, rheumatoid arthritis), hip fractures, avascular necrosis, or other conditions that cause significant pain and limit daily activities."
  },
  {
    question: "What conditions can lead to hip replacement surgery?",
    answer: "Several conditions may necessitate hip replacement surgery, including osteoarthritis (wear and tear of joint cartilage), rheumatoid arthritis (inflammatory joint disease), hip fractures, avascular necrosis (bone death due to poor blood supply), childhood hip diseases, and bone tumors around the hip joint."
  },
  {
    question: "What happens during the surgery?",
    answer: "During hip replacement surgery, the surgeon removes damaged bone and cartilage from the hip joint and replaces them with artificial components. The procedure typically involves making an incision, dislocating the hip, removing the damaged femoral head, preparing the hip socket, and implanting the prosthetic components. The surgery usually takes 1-3 hours."
  },
  {
    question: "Is the procedure painful?",
    answer: "While hip replacement is a major surgery, modern pain management techniques help minimize discomfort. You'll receive anesthesia during the procedure, and post-operative pain is managed through medications, nerve blocks, and other pain control methods. Most patients experience significant pain relief compared to their pre-surgery condition."
  },
  {
    question: "What is the recovery time after hip replacement?",
    answer: "Recovery varies by individual, but most patients can walk with assistance within 24-48 hours after surgery. Initial recovery takes 6-12 weeks, during which you'll gradually increase activity levels. Full recovery and return to normal activities typically occurs within 3-6 months, depending on your overall health and adherence to rehabilitation."
  },
  {
    question: "Are there risks or complications?",
    answer: "Like any major surgery, hip replacement carries some risks including infection, blood clots, dislocation of the new joint, nerve or blood vessel injury, and adverse reactions to anesthesia. However, serious complications are relatively rare, and the benefits typically far outweigh the risks for appropriate candidates."
  },
  {
    question: "How long will the artificial hip last?",
    answer: "Modern hip replacements are designed to last 15-20 years or longer with proper care. The longevity depends on factors such as your age, activity level, body weight, and the type of implant used. Younger, more active patients may need revision surgery eventually, while older patients often have their implants last a lifetime."
  },
  {
    question: "What activities can I do after surgery?",
    answer: "After full recovery, most patients can return to low-impact activities such as walking, swimming, cycling, and golf. High-impact activities like running, jumping sports, or heavy lifting may be restricted to protect the implant. Your surgeon will provide specific guidelines based on your individual case and recovery progress."
  },
  {
    question: "Will I need physical therapy?",
    answer: "Yes, physical therapy is a crucial part of hip replacement recovery. It typically begins within 24 hours after surgery and continues for several weeks to months. Physical therapy helps restore strength, flexibility, and proper movement patterns, ensuring optimal function of your new hip joint and preventing complications."
  },
  {
    question: "How do I prepare for the surgery?",
    answer: "Preparation includes medical evaluations, blood tests, imaging studies, and possibly dental clearance. You may need to stop certain medications, arrange for help at home, modify your living space for safety, and attend pre-operative education classes. Your surgical team will provide a comprehensive preparation checklist."
  },
  {
    question: "What signs of complications should I watch for after surgery?",
    answer: "Watch for signs of infection (fever, increased pain, redness, warmth, or drainage at the incision site), blood clots (leg swelling, calf pain, shortness of breath), or hip dislocation (severe pain, inability to move the leg, leg appearing shorter or turned inward). Contact your healthcare provider immediately if you experience any of these symptoms."
  }
];

      // Example data for NEW CARD component - Complete with all fields
const newCardsData = [
  {
    icon: "/call.svg",
    title: "Phone",
    subtitle: "+91-9820273995",
    description: "Immediate assistance for urgent cases.",
    buttonText: "Tap to call",
    buttonType: "outlined",
    buttonIcon: "/phonebutton.svg",
    buttonLink: "tel:+919620273965",
    buttonTarget: "_self",
    accentColor: "#0D4F7A"
  },
      {
    icon: "/location.svg",
    title: "Locations",
    subtitle: "3 Convenient Locations",
    description: "Kumar Clinic | Surya Hospital | Upadhyaya Nursing Home",
    buttonText: "Get Direction",
    buttonType: "outlined",
    buttonIcon: "/cambutton.svg",
    buttonLink: "/book-consultation",
    buttonTarget: "_self",
    accentColor: "#FE7C49"
    },
  {
    icon: "/mail.svg",
    title: "Email",
    subtitle: "Upadhyaya.mohit@gmail.com",
    description: "Send us your queries anytime.",
    buttonText: "Send Email",
    buttonType: "outlined",
    buttonIcon: "/whatsappbutton.svg",
    buttonLink: "https://wa.me/919620273965",
    buttonTarget: "_blank",
    accentColor: "#1AB585"
  }
];

  return (
    <>
    <div style={{ backgroundColor: '#0D4F7A' }}>
      <Navbar isDarkMode={true}/>
      <Hero 
  type="contact"
  subtitle="Quick questions, appointment requests, or teleconsultation — we're here to help."
/>
    </div>
  <ThreeCardRow cards={newCardsData} />
  <Heading title='Strategic Locations Across Mumbai' subtitle="From consultation to surgery to rehabilitation we're strategically located for your convenience" />
  <ClinicCardContainer clinics={clinicsData} />
  <Heading title='Book an Appointment with Ease' subtitle="Quick, simple, and personalized orthopaedic consultation. Just fill out the form and we'll take care of the rest." />
  <AppointmentBooking />
    </>
  );
}

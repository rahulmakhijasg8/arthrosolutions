import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import ThreeCardRow from "@/components/threecardrow";
import { ClinicCardContainer } from "@/components/clinic-cardcontainer";
import AppointmentBooking from "@/components/appointment-booking";
import Hero from "@/components/faqhero";

export default function Home() {

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

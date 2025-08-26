import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import ThreeCardRow from "@/components/threecardrow";
import { ClinicCardContainer } from "@/components/clinic-cardcontainer";
import AppointmentBooking from "@/components/appointment-booking";
import Hero from "@/components/faqhero";
import SplitHeading from "@/components/split-heading";

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
  <SplitHeading firstText="Need Immediate " secondText="Medical Consultation?" accentColor="#0D4F7A" subtitle="For urgent medical questions or to schedule your consultation" />
  <ThreeCardRow cards={newCardsData} />
  <Heading title='Strategic Locations Across Mumbai' subtitle="From consultation to surgery to rehabilitation we're strategically located for your convenience" />
  <ClinicCardContainer clinics={clinicsData} />
  <Heading title='Book an Appointment with Ease' subtitle="Quick, simple, and personalized orthopaedic consultation. Just fill out the form and we'll take care of the rest." />
  <AppointmentBooking />
    </>
  );
}

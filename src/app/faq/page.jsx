import Navbar from "@/components/navbar";
import ThreeCardRow from "@/components/threecardrow";
import FaqSection from "@/components/faqsection";
import MedicalQuestionForm from "@/components/faqform";
import SplitHeading from "@/components/split-heading";
import Hero from "@/components/faqhero";
import ProceduresList from "@/components/procedurelist";

export default function Home() {

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
    icon: "/Phone.svg",
    title: "Call Directly",
    subtitle: "Speak with our medical team",
    buttonText: "+91 - 9620273965",
    buttonType: "contained",
    buttonIcon: "/phonebutton.svg",
    buttonLink: "tel:+919620273965",
    buttonTarget: "_self",
    accentColor: "#0D4F7A"
  },
  {
    icon: "/whatsapp.svg",
    title: "WhatsApp Chat",
    subtitle: "Quick questions & appointments",
    buttonText: "WhatsApp Us",
    buttonType: "contained",
    buttonIcon: "/whatsappbutton.svg",
    buttonLink: "https://wa.me/919620273965",
    buttonTarget: "_blank",
    accentColor: "#1AB585"
  },
  {
    icon: "/cam.svg",
    title: "Free Teleconsultation",
    subtitle: "15-minute video consultation",
    buttonText: "Book Video Call",
    buttonType: "contained",
    buttonIcon: "/cambutton.svg",
    buttonLink: "/book-consultation",
    buttonTarget: "_self",
    accentColor: "#0D4F7A"
  }
];

  return (
    <>
    <div style={{ backgroundColor: '#0D4F7A' }}>
      <Navbar isDarkMode={true}/>
      <Hero 
        type="faq"
        firstText="Frequently Asked"
        secondText="Questions"
        subtitle="Common questions about appointments, surgery, recovery and insurance — if you don't see your question, drop us a message."
        searchPlaceholder="Search FAQs..."
      />
    </div>
<ProceduresList />
    
  <FaqSection faqs={Faqs} />
  <MedicalQuestionForm />
  <SplitHeading firstText="Need Immediate " secondText="Medical Consultation?" accentColor="#0D4F7A" subtitle="For urgent medical questions or to schedule your consultation" />
  <ThreeCardRow cards={newCardsData} />
    </>
  );
}

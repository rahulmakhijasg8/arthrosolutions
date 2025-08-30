"use client"

import { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import ThreeCardRow from "@/components/threecardrow";
import FaqSection from "@/components/faqsection";
import MedicalQuestionForm from "@/components/faqform";
import SplitHeading from "@/components/split-heading";
import Hero from "@/components/faqhero";
import ProceduresList from "@/components/procedurelist";
import MedicalProcedureCard from "@/components/medical-procedure-card";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState("");

  const Faqs = [
    // Hip Replacement FAQs
    {
      question: "What is a total hip replacement?",
      answer: "A total hip replacement, or total hip arthroplasty, is a surgical procedure in which a damaged hip joint is removed and replaced with an artificial joint (prosthesis). It is most commonly performed to relieve pain and improve mobility in patients with hip arthritis or injury.",
      procedures: ["Total Hip Replacement"]
    },
    {
      question: "Why would I need a hip replacement?",
      answer: "Hip replacement is typically recommended when conservative treatments have failed to provide adequate relief from hip pain and mobility issues. Common reasons include severe arthritis (osteoarthritis, rheumatoid arthritis), hip fractures, avascular necrosis, or other conditions that cause significant pain and limit daily activities.",
      procedures: ["Total Hip Replacement"]
    },
    {
      question: "What conditions can lead to hip replacement surgery?",
      answer: "Several conditions may necessitate hip replacement surgery, including osteoarthritis (wear and tear of joint cartilage), rheumatoid arthritis (inflammatory joint disease), hip fractures, avascular necrosis (bone death due to poor blood supply), childhood hip diseases, and bone tumors around the hip joint.",
      procedures: ["Total Hip Replacement"]
    },
    {
      question: "How long will the artificial hip last?",
      answer: "Modern hip replacements are designed to last 15-20 years or longer with proper care. The longevity depends on factors such as your age, activity level, body weight, and the type of implant used. Younger, more active patients may need revision surgery eventually, while older patients often have their implants last a lifetime.",
      procedures: ["Total Hip Replacement"]
    },

    // Knee Replacement FAQs
    {
      question: "What is total knee replacement surgery?",
      answer: "Total knee replacement is a surgical procedure where damaged cartilage and bone from the knee joint are removed and replaced with artificial components made of metal and plastic. This procedure is designed to relieve pain and restore function in severely damaged knees.",
      procedures: ["Total Knee Replacement"]
    },
    {
      question: "What is unicompartmental knee replacement?",
      answer: "Unicompartmental (partial) knee replacement involves replacing only the damaged portion of the knee joint, typically either the inner or outer compartment. This is a less invasive option for patients whose arthritis is limited to one part of the knee.",
      procedures: ["Unicompartmental (Partial) Knee Replacement", "Total Knee Replacement"]
    },
    {
      question: "How do I know if I need knee replacement?",
      answer: "Knee replacement may be recommended if you have severe knee pain that limits daily activities, stiffness that restricts movement, swelling that doesn't improve with rest or medications, and knee deformity. Conservative treatments like medications, physical therapy, and injections are usually tried first.",
      procedures: ["Total Knee Replacement", "Unicompartmental (Partial) Knee Replacement"]
    },

    // Shoulder Surgery FAQs
    {
      question: "What is shoulder replacement surgery?",
      answer: "Shoulder replacement surgery involves removing damaged parts of the shoulder joint and replacing them with artificial components. This procedure is typically recommended for severe arthritis, rotator cuff tear arthropathy, or complex shoulder fractures.",
      procedures: ["Shoulder Replacement Surgery"]
    },
    {
      question: "What is rotator cuff repair?",
      answer: "Rotator cuff repair is a surgical procedure to reattach torn tendons in the shoulder. The surgery can be performed arthroscopically (minimally invasive) or through open surgery, depending on the size and location of the tear.",
      procedures: ["Rotator Cuff Repair"]
    },

    // Sports Medicine FAQs
    {
      question: "What is ACL reconstruction?",
      answer: "ACL reconstruction is a surgical procedure to replace a torn anterior cruciate ligament using a graft, commonly from the hamstring or patellar tendon. This surgery helps restore knee stability and function, particularly for athletes and active individuals.",
      procedures: ["ACL Reconstruction Using Hamstring Graft"]
    },
    {
      question: "What is meniscus repair?",
      answer: "Meniscus repair is a surgical procedure to fix torn cartilage in the knee. The procedure can involve either repairing the tear with sutures or removing the damaged portion of the meniscus, depending on the location and type of tear.",
      procedures: ["Meniscus Repair"]
    },
    {
      question: "What is Bankart repair?",
      answer: "Bankart repair is a surgical procedure to treat shoulder instability caused by a torn labrum. The surgery reattaches the torn labrum to the shoulder socket, helping to prevent recurrent shoulder dislocations.",
      procedures: ["Bankart Repair"]
    },

    // General Surgery FAQs
    {
      question: "What happens during the surgery?",
      answer: "During joint replacement surgery, the surgeon removes damaged bone and cartilage from the affected joint and replaces them with artificial components. The specific procedure varies depending on the joint being replaced, but typically involves making an incision, preparing the bone surfaces, and implanting the prosthetic components. Surgery usually takes 1-3 hours.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery"]
    },
    {
      question: "Is the procedure painful?",
      answer: "While joint replacement is major surgery, modern pain management techniques help minimize discomfort. You'll receive anesthesia during the procedure, and post-operative pain is managed through medications, nerve blocks, and other pain control methods. Most patients experience significant pain relief compared to their pre-surgery condition.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery"]
    },
    {
      question: "What is the recovery time after surgery?",
      answer: "Recovery varies by individual and procedure type, but most patients can walk with assistance within 24-48 hours after joint replacement surgery. Initial recovery takes 6-12 weeks, during which you'll gradually increase activity levels. Full recovery typically occurs within 3-6 months, depending on your overall health and adherence to rehabilitation.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery"]
    },
    {
      question: "Are there risks or complications?",
      answer: "Like any major surgery, joint replacement carries some risks including infection, blood clots, dislocation of the new joint, nerve or blood vessel injury, and adverse reactions to anesthesia. However, serious complications are relatively rare, and the benefits typically far outweigh the risks for appropriate candidates.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery"]
    },
    {
      question: "What activities can I do after surgery?",
      answer: "After full recovery, most patients can return to low-impact activities such as walking, swimming, cycling, and golf. High-impact activities like running, jumping sports, or heavy lifting may be restricted to protect the implant. Your surgeon will provide specific guidelines based on your individual case and recovery progress.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery"]
    },
    {
      question: "Will I need physical therapy?",
      answer: "Yes, physical therapy is a crucial part of recovery for most orthopedic procedures. It typically begins within 24 hours after surgery and continues for several weeks to months. Physical therapy helps restore strength, flexibility, and proper movement patterns, ensuring optimal function and preventing complications.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery", "ACL Reconstruction Using Hamstring Graft", "Meniscus Repair", "Rotator Cuff Repair"]
    },
    {
      question: "How do I prepare for the surgery?",
      answer: "Preparation includes medical evaluations, blood tests, imaging studies, and possibly dental clearance. You may need to stop certain medications, arrange for help at home, modify your living space for safety, and attend pre-operative education classes. Your surgical team will provide a comprehensive preparation checklist.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery", "ACL Reconstruction Using Hamstring Graft", "Rotator Cuff Repair", "Bankart Repair"]
    },
    {
      question: "What signs of complications should I watch for after surgery?",
      answer: "Watch for signs of infection (fever, increased pain, redness, warmth, or drainage at the incision site), blood clots (leg swelling, calf pain, shortness of breath), or joint dislocation (severe pain, inability to move the joint, limb appearing shorter or turned inward). Contact your healthcare provider immediately if you experience any of these symptoms.",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Shoulder Replacement Surgery"]
    }
  ];

  // Filter FAQs based on search query AND selected procedure
  const filteredFaqs = useMemo(() => {
    let filtered = Faqs;
    
    // Filter by selected procedure first
    if (selectedProcedure && selectedProcedure !== "All Procedures") {
      filtered = filtered.filter(faq => 
        faq.procedures?.some(procedure => 
          procedure.toLowerCase().includes(selectedProcedure.toLowerCase()) ||
          selectedProcedure.toLowerCase().includes(procedure.toLowerCase())
        )
      );
    }
    
    // Then filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchQuery, selectedProcedure, Faqs]);

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
      accentColor: "#0D4F7A",
      buttonIcon: "phone"
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
      accentColor: "#1AB585",
      buttonIconType: "svg",
      buttonIcon: "whatsapp"
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
      accentColor: "#0D4F7A",
      buttonIcon: "video"
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
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>
      <ProceduresList 
        selectedProcedure={selectedProcedure}
        onProcedureSelect={setSelectedProcedure}
      />
      <FaqSection faqs={filteredFaqs} />
      <MedicalQuestionForm />
      <SplitHeading firstText="Need Immediate " secondText="Medical Consultation?" accentColor="#0D4F7A" subtitle="For urgent medical questions or to schedule your consultation" />
      <ThreeCardRow cards={newCardsData} />
    </>
  );
}
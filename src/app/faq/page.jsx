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
  {
    question: "What is a total hip replacement?",
    answer: "A total hip replacement, or total hip arthroplasty, is a surgical procedure in which a damaged hip joint is removed and replaced with an artificial joint (prosthesis). It is most commonly performed to relieve pain and improve mobility in patients with hip arthritis or injury.",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "Why would I need a hip replacement?",
    answer: "You may benefit from hip replacement if you:\n• Have severe hip pain that interferes with daily activities\n• Experience stiffness, limping, or difficulty walking\n• Have not improved with medications, physical therapy, or injections\n• Have arthritis, avascular necrosis, or hip fractures",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "What conditions can lead to hip replacement surgery?",
    answer: "Common causes include:\n• Osteoarthritis\n• Rheumatoid arthritis\n• Avascular necrosis (loss of blood supply to the bone)\n• Hip fractures\n• Developmental hip dysplasia",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "What happens during the surgery?",
    answer: "The surgeon removes the damaged portions of your hip joint and replaces them with a metal, plastic, or ceramic prosthesis. The procedure typically lasts 1 to 2 hours.",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "Is the procedure painful?",
    answer: "You may experience some post-surgical discomfort, but pain is managed with medications. Most patients report that the surgical pain is temporary and far better than the chronic hip pain they had before surgery.",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "What is the recovery time after hip replacement?",
    answer: "• Hospital stay: 1 to 3 days (sometimes outpatient)\n• Most patients walk with a walker or crutches within 1-2 days\n• Return to light daily activities: 3 to 6 weeks\n• Full recovery: 3 to 6 months, depending on individual progress",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "Are there risks or complications?",
    answer: "Yes, though uncommon. Possible risks include:\n• Blood clots\n• Infection\n• Dislocation of the new hip\n• Leg length differences\n• Nerve or blood vessel injury\n• Implant loosening or wear over time",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "How long will the artificial hip last?",
    answer: "Most hip replacements last 15 to 20 years or more. Longevity depends on your activity level, weight, bone quality, and implant type.",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "What activities can I do after surgery?",
    answer: "You can return to:\n• Walking\n• Driving\n• Swimming\n• Biking\n• Low-impact exercises\nHigh-impact sports like running or jumping should be avoided to preserve the life of the implant.",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "Will I need physical therapy?",
    answer: "Yes. Physical therapy starts soon after surgery and is essential for:\n• Regaining strength\n• Improving mobility\n• Reducing stiffness\n• Preventing complications",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "How do I prepare for the surgery?",
    answer: "• Attend pre-operative assessments\n• Stop smoking\n• Review medications with your doctor\n• Arrange home support and transportation\n• Prepare your home for safety (e.g., raised toilet seat, no loose rugs)",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "What signs of complications should I watch for after surgery?",
    answer: "Call your doctor if you experience:\n• Fever, chills, or redness around the incision\n• Severe or increasing pain\n• Swelling in the leg that doesn't go down\n• Difficulty moving the leg\n• Shortness of breath (possible blood clot)",
    procedures: ["Total Hip Replacement"]
  },
  {
    question: "What is a total knee replacement?",
    answer: "A total knee replacement (TKR), also known as knee arthroplasty, is a surgical procedure in which a damaged or worn-out knee joint is replaced with an artificial implant. It's typically done to relieve pain and restore function in people with severe knee arthritis or injury.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "Who is a candidate for total knee replacement?",
    answer: "You may be a good candidate if you:\n• Have severe knee pain that limits everyday activities\n• Experience pain at rest or at night\n• Have tried other treatments (medications, physical therapy, injections) without relief\n• Have knee stiffness or deformity\n• Have X-ray or MRI evidence of joint damage",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "What causes the need for a knee replacement?",
    answer: "The most common reasons include:\n• Osteoarthritis (wear-and-tear arthritis)\n• Rheumatoid arthritis\n• Post-traumatic arthritis (after injury)\n• Severe joint deformity or damage",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "How long does the surgery take?",
    answer: "The procedure typically takes 1 to 2 hours. Recovery in the hospital may last 1 to 3 days depending on your condition and surgical approach.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "Is the surgery painful?",
    answer: "You may feel discomfort after surgery, but pain is well-managed with medications. Most patients report that surgical pain is temporary and far less than the chronic pain they experienced before the procedure.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "What is recovery like after surgery?",
    answer: "• Physical therapy usually begins the same day or the day after surgery.\n• Most people walk with assistance within a day or two.\n• A walker or cane may be needed for a few weeks.\n• Full recovery can take 6 to 12 weeks, with continued improvement over 6 to 12 months.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "Are there risks or complications?",
    answer: "Like any surgery, knee replacement carries risks, including:\n• Blood clots\n• Infection\n• Nerve or blood vessel injury\n• Implant loosening or wear over time\n• Stiffness or limited range of motion\nYour surgical team will take steps to minimize these risks.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "How long will my knee replacement last?",
    answer: "Most knee replacements last 15–20 years or longer, depending on your activity level, weight, and overall health. Newer materials may increase longevity.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "Will I be able to return to normal activities?",
    answer: "Yes, most patients return to daily activities like walking, climbing stairs, and driving. Low-impact activities like swimming, golfing, and cycling are encouraged. High-impact sports should be avoided.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "What can I do to improve my outcome?",
    answer: "• Maintain a healthy weight\n• Follow your physical therapy plan\n• Avoid high-impact activities\n• Keep regular follow-up appointments\n• Manage other health conditions (like diabetes)",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "Will I need a second (revision) surgery later?",
    answer: "Revisions are rare but may be needed if the implant wears out, loosens, or if an infection occurs. Most patients enjoy many years of improved quality of life with their first implant.",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "How do I prepare for total knee replacement surgery?",
    answer: "• Attend pre-op assessments and medical clearances\n• Stop smoking if you smoke\n• Adjust medications as advised by your doctor\n• Prepare your home for recovery (e.g., remove tripping hazards, set up a recovery area)\n• Arrange transportation and support",
    procedures: ["Total Knee Replacement"]
  },
  {
    question: "What is a unicompartmental knee replacement?",
    answer: "A unicompartmental knee replacement (UKR), or partial knee replacement, is a surgical procedure where only the damaged portion (compartment) of the knee is replaced with an artificial implant. It preserves the healthy parts of the knee and is typically done when damage is limited to one part of the joint.",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "How is it different from total knee replacement?",
    answer: "In a total knee replacement, all three compartments of the knee are replaced. In a UKR, only one of the three compartments (medial, lateral, or patellofemoral) is replaced. This means:\n• Less bone and tissue are removed\n• Recovery is often quicker\n• The knee may feel more \"natural\" afterward",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "Who is a candidate for partial knee replacement?",
    answer: "You may be a candidate if:\n• Your arthritis is limited to one compartment of the knee\n• Your ligaments (especially the ACL) are intact\n• You have a stable and well-aligned knee\n• You are not significantly overweight\n• You have tried nonsurgical treatments without success",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "What are the advantages of unicompartmental knee replacement?",
    answer: "• Smaller incision\n• Shorter hospital stay and faster recovery\n• Less postoperative pain\n• More natural knee motion\n• Lower risk of blood loss\n• Better range of motion for some patients",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "What are the risks or downsides?",
    answer: "• Not suitable for patients with widespread arthritis\n• Potential for arthritis to develop in other compartments later\n• May need revision to total knee replacement in the future\n• Risk of infection, blood clots, implant loosening (similar to other joint surgeries)",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "What is the recovery time after UKR?",
    answer: "• Hospital stay: often same day or 1 night\n• Walking with assistance: within a day\n• Driving: 2–4 weeks (depending on which leg was operated)\n• Return to work: 2–6 weeks (depending on job type)\n• Full recovery: around 6–12 weeks",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "Will I need physical therapy?",
    answer: "Yes. Physical therapy is crucial to:\n• Regain strength\n• Restore knee motion\n• Reduce swelling\n• Ensure a proper walking pattern",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "How long will a partial knee replacement last?",
    answer: "Studies show that partial knee replacements can last 10 to 15 years or more. Outcomes depend on activity level, weight, and overall joint health. If needed later, it can usually be revised to a total knee replacement.",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "Can arthritis return in the rest of the knee?",
    answer: "Yes, arthritis may develop in the remaining healthy compartments. If it becomes painful or disabling, a total knee replacement may be recommended in the future.",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "What activities can I do after surgery?",
    answer: "Most patients return to:\n• Walking\n• Biking\n• Swimming\n• Golfing\n• Light hiking\nHigh-impact sports (e.g., running, jumping) are discouraged to protect the implant.",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "How do I prepare for surgery?",
    answer: "• Attend pre-op appointments\n• Stop smoking\n• Review medications with your doctor\n• Prepare your home for mobility and safety\n• Arrange for transportation and support during recovery",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "When should I call my doctor after surgery?",
    answer: "Contact your doctor if you notice:\n• Fever or chills\n• Redness or drainage at the incision site\n• Increasing pain or swelling\n• Difficulty moving your leg\n• Shortness of breath or calf pain (possible blood clot)",
    procedures: ["Unicompartmental (Partial) Knee Replacement"]
  },
  {
    question: "What is shoulder replacement surgery?",
    answer: "Shoulder replacement surgery, also known as shoulder arthroplasty, involves removing damaged parts of the shoulder joint and replacing them with artificial components (prosthesis). It is typically done to relieve pain and restore function in shoulders severely damaged by arthritis, injury, or other conditions.",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "What are the types of shoulder replacement surgeries?",
    answer: "There are three main types:\n• Total Shoulder Replacement (Anatomic): Replaces both the ball (humeral head) and the socket (glenoid).\n• Reverse Shoulder Replacement: The ball and socket are switched; used when the rotator cuff is severely damaged.\n• Partial Shoulder Replacement (Hemiarthroplasty): Only the ball of the upper arm bone is replaced.",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "Who is a candidate for shoulder replacement?",
    answer: "You may be a candidate if you have:\n• Severe shoulder arthritis\n• Rotator cuff tear arthropathy\n• Avascular necrosis\n• Severe fractures\n• Pain that interferes with daily life and hasn't improved with conservative treatments",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "What are the risks of shoulder replacement surgery?",
    answer: "All surgeries carry risks. Common risks include:\n• Infection\n• Nerve damage\n• Blood clots\n• Implant loosening or failure\n• Shoulder stiffness or instability\n• Complications from anesthesia",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "How long does the surgery take?",
    answer: "Typically, shoulder replacement takes 1.5 to 3 hours, depending on the complexity and type of replacement.",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "What is the recovery time?",
    answer: "• Hospital stay: 1–3 days\n• Sling: Usually worn for 4–6 weeks\n• Physical therapy: Starts within a few days and may continue for 3–6 months\n• Full recovery: Usually 4 to 6 months, but some cases may take up to a year",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "Will I regain full range of motion?",
    answer: "Most patients experience significant pain relief and improved range of motion. However, full motion may not be restored, especially in complex cases or reverse replacements.",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "How long does a shoulder replacement last?",
    answer: "Modern shoulder implants last 10–20 years, but longevity depends on activity level, type of implant, and individual factors.",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "What activities should I avoid after surgery?",
    answer: "• Lifting heavy objects\n• High-impact sports (e.g., contact sports)\n• Repetitive overhead motion\n• Any activity that strains the shoulder without your doctor's clearance",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "What should I expect from physical therapy?",
    answer: "Physical therapy is essential for successful recovery. It typically involves:\n• Gentle passive motion (early phase)\n• Strengthening exercises (after 6–8 weeks)\n• Gradual return to normal activity",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "What should I do to prepare for surgery?",
    answer: "• Quit smoking\n• Maintain a healthy weight\n• Arrange for help at home\n• Prepare your home for easy access to essentials\n• Follow pre-op instructions from your surgeon",
    procedures: ["Shoulder Replacement Surgery"]
  },
  {
    question: "When can I drive after shoulder replacement?",
    answer: "Most surgeons recommend waiting 4–6 weeks, or until you are off pain meds and have regained adequate strength and motion in the arm.",
    procedures: ["Shoulder Replacement Surgery"]
  },
  // ACL Reconstruction Using Hamstring Graft Section
{
  question: "What is ACL reconstruction?",
  answer: "ACL reconstruction is a surgical procedure to replace a torn anterior cruciate ligament (ACL) in the knee, most commonly due to sports injuries or trauma. A tendon graft is used to replace the damaged ligament.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "What is a hamstring graft, and why is it used?",
  answer: "A hamstring graft is taken from one of the patient's own hamstring tendons—usually the semitendinosus and sometimes gracilis. It's popular because:\n• It causes less anterior knee pain (compared to patellar tendon grafts)\n• It heals well and has good tensile strength\n• There's less visible scarring and quicker initial recovery",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "Who is a good candidate for this procedure?",
  answer: "You might be a candidate if you:\n• Have a complete ACL tear\n• Are active or play sports involving pivoting or cutting\n• Have knee instability that affects daily life\n• Are in good general health",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "What are the risks of ACL reconstruction with hamstring graft?",
  answer: "• Graft failure or re-tear\n• Infection\n• Knee stiffness or loss of motion\n• Numbness near incision sites\n• Hamstring weakness (usually temporary)\n• Blood clots",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "How long is the surgery?",
  answer: "ACL reconstruction typically takes 1–2 hours. It is usually done arthroscopically (minimally invasive) with a small incision to harvest the graft.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "What does the recovery timeline look like?",
  answer: "• 1–2 weeks: Crutches and brace; early range of motion exercises\n• 2–6 weeks: Gradual weight bearing; basic strength training begins\n• 3–6 months: Advanced strengthening and agility drills\n• 6–9 months: Return to sports, depending on progress and surgeon clearance",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "Will I need physical therapy?",
  answer: "Yes, physical therapy is essential to regain strength, mobility, and function. It often starts within a few days after surgery and continues for 6–9 months or longer.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "How strong is the hamstring graft compared to the native ACL?",
  answer: "The hamstring graft is actually stronger than the native ACL at the time of surgery. However, it must integrate and mature inside the body over several months before it can handle full sports loads.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "When can I return to sports?",
  answer: "Return to sport usually happens 6 to 9 months post-op but depends on:\n• Knee strength and stability\n• Sport-specific drills\n• Psychological readiness\n• Clearance from your surgeon and physical therapist",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "Can I walk after surgery?",
  answer: "Yes, most patients can bear weight as tolerated with crutches immediately post-op, unless other injuries (like meniscal repair) require non-weight-bearing restrictions.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "Will the hamstring grow back?",
  answer: "The harvested tendon does not regrow, but nearby muscles and tissues usually compensate well. Some patients may notice mild weakness, but this rarely impacts daily function or athletic performance long-term.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "What activities should I avoid during recovery?",
  answer: "• Pivoting, twisting, or jumping (initial months)\n• Running (typically avoided for 3–4 months)\n• Deep squats or lunges early on\n• Sports without surgeon's clearance",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "How do I prepare for ACL surgery?",
  answer: "• Strengthen your leg (prehab)\n• Stop smoking if you do\n• Arrange support for post-op (transport, meals, home setup)\n• Follow pre-op fasting and medication instructions",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "What is the success rate of ACL reconstruction using hamstring grafts?",
  answer: "Success rates are high—80–90% of patients return to previous levels of activity with proper rehab. However, outcomes depend on graft healing, rehab, and compliance with restrictions.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
{
  question: "Will I have long-term limitations?",
  answer: "Most people return to full function. Some may experience:\n• Mild stiffness\n• Occasional swelling with activity\n• Slight hamstring weakness (rare)\nWith good rehab, most athletes return to play without major limitations.",
  procedures: ["ACL Reconstruction Using Hamstring Graft"]
},
// Meniscus Repair Section
{
  question: "What is a meniscus, and what does it do?",
  answer: "The meniscus is a C-shaped piece of cartilage in the knee that acts as a shock absorber between the femur (thigh bone) and tibia (shin bone). Each knee has two menisci – one medial (inside) and one lateral (outside). They help with:\n• Joint stability\n• Load distribution\n• Lubrication and cushioning",
  procedures: ["Meniscus Repair"]
},
{
  question: "What is a meniscus repair surgery?",
  answer: "Meniscus repair is a surgical procedure where torn meniscal tissue is sutured (stitched) back together, instead of being removed (as in a meniscectomy). It aims to preserve as much of the meniscus as possible for long-term joint health.",
  procedures: ["Meniscus Repair"]
},
{
  question: "When is meniscus repair recommended?",
  answer: "Repair is considered when:\n• The tear is in the outer third (\"red zone\") of the meniscus where blood supply is good\n• The tear is vertical, longitudinal, or in a favorable pattern for healing\n• The patient is young or active\n• There's an associated ACL injury (combined repairs are common)",
  procedures: ["Meniscus Repair"]
},
{
  question: "What are the benefits of repairing rather than removing the meniscus?",
  answer: "• Better long-term knee function\n• Lower risk of arthritis\n• Preserves joint cushion\n• Improved shock absorption and stability",
  procedures: ["Meniscus Repair"]
},
{
  question: "What are the risks of meniscus repair?",
  answer: "• Re-tear or failed healing\n• Stiffness or limited motion\n• Infection\n• Blood clots\n• Need for future surgery (if repair fails)",
  procedures: ["Meniscus Repair"]
},
{
  question: "How long does the surgery take?",
  answer: "Typically 45–90 minutes, depending on complexity and whether it's combined with other procedures (like ACL reconstruction).",
  procedures: ["Meniscus Repair"]
},
{
  question: "What is the recovery time for meniscus repair?",
  answer: "• Initial recovery: 4–6 weeks (non-weight bearing or limited weight-bearing)\n• Physical therapy: Starts early, continues for 3–6 months\n• Return to sports: Usually 4–6 months, sometimes longer if combined with other procedures",
  procedures: ["Meniscus Repair"]
},
{
  question: "Will I need crutches or a brace?",
  answer: "Yes:\n• Crutches: Usually needed for 4–6 weeks\n• Knee brace: Worn to protect the repair; limits range of motion as directed by your surgeon",
  procedures: ["Meniscus Repair"]
},
{
  question: "When can I return to normal activities?",
  answer: "• Desk work/school: 1–2 weeks\n• Driving: Often after 4–6 weeks (if left leg is involved or you're off narcotics)\n• Sports: Typically after 4–6 months, depending on rehab progress",
  procedures: ["Meniscus Repair"]
},
{
  question: "Is physical therapy necessary?",
  answer: "Yes. Rehab is critical for:\n• Regaining motion\n• Preventing stiffness\n• Strengthening surrounding muscles\n• Ensuring proper healing of the repair",
  procedures: ["Meniscus Repair"]
},
{
  question: "What happens if the meniscus repair doesn't heal?",
  answer: "If the repair fails, symptoms like pain, swelling, or clicking may return. In such cases, a revision surgery or partial meniscectomy (removal of torn tissue) might be needed.",
  procedures: ["Meniscus Repair"]
},
{
  question: "How successful is meniscus repair?",
  answer: "Success rates depend on tear type and location, but in general:\n• 80–90% success for ideal tears in the vascular zone\n• Lower success rates for complex or poorly located tears",
  procedures: ["Meniscus Repair"]
},
{
  question: "Will I have long-term knee problems after surgery?",
  answer: "Meniscus preservation helps reduce long-term risk of arthritis, especially compared to full or partial meniscectomy. However, some individuals may still experience:\n• Occasional soreness\n• Activity limitations with aging\n• Degeneration over time",
  procedures: ["Meniscus Repair"]
},
{
  question: "Can all meniscus tears be repaired?",
  answer: "No. Tears in the inner third (\"white zone\") have poor blood supply and may not heal. In those cases, a partial meniscectomy may be recommended instead.",
  procedures: ["Meniscus Repair"]
},
{
  question: "How should I prepare for meniscus repair surgery?",
  answer: "• Arrange for help at home post-op\n• Prepare crutches and a comfortable rest area\n• Follow pre-op instructions (fasting, medications)\n• Do prehab exercises if recommended",
  procedures: ["Meniscus Repair"]
},
// Rotator Cuff Repair Section
{
  question: "What is the rotator cuff?",
  answer: "The rotator cuff is a group of four muscles and their tendons that stabilize the shoulder joint and allow movements like lifting, reaching, and rotating the arm.",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "What is rotator cuff repair surgery?",
  answer: "Rotator cuff repair is a surgical procedure to reattach a torn tendon back to the head of the humerus (upper arm bone). It can be done via:\n• Arthroscopic surgery (minimally invasive)\n• Mini-open surgery\n• Open surgery (for large or complex tears)",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "When is surgery recommended?",
  answer: "Surgery is typically considered if:\n• Pain lasts more than 3–6 months\n• Non-surgical treatments (PT, injections) have failed\n• The tear is large or complete\n• Weakness or loss of function affects daily life or work\n• The tear is acute and from trauma",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "What are the symptoms of a rotator cuff tear?",
  answer: "• Shoulder pain (especially at night)\n• Weakness lifting or rotating the arm\n• Limited range of motion\n• Popping or crackling sensations\n• Pain that doesn't improve with rest",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "What are the risks of rotator cuff repair surgery?",
  answer: "• Infection\n• Stiffness or frozen shoulder\n• Re-tear of the tendon\n• Nerve injury (rare)\n• Blood clots\n• Prolonged recovery time",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "How long does the surgery take?",
  answer: "Typically 1 to 2 hours, depending on the size and complexity of the tear and surgical approach.",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "Will I need a sling after surgery?",
  answer: "Yes. Most patients wear a sling for 4 to 6 weeks to protect the repair and limit shoulder motion during the healing phase.",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "What is the recovery timeline?",
  answer: "• Week 0–6: Immobilization in sling; passive motion only\n• Week 6–12: Begin active range of motion\n• 3–6 months: Strengthening phase\n• 6–12 months: Full recovery and return to sports or heavy work (if cleared)",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "Is physical therapy necessary?",
  answer: "Absolutely. Rehabilitation is critical and usually begins within a few days to a week after surgery. It progresses from passive to active motion and finally to strengthening.",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "How successful is rotator cuff repair surgery?",
  answer: "• Success rates: 75–90% for small to medium tears\n• Outcomes depend on age, tear size, tendon quality, and rehab compliance\n• Many patients experience significant pain relief and improved function",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "Will the rotator cuff tear again?",
  answer: "Re-tears can happen, especially:\n• In older patients\n• With large or chronic tears\n• If rehab protocols are not followed\nRe-tear rates range from 10–40%, but not all re-tears cause symptoms.",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "When can I return to work or driving?",
  answer: "• Desk job: 2–4 weeks\n• Manual labor: 4–6 months\n• Driving: Usually after 6–8 weeks, once you're off pain meds and can safely control the vehicle",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "Can I prevent a rotator cuff tear from worsening before surgery?",
  answer: "Yes, by:\n• Avoiding heavy lifting and overhead activities\n• Following your surgeon's or therapist's pre-op instructions\n• Using anti-inflammatory measures (ice, NSAIDs)",
  procedures: ["Rotator Cuff Repair"]
},
{
  question: "Will I regain full shoulder motion and strength?",
  answer: "Many patients do, especially if:\n• The tear is repaired early\n• They're consistent with physical therapy\nSome may have residual stiffness or minor weakness, especially after large tears.",
  procedures: ["Rotator Cuff Repair"]
},
// Bankart Repair Section
{
  question: "What is a Bankart lesion?",
  answer: "A Bankart lesion is a tear of the labrum, the cartilage ring that helps stabilize the shoulder joint. It usually occurs after a shoulder dislocation, especially in younger or active individuals.",
  procedures: ["Bankart Repair"]
},
{
  question: "What is Bankart repair surgery?",
  answer: "Bankart repair is a procedure to reattach the torn labrum to the socket (glenoid) of the shoulder. It restores shoulder stability and prevents further dislocations.\nIt is usually done arthroscopically (minimally invasive), but open surgery may be used in some cases.",
  procedures: ["Bankart Repair"]
},
{
  question: "Who needs Bankart repair?",
  answer: "You may be a candidate if you:\n• Have recurrent shoulder dislocations\n• Are young and athletic\n• Have failed non-surgical treatments\n• Have shoulder instability that affects your function or sports",
  procedures: ["Bankart Repair"]
},
{
  question: "What are the benefits of Bankart repair?",
  answer: "• Restores shoulder stability\n• Prevents future dislocations\n• Allows return to sports or overhead activities\n• Minimally invasive with faster recovery (if arthroscopic)",
  procedures: ["Bankart Repair"]
},
{
  question: "What are the risks of the surgery?",
  answer: "• Infection\n• Nerve injury (rare)\n• Shoulder stiffness\n• Failure of the repair or recurrent instability\n• Arthritis in the long term",
  procedures: ["Bankart Repair"]
},
{
  question: "How long does the surgery take?",
  answer: "Bankart repair typically takes 1 to 1.5 hours, depending on the severity and whether it's arthroscopic or open.",
  procedures: ["Bankart Repair"]
},
{
  question: "What is the recovery time?",
  answer: "• Weeks 0–4: Sling worn continuously; passive motion only\n• Weeks 4–8: Active range of motion begins\n• Weeks 8–16: Strengthening phase\n• 4–6 months: Return to sports or manual labor (with clearance)",
  procedures: ["Bankart Repair"]
},
{
  question: "Will I need to wear a sling?",
  answer: "Yes, you'll usually wear a sling for 3–6 weeks to protect the repair and limit movement during the early healing phase.",
  procedures: ["Bankart Repair"]
},
{
  question: "Is physical therapy needed after surgery?",
  answer: "Yes. Physical therapy is crucial to regain motion, strength, and stability. It typically starts within the first week after surgery and continues for several months.",
  procedures: ["Bankart Repair"]
},
{
  question: "What is the success rate of Bankart repair?",
  answer: "• Success rate is 85–95% in most patients\n• Lower re-dislocation risk compared to non-surgical treatment\n• Better outcomes with early repair, especially in young athletes",
  procedures: ["Bankart Repair"]
},
{
  question: "When can I return to sports or overhead activities?",
  answer: "• Non-contact sports: ~3–4 months\n• Contact sports (e.g., football, rugby): ~5–6 months\nFinal return depends on strength, stability, and surgeon approval.",
  procedures: ["Bankart Repair"]
},
{
  question: "Can the shoulder dislocate again after repair?",
  answer: "It's possible, especially if:\n• The labrum doesn't heal fully\n• The patient returns to contact sports too soon\n• There's significant bone loss (may require different surgery)",
  procedures: ["Bankart Repair"]
},
{
  question: "Is Bankart repair the same as a labral repair?",
  answer: "Yes, Bankart repair is a type of labral repair, specifically done for the anteroinferior (front-bottom) portion of the labrum. Other types of labral tears (like SLAP tears) may require different techniques.",
  procedures: ["Bankart Repair"]
},
{
  question: "Are there alternatives to surgery?",
  answer: "For first-time dislocators or less active patients:\n• Physical therapy\n• Activity modification\n• Bracing\nHowever, surgery is often recommended in young athletes or those with repeated dislocations.",
  procedures: ["Bankart Repair"]
},
{
  question: "Will I have full shoulder function after surgery?",
  answer: "Most patients regain excellent function with proper rehab. Some may experience:\n• Mild tightness or weakness\n• Fatigue with overhead motion\nBut overall outcomes are very good with adherence to the rehab plan.",
  procedures: ["Bankart Repair"]
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
      <div className="relative" style={{ backgroundColor: '#0D4F7A' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <img 
      src="/faqherobg.png" 
      alt="" 
      className="absolute top-0 left-0 w-[300px] h-[223px] md:w-[450px] md:h-[55%] opacity-100"
    />
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-auto w-auto right-0 -bottom-40 md:bottom-30" width="621" height="326" viewBox="0 0 621 326" fill="none">
  <path opacity="0.05" d="M644.096 66.8153L589.738 86.341C589.188 86.5385 588.877 87.1194 589.015 87.6864L606.551 159.334L539.282 1.25319C539.049 0.704252 538.431 0.428678 537.866 0.618898C537.259 0.851789 536.979 1.40562 537.126 1.98203L568.225 123.959L553.569 100.293C553.285 99.8353 552.72 99.6378 552.213 99.8199L538.721 104.666L527.194 81.9175C526.947 81.4283 526.386 81.1844 525.859 81.3376C525.341 81.4793 524.988 81.9948 525.04 82.5418L527.523 108.689L514.149 113.492L479.372 58.5342C479.077 58.0666 478.487 57.9006 477.978 58.0862C477.466 58.2946 477.176 58.8391 477.291 59.3795L499.232 163.603L479.521 126.965C479.254 126.466 478.662 126.24 478.131 126.431L378.54 162.204C377.991 162.401 377.679 162.982 377.818 163.549L395.354 235.195L328.085 77.116C327.851 76.5671 327.235 76.2914 326.669 76.4817C326.028 76.7268 325.782 77.2684 325.929 77.8449L357.027 199.822L342.372 176.156C342.088 175.698 341.522 175.501 341.016 175.683L327.524 180.529L315.997 157.78C315.749 157.291 315.189 157.047 314.662 157.201C314.131 157.348 313.791 157.859 313.843 158.404L316.325 184.552L302.953 189.355L268.174 134.397C267.88 133.929 267.295 133.761 266.781 133.949C266.269 134.158 265.979 134.702 266.093 135.242L288.035 239.464L268.325 202.827C268.057 202.329 267.465 202.102 266.934 202.293L167.344 238.066C166.794 238.264 166.483 238.845 166.621 239.412L184.157 311.059L116.889 152.978C116.655 152.429 116.038 152.154 115.473 152.344C114.877 152.573 114.586 153.131 114.733 153.707L145.831 275.685L131.174 252.019C130.891 251.561 130.325 251.363 129.818 251.545L116.327 256.391L104.8 233.643C104.553 233.153 103.992 232.91 103.465 233.063C102.943 233.206 102.594 233.72 102.646 234.267L105.129 260.414L91.7559 265.217L56.9771 210.26C56.6819 209.792 56.1044 209.622 55.5833 209.812C55.0725 210.02 54.7822 210.564 54.8963 211.105L76.8384 315.326L57.1284 278.689C56.8606 278.191 56.2689 277.964 55.7374 278.155L0.200677 298.104L0.972386 300.253L55.586 280.635L78.5848 323.387C78.8523 323.885 79.444 324.111 79.9755 323.92L79.9813 323.918C80.5146 323.723 80.8239 323.167 80.7061 322.611L58.4356 216.83L90.3179 267.211C90.6033 267.663 91.164 267.856 91.6675 267.675L106.735 262.262C107.226 262.086 107.535 261.6 107.486 261.08L105.489 240.05L114.747 258.322C115.007 258.835 115.609 259.075 116.151 258.88L129.721 254.006L147.804 283.203C148.1 283.683 148.702 283.864 149.221 283.652C149.739 283.431 150.019 282.865 149.879 282.319L120.631 167.602L187.553 324.867C187.786 325.413 188.4 325.69 188.964 325.502C188.973 325.5 188.982 325.496 188.99 325.494C189.538 325.297 189.852 324.716 189.712 324.148L169.084 239.867L266.782 204.773L289.781 247.525C290.049 248.024 290.662 248.169 291.178 248.056C291.711 247.861 292.02 247.304 291.903 246.749L269.633 140.967L301.515 191.348C301.8 191.8 302.362 191.993 302.865 191.812L317.932 186.4C318.422 186.223 318.732 185.737 318.683 185.217L316.686 164.187L325.945 182.459C326.204 182.972 326.807 183.212 327.349 183.017L340.919 178.143L359 207.34C359.298 207.82 359.925 207.992 360.417 207.789C360.936 207.568 361.216 207.003 361.077 206.456L331.829 91.7394L398.75 249.004C398.983 249.55 399.597 249.827 400.161 249.639C400.17 249.636 400.179 249.633 400.187 249.63C400.735 249.433 401.049 248.853 400.91 248.284L380.281 164.003L477.979 128.91L500.978 171.661C501.246 172.161 501.829 172.317 502.375 172.192C502.908 171.998 503.218 171.441 503.1 170.885L480.83 65.1037L512.712 115.485C512.998 115.937 513.559 116.129 514.062 115.949L529.13 110.536C529.621 110.36 529.93 109.873 529.881 109.354L527.884 88.324L537.142 106.595C537.402 107.109 538.004 107.348 538.546 107.154L552.116 102.279L570.197 131.477C570.494 131.957 571.105 132.135 571.614 131.926C572.133 131.705 572.413 131.139 572.273 130.593L543.025 15.8764L609.947 173.141C610.18 173.687 610.793 173.964 611.357 173.776C611.998 173.625 612.247 172.999 612.105 172.421L591.477 88.1405L644.868 68.962C645.462 68.7489 645.77 68.0957 645.557 67.502C645.343 66.9103 644.69 66.6022 644.096 66.8153Z" fill="url(#paint0_radial_897_2181)"/>
  <defs>
    <radialGradient id="paint0_radial_897_2181" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290.687 59.2084) rotate(-19.7585) scale(325.885 325.885)">
      <stop offset="0.1398" stop-color="#6BC1DB"/>
      <stop offset="0.2473" stop-color="#8ACEE3"/>
      <stop offset="0.4137" stop-color="#B4DFED"/>
      <stop offset="0.5762" stop-color="#D5EDF5"/>
      <stop offset="0.7313" stop-color="#ECF7FA"/>
      <stop offset="0.876" stop-color="#FAFDFE"/>
      <stop offset="1" stop-color="white"/>
    </radialGradient>
  </defs>
</svg>
  </div>
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
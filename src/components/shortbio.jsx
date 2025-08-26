import Image from "next/image"
import { GraduationCap } from "lucide-react"

export default function ShortBio() {
  return (
    <div className="w-full px-[20px] md:px-[60px] mt-[60px] md:mt-[122px] lg:px-[100px] py-6">
  <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:gap-[97px]">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="w-full h-96 md:h-[520px] rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src="/biophoto.png"
              alt="Dr. Mohit Upadhyaya"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        
        {/* Bio Content */}
        <div className="w-full md:w-1/2 flex-1">
          <h2 className="text-[28px] font-['Outfit'] md:text-[52px] font-[600] text-[#2D2D2D] mt-[24px] md:mt-0 ">Short Bio</h2>
          
          <div className="text-[#2D2D2D] text-[16px] font-['Inter'] font-[400] leading-[26px] md:leading-[28px] space-y-[6px]">
            <p>
              Dr. Mohit Upadhyaya, Completed post graduate orthopaedic training from the 
              prestigious Sassoon Hospital and B.J. Govt Medical College Pune. He then worked as 
              a senior registrar at Cooper hospital, Mumbai and was subsequently promoted to 
              assistant professor in orthopaedic surgery. He completed his Diplomate of National 
              Board examination in orthopaedic while at cooper hospital.
            </p>
            <p>
              Keen then chose to pursue further sub specialty training in the UK. He was awarded 
              the coveted Fellowship of the Royal College of Surgeons of Edinburgh during his 
              training in the UK.
            </p>
            <p>
              Dr. Upadhyaya is a specialist in both minimally invasive joint preservation & ligament 
              surgery as well as joint replacement surgery.
            </p>
          </div>
          
          {/* Qualification Badges */}
          <div className="flex flex-wrap mt-[14px] md:mt-[26px] gap-[24px] md:gap-[10px]">
  <div className="px-3 py-1.5 flex gap-[8px] md:px-4 md:py-2 text-[#0D4F7A] rounded-[6px] border border-[#0D4F7A]">
    <GraduationCap height={18} width={18} />
    <span className="text-xs md:text-[16px] font-[400]">MS Degree</span>
  </div>
  <div className="px-3 py-1.5 md:px-4 flex gap-[8px] md:py-2 text-[#FE7C49] rounded-[6px] border border-[#FE7C49]">
    <GraduationCap height={18} width={18} />
    <span className="text-xs md:text-[16px] font-[400]">FRCS Degree</span>
  </div>
  <div className="px-3 py-1.5 md:px-4 flex gap-[8px] md:py-2 text-[#4CAF50] rounded-[6px] border border-[#4CAF50]">
    <GraduationCap height={18} width={18} />
    <span className="text-xs md:text-[16px] font-[400]">DNB Degree</span>
  </div>
</div>
        </div>
      </div>
      </div>
    </div>
  )
}
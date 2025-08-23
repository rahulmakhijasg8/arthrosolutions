import Image from "next/image"
import { GraduationCap } from "lucide-react"

export default function ShortBio() {
  return (
    <div className="w-full px-[20px] md:px-[60px] md:mt-[122px] lg:px-[100px] py-6">
  <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[97px]">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="w-full h-96 md:h-[456px] rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src="/biophoto.png"
              alt="Dr. Mohit Upadhyaya"
              width={400}
              height={600}
              className="w-full h-full object-contain object-top"
            />
          </div>
        </div>
        
        {/* Bio Content */}
        <div className="w-full md:w-1/2 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Short Bio</h2>
          
          <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 mb-6 md:mb-8">
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
          <div className="flex flex-wrap gap-[24px] md:gap-[10px]">
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
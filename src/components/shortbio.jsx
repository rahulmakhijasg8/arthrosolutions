import Image from "next/image"

export default function ShortBio() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-6">
  <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="w-full h-96 md:h-[456px] rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src="/biophoto.png"
              alt="Dr. Mohit Upadhyaya"
              width={400}
              height={600}
              className="w-full h-full object-cover object-top"
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
          <div className="flex flex-wrap gap-2 md:gap-3">
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full border border-blue-200">
              <span className="text-xs md:text-sm font-medium">MS Degree</span>
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-orange-100 text-orange-800 rounded-full border border-orange-200">
              <span className="text-xs md:text-sm font-medium">FRCS Degree</span>
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-green-100 text-green-800 rounded-full border border-green-200">
              <span className="text-xs md:text-sm font-medium">DNB Degree</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
import React from 'react'

export default function Experience() {

    const experience = [
        {
            company: "Gakk Media Technologies",
            position: "Software Engineer",
            duration: "August 2023 - September 2024",
            link: "https://companyA.com",
            color: "from-red-600 to-violet-600"
        },
        {
            company: "10 Minute School",
            position: "Software Engineer",
            duration: "June 2021 - August 2022",
            link: "https://companyB.com",
            color: "from-green-500 to-blue-500"
        },
        
    ]

  return (
    <div>
           <div className="flex flex-col mt-12 space-y-8 p-6">

            {experience.map((exp, index) => (
                 <div key={index} className="w-full mx-auto">
                 {/* Card 1 */}
                 <div className="relative group cursor-pointer ">
                   <div
                     className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                   ></div>
                   <div
                     className="relative px-7 py-6 bg-purple-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-start space-y-4"
                   >
                     <h3 className="text-lg font-bold text-slate-800">
                        {exp.company}
                     </h3>
                        <p className="text-lg text-purple-500 font-bold">
                        {exp.position}
                          </p>

                     <p className="text-sm text-gray-600">
                       {exp.duration} 
                       </p>
                     <a
                       href={exp.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-blue-600 hover:underline"
                     >
                          {exp.link}
                     </a>
                   </div>
                 </div>
               </div>
       
            ))}
                
       
      </div>
    </div>
  )
}

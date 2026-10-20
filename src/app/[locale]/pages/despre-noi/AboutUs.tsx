'use client'

// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Navigation from '@/src/components/Navigation'
// import Footer from '@/src/components/layout/Footer'

// export default function DespreNoi() {
//   const [activeValue, setActiveValue] = useState(0)
  
//   const coreValues = [
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//         </svg>
//       ),
//       title: "Siguranță",
//       description: "Siguranța este angajamentul nostru neclintit, asigurând că fiecare moment în telegondolă este liniștit și de încredere."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
//         </svg>
//       ),
//       title: "Colaborare",
//       description: "Gândim pe termen lung și colaborăm pentru binele comun, pentru că fiecare dintre noi face parte din aceeași poveste."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
//         </svg>
//       ),
//       title: "Inovație",
//       description: "Reinventăm constant experiența călătoriei, îmbinând tradiția cu progresul pentru un viitor sustenabil."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M14 19.14a1 1 0 01-.73-.31L9.73 15.3a5 5 0 117.07 0l-3.54 3.54a1 1 0 01-.73.31zM12 4a3 3 0 00-3 3 3 3 0 000 .39L12 10.5l3-3.09V7a3 3 0 00-3-3z"/>
//         </svg>
//       ),
//       title: "Experiență",
//       description: "Plasăm vizitatorul în centrul a tot ceea ce facem, oferind o ospitalitate autentică și împărtășind ce e mai bun din Piatra Neamț."
//     }
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveValue((prev) => (prev + 1) % coreValues.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
      
//       {/* Hero Section cu Imagine Panoramică */}
//       <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] overflow-hidden">
//         <div className="absolute inset-0">
//           <Image 
//             src="/telegondola-panorama.jpg"
//             alt="Telegondola Piatra Neamț - Vedere Panoramică"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
//         </div>
        
//         <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
//               Despre noi
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-fade-in-up animation-delay-200">
//               Conectăm orașul cu muntele din 2008
//             </p>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-1 bg-white rounded-full mt-2 animate-scroll-down"></div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative -mt-16 md:-mt-20 z-20 mb-16 md:mb-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#B7D662]/20 rounded-full mb-3 md:mb-4">
//                   <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">22</div>
//                 <div className="text-gray-600 text-sm md:text-base">Gondole</div>
//                 <div className="text-xs md:text-sm text-gray-500">8 locuri fiecare</div>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#B7D662]/20 rounded-full mb-3 md:mb-4">
//                   <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">8</div>
//                 <div className="text-gray-600 text-sm md:text-base">Minute</div>
//                 <div className="text-xs md:text-sm text-gray-500">Durata călătoriei</div>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#B7D662]/20 rounded-full mb-3 md:mb-4">
//                   <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                   </svg>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">1.9</div>
//                 <div className="text-gray-600 text-sm md:text-base">Kilometri</div>
//                 <div className="text-xs md:text-sm text-gray-500">Lungime traseu</div>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#B7D662]/20 rounded-full mb-3 md:mb-4">
//                   <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">1M+</div>
//                 <div className="text-gray-600 text-sm md:text-base">Vizitatori</div>
//                 <div className="text-xs md:text-sm text-gray-500">Din 2008</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-1">
//               <Image
//                 src="/telegondola-cabina.jpg"
//                 alt="Cabină Telegondolă"
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>
            
//             <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//                 O călătorie <span className="text-[#B7D662]">extraordinară</span>
//               </h2>
//               <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-600">
//                 <p>
//                   Descoperiți Piatra Neamț dintr-o perspectivă unică, suspendați între 
//                   verdele vibrații al orașului și albastrul intens al cerului moldovean. 
//                   În telegondola noastră, fiecare metru de ascensiune dezvăluie o nouă 
//                   imagine vie a orașului - casele istorice cedând treptat locul pantelor 
//                   acoperite cu vegetație nativă, în timp ce munții îmbrățișează întreaga 
//                   scenă într-un orizont fără sfârșit.
//                 </p>
//                 <p>
//                   Este mult mai mult decât o simplă călătorie - este oportunitatea de a 
//                   simți armonia dintre natură, oraș și munte, într-un moment de neuitat 
//                   care îmbină urbanul cu naturalul într-o experiență cu adevărat unică.
//                 </p>
//               </div>
              
//               <div className="flex flex-wrap gap-3 md:gap-4">
//                 <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-md">
//                   <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                   <span className="text-gray-700 font-medium text-sm md:text-base">Panoramă 360°</span>
//                 </div>
//                 <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-md">
//                   <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                   <span className="text-gray-700 font-medium text-sm md:text-base">632m altitudine</span>
//                 </div>
//                 <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-md">
//                   <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                   <span className="text-gray-700 font-medium text-sm md:text-base">Transport eco</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Journey Route */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//               Călătoria
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               În confortul și siguranța telegondolei noastre, descoperim că însăși 
//               călătoria devine destinația. Pe măsură ce părăsim inima pulsantă a 
//               orașului, un spectacol dinamic se desfășoară în fața ochilor noștri.
//             </p>
//           </div>

//           {/* Route Points - Vertical Layout with Alternating Text */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Connection Line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#B7D662] via-[#a5c550] to-[#95b540]"></div>
              
//               {/* Station Points */}
//               <div className="space-y-16 md:space-y-24">
//                 {/* Stația Gară - Text on Right */}
//                 <div className="relative flex items-center">
//                   <div className="flex-1"></div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl">
//                     <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
//                     </svg>
//                   </div>
//                   <div className="flex-1 pl-20 md:pl-32">
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Stația Gară</h3>
//                     <p className="text-gray-600 text-sm md:text-base">Piața Gării 7</p>
//                     <p className="text-xs md:text-sm text-gray-500 mt-1">Altitudine: 323m</p>
//                   </div>
//                 </div>

//                 {/* Panorama Orașului - Text on Left */}
//                 <div className="relative flex items-center">
//                   <div className="flex-1 text-right pr-20 md:pr-32">
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Panorama Orașului</h3>
//                     <p className="text-gray-600 text-sm md:text-base">Vedere asupra lacului Bâtca Doamnei</p>
//                     <p className="text-xs md:text-sm text-gray-500 mt-1">Muntele Pietricica & Ceahlău</p>
//                   </div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl">
//                     <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
//                       <circle cx="12" cy="9" r="2.5"/>
//                     </svg>
//                   </div>
//                   <div className="flex-1"></div>
//                 </div>

//                 {/* Platoul Cozla - Text on Right */}
//                 <div className="relative flex items-center">
//                   <div className="flex-1"></div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl">
//                     <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
//                     </svg>
//                   </div>
//                   <div className="flex-1 pl-20 md:pl-32">
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Platoul Cozla</h3>
//                     <p className="text-gray-600 text-sm md:text-base">Vârful muntelui</p>
//                     <p className="text-xs md:text-sm text-gray-500 mt-1">Altitudine: 632m</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-[#B7D662] via-[#a5c550] to-[#95b540] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 border-4 border-white rounded-full"></div>
//           <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 border-4 border-white rounded-full"></div>
//           <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 border-4 border-white rounded-full"></div>
//         </div>
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="text-center mb-8 md:mb-12">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
//               Valorile noastre
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//               Principiile care ne ghidează în fiecare zi
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//             {coreValues.map((value, index) => (
//               <div
//                 key={index}
//                 className={`bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center transition-all duration-500 cursor-pointer ${
//                   activeValue === index 
//                     ? 'transform scale-105 shadow-2xl' 
//                     : 'hover:transform hover:scale-105 hover:shadow-xl'
//                 }`}
//                 onClick={() => setActiveValue(index)}
//               >
//                 <div className="text-[#B7D662] mb-3 md:mb-4">{value.icon}</div>
//                 <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{value.title}</h3>
//                 <p className="text-gray-600 text-xs md:text-sm">{value.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Progress Dots */}
//           <div className="flex justify-center gap-2 mt-6 md:mt-8">
//             {coreValues.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveValue(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   activeValue === index 
//                     ? 'bg-white w-8' 
//                     : 'bg-white/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 md:p-12">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
//                 <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
//                 </svg>
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Misiunea noastră</h3>
//               <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                 Să oferim vizitatorilor o experiență autentică și inspirațională a 
//                 Pietrei Neamț, privită dintr-o perspectivă de neuitat. Urcând în 
//                 siguranță și cu respect pentru mediu, conectăm centrul urban cu 
//                 culmile munților, unde natura își dezvăluie rădăcinile. Scopul nostru 
//                 este să creăm amintiri durabile care să inspire o apreciere mai 
//                 profundă pentru bogăția naturală și culturală a regiunii noastre.
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-[#B7D662]/20 to-[#a5c550]/20 rounded-2xl p-6 sm:p-8 md:p-12">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B7D662] rounded-full flex items-center justify-center mb-4 md:mb-6">
//                 <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//                 </svg>
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Viziunea noastră</h3>
//               <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                 Să fim cel mai apreciat, sustenabil și sigur mijloc de transport pe 
//                 cablu din România. Dorim ca fiecare vizitator să simtă că, urcând 
//                 cu noi, nu doar se deplasează - ci experimentează și câștigă o 
//                 înțelegere mai profundă a frumuseții naturale și culturale a 
//                 Moldovei. Aspirăm să fim un model de excelență în turismul 
//                 responsabil și educațional.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* History Timeline */}
//       <section className="py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//               Povestea noastră
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               O călătorie care a început în 2004 și continuă să inspire
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline Line */}
//               <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
//               {/* Timeline Events */}
//               <div className="space-y-8 md:space-y-12">
//                 <div className="relative flex items-start">
//                   <div className="absolute left-4 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-[#B7D662] rounded-full -translate-x-1/2"></div>
//                   <div className="ml-12 md:ml-20">
//                     <span className="text-[#B7D662] font-bold text-sm md:text-base">2004</span>
//                     <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">Începutul viziunii</h4>
//                     <p className="text-gray-600 mt-2 text-sm md:text-base">
//                       Primăria Piatra Neamț începe regândirea strategiilor de dezvoltare 
//                       a infrastructurii turistice locale.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="relative flex items-start">
//                   <div className="absolute left-4 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-[#B7D662] rounded-full -translate-x-1/2"></div>
//                   <div className="ml-12 md:ml-20">
//                     <span className="text-[#B7D662] font-bold text-sm md:text-base">2006</span>
//                     <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">Înființarea Perla Invest</h4>
//                     <p className="text-gray-600 mt-2 text-sm md:text-base">
//                       Se înființează societatea Perla Invest pentru implementarea și 
//                       administrarea obiectivelor turistice majore.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="relative flex items-start">
//                   <div className="absolute left-4 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-[#B7D662] rounded-full -translate-x-1/2"></div>
//                   <div className="ml-12 md:ml-20">
//                     <span className="text-[#B7D662] font-bold text-sm md:text-base">2007</span>
//                     <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">Startul proiectului</h4>
//                     <p className="text-gray-600 mt-2 text-sm md:text-base">
//                       Demarează proiectul "Dezvoltare infrastructură turistică Deal Cozla 
//                       etapa I" în valoare de 54.408.218 lei.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="relative flex items-start">
//                   <div className="absolute left-4 md:left-8 w-4 h-4 md:w-6 md:h-6 bg-[#B7D662] rounded-full -translate-x-1/2 ring-4 ring-[#B7D662]/20"></div>
//                   <div className="ml-12 md:ml-20">
//                     <span className="text-[#B7D662] font-bold text-base md:text-lg">Februarie 2008</span>
//                     <h4 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">Inaugurarea Telegondolei</h4>
//                     <p className="text-gray-600 mt-2 text-sm md:text-base">
//                       Telegondola Piatra Neamț își deschide porțile, marcând începutul 
//                       unei noi ere pentru turismul local.
//                     </p>
//                     <div className="mt-3 md:mt-4 p-3 md:p-4 bg-[#B7D662]/10 rounded-lg">
//                       <p className="text-xs md:text-sm text-gray-700">
//                         <span className="font-semibold">Prima zi:</span> Peste 1.000 de 
//                         vizitatori experimentează noua atracție turistică
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative flex items-start">
//                   <div className="absolute left-4 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-[#B7D662] rounded-full -translate-x-1/2"></div>
//                   <div className="ml-12 md:ml-20">
//                     <span className="text-[#B7D662] font-bold text-sm md:text-base">2024</span>
//                     <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">Peste 1 milion de vizitatori</h4>
//                     <p className="text-gray-600 mt-2 text-sm md:text-base">
//                       Telegondola depășește pragul de 1 milion de turiști transportați, 
//                       confirmându-și statutul de atracție turistică majoră.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="relative flex items-start">
//                   <div className="absolute left-4 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-[#B7D662] rounded-full -translate-x-1/2 animate-pulse"></div>
//                   <div className="ml-12 md:ml-20">
//                     <span className="text-[#B7D662] font-bold text-sm md:text-base">Prezent</span>
//                     <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">Inovație continuă</h4>
//                     <p className="text-gray-600 mt-2 text-sm md:text-base">
//                       Continuăm să investim în siguranță, confort și sustenabilitate, 
//                       pregătind viitorul turismului montan în Piatra Neamț.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technical Details */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//               Excelență tehnică
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Tehnologie de vârf pentru siguranța și confortul dumneavoastră
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="order-2 lg:order-1">
//               <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
//                   Specificații tehnice
//                 </h3>
//                 <div className="space-y-3 md:space-y-4">
//                   <div className="flex items-start gap-3 md:gap-4">
//                     <div className="w-8 h-8 md:w-10 md:h-10 bg-[#B7D662]/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm md:text-base">Producător</h4>
//                       <p className="text-gray-600 text-xs md:text-sm">Doppelmayr (Austria) - lider mondial în sisteme de transport pe cablu</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3 md:gap-4">
//                     <div className="w-8 h-8 md:w-10 md:h-10 bg-[#B7D662]/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm md:text-base">Capacitate transport</h4>
//                       <p className="text-gray-600 text-xs md:text-sm">1.200 persoane/oră - 640 kg per gondolă</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3 md:gap-4">
//                     <div className="w-8 h-8 md:w-10 md:h-10 bg-[#B7D662]/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm md:text-base">Infrastructură</h4>
//                       <p className="text-gray-600 text-xs md:text-sm">10 stâlpi de susținere, cel mai înalt de 64m pe Bulevardul Decebal</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3 md:gap-4">
//                     <div className="w-8 h-8 md:w-10 md:h-10 bg-[#B7D662]/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm md:text-base">Viteză & Confort</h4>
//                       <p className="text-gray-600 text-xs md:text-sm">6 m/s viteză constantă pentru o călătorie lină și plăcută</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="order-1 lg:order-2">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/telegondola-tehnic.jpg"
//                   alt="Detalii tehnice telegondolă"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
//                   <div className="text-white">
//                     <h4 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Siguranță certificată</h4>
//                     <p className="text-white/90 text-sm md:text-base">
//                       Sistem modern de monitorizare și control, întreținere regulară 
//                       conform standardelor internaționale
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Environmental Commitment */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-green-100">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-8 md:mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full mb-4 md:mb-6">
//               <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17h-13L12 5.8z"/>
//               </svg>
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//               Angajament pentru mediu
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Alegând telegondola, alegeți un mod de transport aliniat cu viitorul
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
//               <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
//                 Alimentată cu electricitate, telegondola reduce emisiile și ajută la 
//                 păstrarea naturii și patrimoniului acestei "Perle a Moldovei". Fiecare 
//                 călătorie este o invitație de a privi peisajul cu respect, promovând 
//                 reducerea traficului rutier și a zgomotului, încurajând un ritm mai 
//                 uman și mai sigur.
//               </p>
//               <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                 Plutind între mare și munte, celebrăm armonia cu mediul înconjurător. 
//                 În acest fel, generațiile viitoare vor putea aprecia această bijuterie 
//                 așa cum o experimentăm noi astăzi.
//               </p>
              
//               <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
//                 <div className="text-center">
//                   <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">100%</div>
//                   <div className="text-gray-600 text-xs md:text-base">Energie verde</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">0</div>
//                   <div className="text-gray-600 text-xs md:text-base">Emisii directe</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">-85%</div>
//                   <div className="text-gray-600 text-xs md:text-base">Reducere trafic</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="relative min-h-[60vh] md:min-h-screen flex items-center bg-fixed bg-cover bg-center" 
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6), transparent), url('/journey-bg.jpg')`
//         }}>
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="max-w-4xl">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold text-white mb-6 md:mb-8 leading-tight">
//               Pregătiți pentru<br />
//               <span className="font-semibold italic">aventură?</span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl">
//               Cumpărați biletele online și săriți peste cozi. Rezervă-ți locul pentru o experiență de neuitat la 632 metri altitudine. Valabile 90 de zile de la achiziție.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
//               <a 
//                 href="/bilete" 
//                 className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl"
//               >
//                 <span>Cumpără Bilet Online</span>
//                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </a>
//               <a 
//                 href="#contact" 
//                 className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all"
//               >
//                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span>Contactează-ne</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <Footer />
      
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes scroll-down {
//           0% {
//             transform: translateY(0);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(10px);
//             opacity: 0;
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out;
//         }

//         .animate-scroll-down {
//           animation: scroll-down 2s ease-out infinite;
//         }

//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }
//       `}</style>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function DespreNoi() {
  const [activeValue, setActiveValue] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  
  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Siguranță",
      description: "Fiecare călătorie cu telegondola este atent supravegheată și menținută la cele mai înalte standarde tehnice. Siguranța pasagerilor este prioritatea absolută și elementul care definește încrederea în serviciile noastre."
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "Colaborare",
      description: "Ne bazăm pe spiritul de echipă și pe cooperarea dintre oameni. Fiecare angajat, partener și vizitator contribuie la menținerea unui sistem care funcționează eficient și corect, în beneficiul tuturor."
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "Inovație",
      description: "Actualizăm constant tehnologia și modul de operare pentru a oferi o experiență modernă, sustenabilă și adaptată nevoilor actuale. Respectăm tradiția, dar privim mereu spre viitor."
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 19.14a1 1 0 01-.73-.31L9.73 15.3a5 5 0 117.07 0l-3.54 3.54a1 1 0 01-.73.31zM12 4a3 3 0 00-3 3 3 3 0 000 .39L12 10.5l3-3.09V7a3 3 0 00-3-3z"/>
        </svg>
      ),
      title: "Experiență",
      description: "Ne concentrăm pe confortul și satisfacția vizitatorilor. Dorim ca fiecare urcare să fie plăcută, clară și memorabilă, iar Piatra Neamț să fie descoperit în cele mai bune condiții."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % coreValues.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
{/* Hero Section - FĂRĂ Parallax pe mobile, smooth pe desktop */}
<section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] overflow-hidden">
  {/* Image container - FĂRĂ parallax effect */}
  <div className="absolute inset-0">
    <Image 
      src="/telegondola-panorama.jpg"
      alt="Telegondola Piatra Neamț - Vedere Panoramică"
      fill
      className="object-cover"
      priority
      quality={90}
      style={{
        willChange: 'auto' // Previne tremuratul
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
  </div>
          
  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
        Despre noi
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-fade-in-up animation-delay-200">
        Telegondola Piatra-Neamț
      </p>
    </div>
  </div>
  
  {/* Scroll indicator - HIDDEN pe mobile, vizibil pe desktop */}
  <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      <div className="w-1 h-1 bg-white rounded-full mt-2 animate-scroll-down"></div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="relative -mt-16 md:-mt-20 z-20 mb-16 md:mb-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, num: "22", label: "Gondole", sub: "8 locuri fiecare" },
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, num: "8", label: "Minute", sub: "Durata călătoriei" },
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, num: "1.9", label: "Kilometri", sub: "Lungime traseu" },
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, num: "1M+", label: "Vizitatori", sub: "Din 2008" }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#B7D662]/20 rounded-full mb-3 md:mb-4 transition-transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">{stat.num}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-1 lg:order-1">
              <Image
                src="/telegondola-cabina.jpg"
                alt="Cabină Telegondolă"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                O călătorie <span className="text-[#B7D662]">extraordinară</span>
              </h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-600">
                <p>
  Telegondola din Piatra Neamț oferă o perspectivă amplă asupra orașului și a cadrului natural care îl înconjoară. Traseul pornește din stația situată lângă gară și urcă până pe platoul Cozla, la o altitudine de 632 de metri. Pe parcurs, priveliștea se schimbă treptat, de la centrul istoric și clădirile orașului până la zonele verzi și versanții împăduriți ai muntelui. Călătoria durează câteva minute și este una liniștită și sigură, susținută de un sistem de transport modern și ecologic. Odată ajuns sus, poți admira o panoramă de 360 de grade asupra întregului oraș, a lacului Bâtca Doamnei și a muntelui Ceahlău. Este una dintre cele mai apreciate experiențe din zonă, potrivită atât pentru turiști, cât și pentru localnici.
                </p>
           
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { text: "Panoramă 360°" },
                  { text: "632m altitudine" },
                  { text: "Transport ecologic" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Route */}
      <section className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Călătoria
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Din telegondola, fiecare detaliu al orașului devine vizibil. Traseul pornește din zona centrală și urcă spre platoul Cozla, oferind o imagine completă asupra străzilor, clădirilor și spațiilor verzi.
            Pe măsură ce cabina urcă, orașul se așază tot mai clar în peisaj, iar contrastul dintre zonele urbane și cele verzi arată cât de echilibrat este locul. Sus, priveliștea cuprinde totul și explică de ce Piatra Neamț e considerat unul dintre cele mai frumoase orașe din România.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#B7D662] via-[#a5c550] to-[#95b540]"></div>
              
              <div className="space-y-16 md:space-y-24">
                <div className="relative flex items-center">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div className="flex-1 pl-20 md:pl-32">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Stația de plecare</h3>
                    <p className="text-gray-600 text-sm md:text-base">Piața Gării 7</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Altitudine: 323m</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-20 md:pr-32">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Panorama Orașului</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div className="flex-1"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 pl-20 md:pl-32">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Platoul Cozla</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Altitudine: 632m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#B7D662] via-[#a5c550] to-[#95b540] relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Valorile noastre
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center transition-all duration-500 cursor-pointer ${
                  activeValue === index 
                    ? 'transform scale-105 shadow-2xl' 
                    : 'hover:transform hover:scale-105 hover:shadow-xl'
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className="text-[#B7D662] mb-3 md:mb-4">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {coreValues.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeValue === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 md:p-12 transition-all hover:shadow-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Misiunea noastră</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
             Ne propunem să oferim vizitatorilor o experiență autentică a orașului Piatra Neamț, privit de la înălțime, acolo unde orașul și natura se întâlnesc. Fiecare urcare cu telegondola este o invitație la descoperire, desfășurată în condiții de siguranță și cu grijă față de mediu. Dorim ca fiecare călătorie să lase în urmă amintiri plăcute și o legătură mai profundă cu peisajul, cultura și energia acestui loc.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B7D662]/20 to-[#a5c550]/20 rounded-2xl p-6 sm:p-8 md:p-12 transition-all hover:shadow-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B7D662] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Viziunea noastră</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Ne dorim să devenim cel mai apreciat și sustenabil sistem de transport pe cablu din România, recunoscut pentru profesionalism, siguranță și respect față de mediu. Credem că o simplă urcare poate deveni o experiență care schimbă perspectiva asupra orașului și a naturii din jur. Prin inovație, grijă pentru detalii și implicare locală, vrem să consolidăm Piatra Neamț ca destinație de referință pentru turismul responsabil și educațional din România.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Povestea noastră
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            O evoluție construită cu viziune, pasiune și perseverență
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { year: "2004", title: "Începutul viziunii", desc: "Primăria municipiului Piatra Neamț inițiază procesul de modernizare a infrastructurii turistice, cu scopul de a valorifica potențialul natural și urban al orașului." },
                  { year: "2006", title: "Înființarea Perla Invest", desc: "Se înființează societatea Perla Invest,, destinată administrării și dezvoltării obiectivelor turistice majore ale municipiului, printre care se numără telegondola, pârtia de schi și complexele de agrement." },
                  { year: "2007", title: "Startul proiectului", desc: "Începe implementarea proiectului „Dezvoltare infrastructură turistică Deal Cozla – etapa I”, cu o valoare totală de 54.408.218 lei, un pas decisiv pentru transformarea zonei într-un punct de atracție turistică modern." },
                  { year: "2008", title: "Inaugurarea Telegondolei", desc: "Telegondola Piatra Neamț este inaugurată oficial, devenind primul sistem de acest tip din regiunea Moldovei.", highlight: true, extra: "Prima zi: Peste 1.000 de vizitatori experimentează noua atracție turistică" },
                  { year: "2024", title: "Peste 1 milion de vizitatori", desc: "Telegondola depășește pragul de 1 milion de turiști transportați, După 16 ani de funcționare, telegondola depășește pragul de 1 milion de pasageri transportați, confirmându-și rolul de simbol al turismului nemțean și de reper național" },
                  { year: "Prezent", title: "Inovație continuă", desc: "Perla Invest continuă investițiile în siguranță, confort și sustenabilitate, modernizând constant infrastructura și serviciile. Obiectivul este clar: consolidarea poziției Telegondolei Piatra Neamț ca punct de referință pentru turismul montan și urban din România.", pulse: true }
                ].map((event, i) => (
                  <div key={i} className="relative flex items-start">
                    <div className={`absolute left-4 md:left-8 ${event.highlight ? "w-4 h-4 md:w-6 md:h-6 ring-4 ring-[#B7D662]/20" : "w-3 h-3 md:w-4 md:h-4"} bg-[#B7D662] rounded-full -translate-x-1/2 ${event.pulse ? "animate-pulse" : ""}`}></div>
                    <div className="ml-12 md:ml-20">
                      <span className="text-[#B7D662] font-bold text-sm md:text-base">{event.year}</span>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">{event.title}</h4>
                      <p className="text-gray-600 mt-2 text-sm md:text-base">{event.desc}</p>
                      {event.extra && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-[#B7D662]/10 rounded-lg">
                          <p className="text-xs md:text-sm text-gray-700">
                            <span className="font-semibold">Prima zi:</span> {event.extra.split(': ')[1]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Excelență tehnică
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tehnologie de vârf pentru siguranță și confort
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Specificații tehnice
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { title: "Producător", desc: "Doppelmayr (Austria) - lider mondial în sisteme de transport pe cablu" },
                    { title: "Capacitate transport", desc: "1.200 persoane/oră - 640 kg per gondolă" },
                    { title: "Infrastructură", desc: "10 stâlpi de susținere, cel mai înalt de 64m pe Bulevardul Decebal" },
                    { title: "Viteză & confort", desc: "6 m/s viteză constantă pentru o călătorie lină și plăcută" }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 transition-all hover:translate-x-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#B7D662]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{spec.title}</h4>
                        <p className="text-gray-600 text-xs md:text-sm">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/telegondola-tehnic.jpg"
                  alt="Detalii tehnice telegondolă"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                  <div className="text-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Siguranță certificată</h4>
                    <p className="text-white/90 text-sm md:text-base">
                     Sistemul beneficiază de monitorizare digitală permanentă, inspecții periodice și mentenanță completă conform standardelor internaționale impuse de producător.
Tehnologia folosită garantează funcționarea optimă în orice sezon și oferă pasagerilor încrederea unei experiențe sigure și moderne.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-green-100 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17h-13L12 5.8z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Angajament pentru mediu
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
             Alegerea telegondolei înseamnă alegerea unui mod de transport curat și responsabil
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
          Telegondola funcționează exclusiv pe bază de energie electrică, contribuind la reducerea emisiilor și la protejarea mediului natural al orașului. Fiecare cursă ajută la diminuarea traficului rutier și a poluării fonice, oferind o alternativă ecologică de mobilitate urbană. Prin acest sistem, sprijinim un turism sustenabil și un mod de viață mai echilibrat, în armonie cu natura.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Ne dorim ca orașul, cunoscut drept „Perla Moldovei”, să își păstreze frumusețea autentică și pentru generațiile care vor urma. Fiecare călătorie este o contribuție directă la protejarea acestei moșteniri naturale și culturale.
              </p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {[
                  { value: "100%", label: "Energie verde" },
                  { value: "0", label: "Emisii directe" },
                  { value: "-85%", label: "Reducere a traficului rutier" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-xs md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Call to Action - FIXED */}
<section className="relative min-h-[60vh] md:min-h-screen flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/journey-bg.jpg"
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
      style={{ objectPosition: 'center' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="max-w-4xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
        Pregătiți pentru<br />
        <span className="font-semibold italic">aventură?</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl">
        Cumpărați biletele online și evitați așteptarea de la ghișeu. Rezervați-vă locul pentru o experiență la 632 de metri altitudine și bucurați-vă de priveliștea orașului Piatra Neamț dintr-o perspectivă diferită. Biletele sunt valabile 90 de zile de la data achiziției.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <a 
          href="/pages/tickets" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          <span>Cumpără bilet online</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a 
          href="/pages/contact" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Contactează-ne</span>
        </a>
      </div>
    </div>
  </div>
</section>
      
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
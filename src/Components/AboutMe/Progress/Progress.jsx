// // src/components/Progress.js

// import React from "react";

// const Progress = ({ skill, percentage }) => {
//   return (
//     <div className="mb-4">
//       <p className="mb-2 text-[#04724D] text-xl">{skill}</p>
//       <div className="relative pt-1">
//         <div className="flex mb-2 items-center justify-between">
//           <div>
//             <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#ECFEF4] bg-[#04724D]">
//               {percentage}%
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className={`w-full h-2 bg-gray-200 rounded-full`}>
//             <div
//               className={`absolute h-2 bg-[#04724D] rounded-full`}
//               style={{ width: `${percentage}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Progress;

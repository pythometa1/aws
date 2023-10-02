// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";

// const CheckService = () => {
//   const [isCameraOpen, setIsCameraOpen] = useState(false);

//   const handleCheckButtonClick = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       const videoElement = document.createElement("video");
//       videoElement.srcObject = stream;
//       videoElement.classList.add(
//         "w-full",
//         "max-w-md",
//         "mx-auto",
//         "mt-4",
//         "rounded-lg",
//         "shadow-lg"
//       );
//       document.getElementById("camera-container").appendChild(videoElement);
//       setIsCameraOpen(true);
//     } catch (error) {
//       console.error("Error accessing the camera:", error);
//     }
//   };

//   const handleCloseCamera = () => {
//     setIsCameraOpen(false);
//     const videoElement = document.querySelector("video");
//     if (videoElement) {
//       videoElement.srcObject.getTracks().forEach((track) => track.stop());
//       videoElement.remove();
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-4 text-center">
//         Check Which Service Do You Need
//       </h1>
//       <p className="text-lg mb-8 text-center mt-8">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </p>
//       <div
//         id="camera-container"
//         className={`relative ${isCameraOpen ? "mb-6" : ""}`}
//       >
//         {isCameraOpen && (
//           <button
//             className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white mr-[38rem] -mt-8 font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline-red"
//             onClick={handleCloseCamera}
//           >
//             Close Camera
//           </button>
//         )}
//       </div>
//       <button
//         className={`${
//           isCameraOpen ? "hidden" : "block"
//         } bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mx-auto rounded-full focus:outline-none focus:shadow-outline-blue`}
//         onClick={handleCheckButtonClick}
//       >
//         <FontAwesomeIcon icon={faCamera} className="mr-2" />
//         Open Camera
//       </button>
//     </div>
//   );
// };

// export default CheckService;

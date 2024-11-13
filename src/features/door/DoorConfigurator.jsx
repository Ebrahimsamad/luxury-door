// import React, { useState } from "react";

// const DoorConfigurator = ({ categoryId }) => {
//   // Sample data for colors and shapes
//   const colors = [
//     { id: 1, name: "Dark Wood", image: "/2.png" },
//     { id: 2, name: "Light Wood", image: "/3.png" },
//     { id: 3, name: "Black", image: "/4.png" },
//     // Add more colors as needed
//   ];

//   const shapes = [
//     { id: 1, name: "Design 1", image: "/cer-1.jpg" },
//     { id: 2, name: "Design 2", image: "/cer-2.jpg" },
//     { id: 3, name: "Design 3", image: "/cer-3.jpg" },
//     // Add more shapes as needed
//   ];

//   const [selectedColor, setSelectedColor] = useState(colors[0]);
//   const [selectedShape, setSelectedShape] = useState(shapes[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [doorImage, setDoorImage] = useState(selectedShape.image);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSelection = async () => {
//     setIsLoading(true);

//     // Send data to backend
//     try {
//       const response = await fetch("/api/get-door-image", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           categoryId,
//           color: selectedColor.name,
//           shapeModel: selectedShape.name,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setDoorImage(data.image); // Assuming the response has { image: "image_url" }
//       } else {
//         console.error("Failed to fetch image from the server.");
//       }
//     } catch (error) {
//       console.error("Error fetching door image:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center p-6 text-primary space-y-6 md:space-y-0 md:space-x-8">
//       {/* Left Panel: Color and Shape Options */}
//       <div className="flex flex-col items-center space-y-4">
//         <h2 className="text-xl font-bold mb-4">أبواب مفردة</h2>

//         {/* Color Options */}
//         <div className="flex flex-wrap gap-2">
//           {colors.map((color) => (
//             <button
//               key={color.id}
//               onClick={() => setSelectedColor(color)}
//               className={`w-12 h-12 rounded-full border-2 ${
//                 selectedColor.id === color.id
//                   ? "border-primary"
//                   : "border-gray-300"
//               }`}
//             >
//               <img
//                 src={color.image}
//                 alt={color.name}
//                 className="w-full h-full rounded-full"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Shape Options */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           {shapes.map((shape) => (
//             <button
//               key={shape.id}
//               onClick={() => setSelectedShape(shape)}
//               className={`w-12 h-12 border-2 ${
//                 selectedShape.id === shape.id
//                   ? "border-primary"
//                   : "border-gray-300"
//               }`}
//             >
//               <img
//                 src={shape.image}
//                 alt={shape.name}
//                 className="w-full h-full"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Quantity Selector */}
//         <div className="mt-6 flex items-center">
//           <label className="mr-2">الكمية</label>
//           <input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="w-16 p-1 border border-gray-300 rounded-md text-center"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           className="mt-6 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark"
//           onClick={handleSelection}
//         >
//           إرسال
//         </button>

//         {/* Product Details */}
//         <div className="text-sm mt-4">
//           <p>رمز المنتج: غير محدد</p>
//           <p>التصنيف: أبواب مفردة</p>
//           <p>Product ID: 27506</p>
//         </div>
//       </div>

//       {/* Right Panel: Selected Door Image */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         {isLoading ? (
//           <div className="spinner-border text-primary" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         ) : (
//           <img
//             src={doorImage}
//             alt={selectedShape.name}
//             className="w-64 h-auto rounded-lg shadow-lg"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoorConfigurator;

///////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const DoorConfigurator = ({ categoryId = "single-door" }) => {
//   const colors = [
//     { id: 1, name: "Dark Wood", image: "/2.png" },
//     { id: 2, name: "Light Wood", image: "/3.png" },
//     { id: 3, name: "Black", image: "/4.png" },
//   ];

//   const shapes = [
//     { id: 1, name: "Design 1", image: "/cer-1.jpg" },
//     { id: 2, name: "Design 2", image: "/cer-2.jpg" },
//     { id: 3, name: "Design 3", image: "/cer-3.jpg" },
//   ];

//   const [selectedColor, setSelectedColor] = useState(colors[0]);
//   const [selectedShape, setSelectedShape] = useState(shapes[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [doorImage, setDoorImage] = useState(selectedShape.image);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSelection = async () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       const dummyResponse = {
//         image: "https://via.placeholder.com/300x500.png?text=Generated+Door",
//       };
//       setDoorImage(dummyResponse.image);
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
//         <h2 className="text-2xl font-bold text-center mb-6 text-primary">
//           أبواب مفردة
//         </h2>

//         <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
//           {/* Left Panel: Color and Shape Options */}
//           <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
//             {/* Color Options */}
//             <div>
//               <h3 className="font-semibold mb-2">اختر اللون</h3>
//               <div className="flex flex-wrap gap-2 justify-center">
//                 {colors.map((color) => (
//                   <button
//                     key={color.id}
//                     onClick={() => setSelectedColor(color)}
//                     className={`w-12 h-12 rounded-full border-2 ${
//                       selectedColor.id === color.id
//                         ? "border-primary"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     <img
//                       src={color.image}
//                       alt={color.name}
//                       className="w-full h-full rounded-full"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Shape Options */}
//             <div>
//               <h3 className="font-semibold mb-2">اختر التصميم</h3>
//               <div className="flex flex-wrap gap-2 justify-center">
//                 {shapes.map((shape) => (
//                   <button
//                     key={shape.id}
//                     onClick={() => setSelectedShape(shape)}
//                     className={`w-12 h-12 border-2 rounded ${
//                       selectedShape.id === shape.id
//                         ? "border-primary"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     <img
//                       src={shape.image}
//                       alt={shape.name}
//                       className="w-full h-full rounded"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity Selector */}
//             <div className="mt-4">
//               <label className="mr-2 font-semibold">الكمية</label>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 className="w-16 p-1 border border-gray-300 rounded-md text-center"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               className="mt-6 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
//               onClick={handleSelection}
//             >
//               إرسال
//             </button>
//           </div>

//           {/* Right Panel: Selected Door Image */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             {isLoading ? (
//               <div className="w-64 h-96 flex items-center justify-center">
//                 <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
//               </div>
//             ) : (
//               <img
//                 src={doorImage}
//                 alt={selectedShape.name}
//                 className="w-64 h-auto rounded-lg shadow-lg"
//               />
//             )}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="text-center text-sm mt-8">
//           <p>رمز المنتج: غير محدد</p>
//           <p>التصنيف: أبواب مفردة</p>
//           <p>Product ID: 27506</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoorConfigurator;

///////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoorConfigurator = ({ categoryId = "single-door" }) => {
  const [colors, setColors] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [doorImage, setDoorImage] = useState(null);
  const [isDoorLoading, setIsDoorLoading] = useState(false);
  const [isOptionsLoading, setIsOptionsLoading] = useState(true); // New state for colors and shapes loading

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading shapes and colors from backend
    setTimeout(() => {
      const dummyColors = [
        { id: 1, name: "Dark Wood", image: "/2.png" },
        { id: 2, name: "Light Wood", image: "/3.png" },
        { id: 3, name: "Black", image: "/4.png" },
      ];
      const dummyShapes = [
        { id: 1, name: "Design 1", image: "/cer-1.jpg" },
        { id: 2, name: "Design 2", image: "/cer-2.jpg" },
        { id: 3, name: "Design 3", image: "/cer-3.jpg" },
      ];
      setColors(dummyColors);
      setShapes(dummyShapes);
      setSelectedColor(dummyColors[0]);
      setSelectedShape(dummyShapes[0]);
      setIsOptionsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Fetch door image when color or shape changes
    if (selectedColor && selectedShape) {
      fetchDoorImage();
    }
  }, [selectedColor, selectedShape]);

  const fetchDoorImage = async () => {
    setIsDoorLoading(true);
    setTimeout(() => {
      const dummyResponse = {
        image: "https://via.placeholder.com/300x500.png?text=Generated+Door",
      };
      setDoorImage(dummyResponse.image);
      setIsDoorLoading(false);
    }, 2000);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleShapeChange = (shape) => {
    setSelectedShape(shape);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSend = () => {
    const doorData = {
      color: selectedColor,
      shape: selectedShape,
      quantity,
      doorImage,
    };
    localStorage.setItem("doorData", JSON.stringify(doorData));
    navigate("/order");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          أبواب مفردة
        </h2>

        {isOptionsLoading ? (
          <div className="flex justify-center items-center mb-6">
            <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Left Panel: Color and Shape Options */}
            <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
              {/* Color Options */}
              <div>
                <h3 className="font-semibold mb-2">اختر اللون</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorChange(color)}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor && selectedColor.id === color.id
                          ? "border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-full rounded-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Shape Options */}
              <div>
                <h3 className="font-semibold mb-2">اختر التصميم</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {shapes.map((shape) => (
                    <button
                      key={shape.id}
                      onClick={() => handleShapeChange(shape)}
                      className={`w-12 h-12 border-2 rounded ${
                        selectedShape && selectedShape.id === shape.id
                          ? "border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={shape.image}
                        alt={shape.name}
                        className="w-full h-full rounded"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-4">
                <label className="mr-2 font-semibold">الكمية</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 p-1 border border-gray-300 rounded-md text-center"
                />
              </div>

              {/* Submit Button */}
              <button
                className="mt-6 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
                onClick={handleSend}
              >
                إرسال
              </button>
            </div>

            {/* Right Panel: Selected Door Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              {isDoorLoading ? (
                <div className="w-64 h-96 flex items-center justify-center">
                  <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
                </div>
              ) : (
                doorImage && (
                  <img
                    src={doorImage}
                    alt={selectedShape.name}
                    className="w-64 h-auto rounded-lg shadow-lg"
                  />
                )
              )}
            </div>
          </div>
        )}

        {/* Product Details */}
        <div className="text-center text-sm mt-8">
          <p>رمز المنتج: غير محدد</p>
          <p>التصنيف: أبواب مفردة</p>
          <p>Product ID: 27506</p>
        </div>
      </div>
    </div>
  );
};

export default DoorConfigurator;

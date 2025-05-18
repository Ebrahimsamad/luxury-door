// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import ProductService from "../../services/productService";

// const DoorConfigurator = () => {
//   const [colors, setColors] = useState([]);
//   const [shapes, setShapes] = useState([]);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [doorImage, setDoorImage] = useState(null);
//   const [isDoorLoading, setIsDoorLoading] = useState(false);
//   const [isOptionsLoading, setIsOptionsLoading] = useState(true);

//   const navigate = useNavigate();
//   const { categoryId } = useParams();

//   useEffect(() => {
//     const savedCategory = JSON.parse(localStorage.getItem("selectedCategory"));
//     if (savedCategory) {
//       const { colorIds, sharpIds } = savedCategory;

//       setColors(colorIds || []);
//       setShapes(sharpIds || []);

//       if (colorIds?.length > 0) setSelectedColor(colorIds[0]);
//       if (sharpIds?.length > 0) setSelectedShape(sharpIds[0]);

//       setIsOptionsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (categoryId && selectedColor && selectedShape) {
//       fetchDoorImage(categoryId, selectedColor._id, selectedShape._id);
//     }
//   }, [categoryId, selectedColor, selectedShape]);

//   const fetchDoorImage = async (categoryId, colorId, sharpId) => {
//     if (!categoryId || !colorId || !sharpId) return;

//     setIsDoorLoading(true);

//     try {
//       const filters = { categoryId, colorId, sharpId };
//       const response = await ProductService.getProductsByFilter(filters);

//       if (response?.product?.image) {
//         setDoorImage(response.product.image);
//       } else {
//         setDoorImage(null);
//       }
//     } catch (error) {
//       console.error("Error fetching door image:", error.message);
//     } finally {
//       setIsDoorLoading(false);
//     }
//   };

//   // Handle color selection
//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   // Handle shape selection
//   const handleShapeChange = (shape) => {
//     setSelectedShape(shape);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleSend = () => {
//     const doorData = {
//       color: selectedColor,
//       shape: selectedShape,
//       quantity,
//       doorImage,
//     };
//     localStorage.setItem("doorData", JSON.stringify(doorData));
//     navigate("/order");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-screen-xl">
//         <h2 className="text-2xl font-semibold text-center mb-4 text-primary">
//           أبواب مفردة
//         </h2>

//         {isOptionsLoading ? (
//           <div className="flex justify-center items-center mb-4">
//             <div className="loader animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary" />
//           </div>
//         ) : (
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
//             {/* Left Panel: Color and Shape Options */}
//             <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
//               {/* Color Options */}
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">اختر اللون</h3>
//                 <div className="flex flex-wrap justify-center gap-1">
//                   {colors.map((color) => (
//                     <button
//                       key={color._id}
//                       onClick={() => handleColorChange(color)} // Update color on click
//                       className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ease-in-out ${
//                         selectedColor && selectedColor._id === color._id
//                           ? "border-primary shadow-xl scale-105"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       <img
//                         src={color.image}
//                         alt={color.name}
//                         className="w-full h-full rounded-full object-cover"
//                       />
//                       <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xs bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300">
//                         {color.name}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Shape Options */}
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">اختر التصميم</h3>
//                 <div className="flex flex-wrap justify-center gap-1">
//                   {shapes.map((shape) => (
//                     <button
//                       key={shape._id}
//                       onClick={() => handleShapeChange(shape)} // Update shape on click
//                       className={`relative w-12 h-12 border-2 rounded transition-all duration-300 ease-in-out ${
//                         selectedShape && selectedShape._id === shape._id
//                           ? "border-primary shadow-xl scale-105"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       <img
//                         src={shape.image}
//                         alt={shape.code}
//                         className="w-full h-full rounded object-cover"
//                       />
//                       <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xs bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300">
//                         {shape.code}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity Selector */}
//               <div className="mt-2">
//                 <label className="mr-2 font-semibold">الكمية</label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                   className="w-16 p-2 border border-gray-300 rounded-md text-center"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 className="mt-4 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
//                 onClick={handleSend}
//               >
//                 إرسال
//               </button>
//             </div>

//             {/* Right Panel: Selected Door Image */}
//             <div className="w-full md:w-1/2 flex justify-center">
//               {isDoorLoading ? (
//                 <div className="w-40 h-64 flex items-center justify-center">
//                   <div className="loader animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary"></div>
//                 </div>
//               ) : (
//                 doorImage && (
//                   <img
//                     src={doorImage}
//                     alt={selectedShape?.name || "Selected Shape"}
//                     className="w-full h-auto md:w-40 md:h-64 rounded-lg shadow-xl"
//                   />
//                 )
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoorConfigurator;
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../services/productService";

const DoorConfigurator = () => {
  const [colors, setColors] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [quantity, setQuantity] = useState(""); // Change initial state to an empty string
  const [doorImage, setDoorImage] = useState(null);
  const [isDoorLoading, setIsDoorLoading] = useState(false);
  const [isOptionsLoading, setIsOptionsLoading] = useState(true);

  const navigate = useNavigate();
  const { categoryId } = useParams();

  useEffect(() => {
    const savedCategory = JSON.parse(localStorage.getItem("selectedCategory"));
    if (savedCategory) {
      const { colorIds, sharpIds } = savedCategory;

      setColors(colorIds || []);
      setShapes(sharpIds || []);

      if (colorIds?.length > 0) setSelectedColor(colorIds[0]);
      if (sharpIds?.length > 0) setSelectedShape(sharpIds[0]);

      setIsOptionsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (categoryId && selectedColor && selectedShape) {
      fetchDoorImage(categoryId, selectedColor._id, selectedShape._id);
    }
  }, [categoryId, selectedColor, selectedShape]);

  const fetchDoorImage = async (categoryId, colorId, sharpId) => {
    if (!categoryId || !colorId || !sharpId) return;

    setIsDoorLoading(true);

    try {
      const filters = { categoryId, colorId, sharpId };
      const response = await ProductService.getProductsByFilter(filters);

      if (response?.product?.image) {
        setDoorImage(response.product.image);
      } else {
        setDoorImage(null);
      }
    } catch (error) {
      console.error("Error fetching door image:", error.message);
    } finally {
      setIsDoorLoading(false);
    }
  };

  // Handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Handle shape selection
  const handleShapeChange = (shape) => {
    setSelectedShape(shape);
  };

  // Handle quantity change and validation
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    // Allow only digits and ensure it's a valid positive number
    if (/^\d*$/.test(value)) {
      setQuantity(value);
    }
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
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-screen-xl">
        <h2 className="text-2xl font-semibold text-center mb-4 text-primary">
          أبواب مفردة
        </h2>

        {isOptionsLoading ? (
          <div className="flex justify-center items-center mb-4">
            <div className="loader animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary" />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
            {/* Left Panel: Color and Shape Options */}
            <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
              {/* Color Options */}
              <div>
                <h3 className="font-semibold text-lg mb-2">اختر اللون</h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {colors.map((color) => (
                    <button
                      key={color._id}
                      onClick={() => handleColorChange(color)} // Update color on click
                      className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ease-in-out ${
                        selectedColor && selectedColor._id === color._id
                          ? "border-primary shadow-xl scale-105"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xs bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Shape Options */}
              <div>
                <h3 className="font-semibold text-lg mb-2">اختر التصميم</h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {shapes.map((shape) => (
                    <button
                      key={shape._id}
                      onClick={() => handleShapeChange(shape)} // Update shape on click
                      className={`relative w-12 h-12 border-2 rounded transition-all duration-300 ease-in-out ${
                        selectedShape && selectedShape._id === shape._id
                          ? "border-primary shadow-xl scale-105"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={shape.image}
                        alt={shape.code}
                        className="w-full h-full rounded object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xs bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300">
                        {shape.code}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-2">
                <label className="mr-2 font-semibold">الكمية</label>
                <input
                  type="text" // Change input type to text
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 p-2 border border-gray-300 rounded-md text-center"
                  placeholder="Enter quantity"
                />
              </div>

              {/* Submit Button */}
              <button
                className="mt-4 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
                onClick={handleSend}
              >
                إرسال
              </button>
            </div>

            {/* Right Panel: Selected Door Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              {isDoorLoading ? (
                <div className="w-40 h-64 flex items-center justify-center">
                  <div className="loader animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary"></div>
                </div>
              ) : (
                doorImage && (
                  <img
                    src={doorImage}
                    alt={selectedShape?.name || "Selected Shape"}
                    className="w-full h-auto md:w-40 md:h-64 rounded-lg shadow-xl"
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoorConfigurator;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Order = () => {
  const [productData, setProductData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Retrieve product data from localStorage
    const storedData = localStorage.getItem("doorData");
    if (storedData) {
      setProductData(JSON.parse(storedData));
    }
  }, []);

  const onSubmit = (userData) => {
    // Combine product data with user data
    const orderData = {
      ...userData,
      product: productData,
    };

    // Simulate sending an email by showing the data in an alert
    alert(`Order Summary:
      Name: ${orderData.name}
      Email: ${orderData.email}
      Address: ${orderData.address}
      Phone: ${orderData.phone}
      
      Product Details:
      Color: ${orderData.product.color.name}
      Shape: ${orderData.product.shape.name}
      Quantity: ${orderData.product.quantity}
      Door Image: ${orderData.product.doorImage}
    `);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl flex flex-col md:flex-row">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Your Information</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10,14}$/,
                    message: "Phone number should be 10-14 digits",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md mt-4 hover:bg-primary-dark transition duration-300"
            >
              Submit Order
            </button>
          </form>
        </div>

        {/* Right Side: Product Summary */}
        <div className="w-full md:w-1/2 p-4 border-l">
          <h2 className="text-2xl font-bold mb-4">Your Selected Product</h2>
          {productData ? (
            <div className="flex flex-col items-center">
              <img
                src={productData.doorImage}
                alt={productData.shape.name}
                className="w-64 h-auto rounded-lg shadow-lg mb-4"
              />
              <div className="text-center">
                <p className="font-semibold">Color: {productData.color.name}</p>
                <p className="font-semibold">Shape: {productData.shape.name}</p>
                <p className="font-semibold">
                  Quantity: {productData.quantity}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No product selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
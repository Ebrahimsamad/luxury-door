import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customMarker = new L.Icon({
  iconUrl: `/map.png`,
  iconSize: [40, 50],
  iconAnchor: [20, 50],
  popupAnchor: [0, -50],
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white text-black rtl min-h-screen">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-semibold text-center mb-6">تواصل معنا</h1>
        <p className="text-center mb-8 text-lg">
          نحن هنا للمساعدة! يرجى ملء النموذج أدناه للتواصل معنا.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center  animate-float">
              <FaPhone className="text-secondary text-2xl ml-3 transition-transform duration-300 hover:scale-110" />
              <span className="text-lg">966549023870+</span>
            </div>
            <div className="flex items-center mb-4 animate-float">
              <FaEnvelope className="text-secondary text-2xl ml-3 transition-transform duration-300 hover:scale-110" />
              <span className="text-lg">danaalriyadh@gmail.com</span>
            </div>
            <div className="flex items-center mb-4 animate-float">
              <FaMapMarkerAlt className="text-secondary text-2xl ml-3 transition-transform duration-300 hover:scale-110" />
              <span className="text-lg">
                الرياض، حى النرجس , شارع عثمان بن عفان
              </span>
            </div>

            <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1956219365746!2d46.6632845!3d24.8652067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee567187cde89%3A0x958ccb2c423c29af!2z2YXYs9iq2LTZitmEINin2YTYudix2KfYqCDZhdit2KfZhNmK2KjYqQ!5e0!3m2!1sar!2ssa!4v1716038144212!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-center">
              اترك لنا رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2" htmlFor="name">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  رسالتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 resize-none bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-secondary text-white py-3 px-8 rounded-full text-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

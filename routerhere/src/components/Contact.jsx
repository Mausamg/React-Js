import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-gray-300 flex flex-col items-center justify-center text-black px-6 py-10">
      {/* Page Header */}
      <h1 className="text-5xl font-bold mb-4">Contact Us 📞</h1>
      <p className="text-lg text-center max-w-3xl mb-10">
        Have any questions? We'd love to hear from you! Get in touch with us
        through the form below or check out our company details.
      </p>

      {/* Two Separate Sections */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Company Details */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">
            About Our Company 🏢
          </h2>
          <p className="mb-4 text-center">
            We are a **leading tech company** specializing in **software
            development, AI solutions, cloud computing**, and customer-centric
            services.
          </p>
          <h3 className="text-2xl font-semibold mt-6">🌟 Why Choose Us?</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>✅ Cutting-edge technology solutions</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Trusted by 500+ clients worldwide</li>
            <li>✅ Over 10 years of experience</li>
          </ul>

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">📍 Contact Info</h3>
            <p>📧 Email: support@example.com</p>
            <p>📍 Address: 123 Main Street, City, Country</p>
            <p>📞 Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Send Us a Message ✉️
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">Full Name:</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">Message:</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

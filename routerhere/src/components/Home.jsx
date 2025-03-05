import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Welcome to Our Website 🚀
        </h1>
        <p className="text-lg mb-6 max-w-xl">
          Explore amazing content, connect with us, and be part of our growing
          community.
        </p>
        <Link
          to="/signin"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
        {[
          {
            title: "🚀 Fast",
            desc: "Experience lightning-fast performance with our platform.",
          },
          {
            title: "🔒 Secure",
            desc: "Your data is safe with our state-of-the-art security features.",
          },
          {
            title: "📱 Responsive",
            desc: "Access our platform from any device, anywhere.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white text-black rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">
          We are a passionate team dedicated to delivering high-quality content
          and seamless user experiences. Our goal is to provide top-notch
          services while ensuring security, speed, and reliability.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Users Say 💬</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "John Doe",
              review: "This platform is amazing! Super fast and easy to use.",
            },
            {
              name: "Jane Smith",
              review:
                "I love how secure and responsive the website is. Great job!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
            >
              <p className="italic">"{testimonial.review}"</p>
              <h3 className="mt-4 font-semibold">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-auto">
        <p className="text-gray-400">
          &copy; 2025 MyWebsite. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;

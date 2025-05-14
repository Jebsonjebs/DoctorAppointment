import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 md:p-10 font-sans text-gray-900">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 tracking-wide text-blue-400">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 justify-between">
          <div className="flex-1 min-w-[260px] bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl p-6 md:p-7 shadow-md">
            <h3 className="mb-3 text-blue-400 text-xl font-semibold">
              Get in Touch
            </h3>
            <p className="mb-4 text-base">
              We'd love to hear from you! Whether you have a question about
              appointments, services, or anything else, our team is ready to
              answer all your questions.
            </p>
            <ul className="list-none p-0 mb-4 space-y-2 text-base">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@jjappointments.com"
                  className="text-blue-400 hover:underline"
                >
                  info@jjappointments.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-400 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <strong>Address:</strong> 123 Main St, City, Country
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 text-2xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-2xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <form className="flex-1 min-w-[300px] bg-blue-50 rounded-xl p-6 md:p-7 shadow-md flex flex-col gap-5">
            <h3 className="mb-2 text-blue-400 text-lg font-semibold">
              Send a Message
            </h3>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-base text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="px-3 py-2 border-2 border-blue-200 rounded-md text-base bg-white focus:outline-none focus:border-blue-400 transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-base text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-3 py-2 border-2 border-blue-200 rounded-md text-base bg-white focus:outline-none focus:border-blue-400 transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-base text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="px-3 py-2 border-2 border-blue-200 rounded-md text-base bg-white focus:outline-none focus:border-blue-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-lg font-semibold rounded-md shadow-md hover:from-blue-800 hover:to-blue-500 transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

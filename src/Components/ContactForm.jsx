import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      console.error("reCaptcha verification failed");
      return;
    }

    const serviceID = "service_dj03a0a";
    const templateID = "template_h5qlgox";
    const publicKey = "6-s1ln-dstDaW-VJB";

    const templateParams = {
      from_name: name,
      message: message,
      "g-recaptcha-response": recaptchaValue,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Message submitted:", response);
        setName("");
        setMessage("");
        setRecaptchaValue(null);
        onClose();
      })
      .catch((error) => {
        console.error("Error sending message", error);
      });
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white dark:bg-gray-800 dark:text-white mx-auto mt-16 p-6 rounded-lg shadow-lg">
        <p>If you want to reach out, send me a message here.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mt-4 text-sm font-medium">
            You name:
          </label>
          <input
            className="lg:w-1/3 md:w-2/3 sm:w-full xs:w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="message" className="block mt-4 text-sm font-medium">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <ReCAPTCHA
            sitekey="6Ld_HCopAAAAAEM7b7mMoYJ5EmkCXDBsSrgvDSuZ"
            onChange={(value) => setRecaptchaValue(value)}
          />

          <button
            type="submit"
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
        <div className="grid justify-items-end">
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

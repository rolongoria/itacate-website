import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import CustomSpinner from "../components/CustomSpinner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ju4830i",
        "template_e0j8vj9",
        form.current,
        "FsleU7CMxbJj8X03p"
      )
      .then(
        (result) => {
          console.log(result);
          // alert("Message sent!");
          setIsLoading(false);
          setSentMessage(true);
        },
        (error) => {
          alert("Error: " + error.text);
          setIsLoading(false);
          setSentMessage(true);
        }
      );
  };

  return (
    <div>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <div className="flex flex-col items-center">
          <p className="p-6 font-Pacifico text-3xl text-itacate-rosa">
            We'd love to hear from you!
          </p>

          {/* Thank you message after submission */}
          {sentMessage && (
            <p className="text-green-600 font-semibold mb-4">
              Thank you for your message!
            </p>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 max-w-md mx-auto w-full p-4 border rounded bg-white shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border p-2"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border p-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md font-semibold uppercase tracking-wide hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              Talk to Us
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

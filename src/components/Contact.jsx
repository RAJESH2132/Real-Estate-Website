import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const apiKey = import.meta.env.VITE_ACCESS_KEY;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full p-6 py-20 overflow-hidden text-center lg:px-32"
      id="Contact"
    >
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        Contact
        <span className="font-light underline underline-offset-4 decoration-1 under">
          With Us
        </span>
      </h1>
      <p className="mx-auto mb-12 text-center text-gray-500 max-w-80">
        Ready to Make a Move? Let&apos;s Build Your Future Together
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl pt-8 mx-auto text-gray-600"
      >
        <div className="flex flex-wrap">
          <div className="w-full text-left md:w-1/2">
            Your Name
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full text-left md:w-1/2 md:pl-4">
            Your Email
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            required
            className="w-full h-48 px-4 py-3 mt-2 border border-gray-300 rounded resize-none"
          ></textarea>
        </div>
        <button className="px-12 py-2 mb-10 text-white bg-blue-600 rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;

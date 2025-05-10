"use client";

import React, { useState } from "react";
import { VscLoading } from "react-icons/vsc";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    paymentMethod: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://formsubmit.co/ajax/fedyanasosovich@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setStatus({
          type: "success",
          message:
            "Thanks for contacting us! We will be in touch with you shortly.",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setStatus({
          type: "error",
          message: "There was an error submitting your form. Please try again.",
        });
      })
      .finally(() => {
        setLoading(false); // End loading
      });
  };

  return (
    <section className="pt-12 lg:pt-48 ">
      <div className="container px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-x-16 gap-y-8 ">
          <div className="rounded-lg bg-white text-black px-4 lg:px-8 pt-8 pb-6 shadow-lg lg:col-span-3 lg-px-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Product</p>
                  <div className="w-full border border-gray-600 p-3 rounded-lg">
                    <div className="mb-2">
                      <input
                        type="radio"
                        id="product-2x30iu"
                        name="product"
                        value="2x30iu"
                        checked={formData.product === "2x30iu"}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="product-2x30iu" className="ml-2">
                        2x 30iu = 60iu Price is 760 euro (380 euro per
                        pack)
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="radio"
                        id="product-4x30iu"
                        name="product"
                        value="4x30iu"
                        checked={formData.product === "4x30iu"}
                        onChange={handleChange}
                      />
                      <label htmlFor="product-4x30iu" className="ml-2">
                       4 x30iu = 120iu Price is 1480 euro (370 euro per
                        pack)
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="radio"
                        id="product-6x30iu"
                        name="product"
                        value="6x30iu"
                        checked={formData.product === "6x30iu"}
                        onChange={handleChange}
                      />
                      <label htmlFor="product-6x30iu" className="ml-2">
                        6x30 = 180iu Price is 2160 euro (360 euro per
                        pack)
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="radio"
                        id="product-10x30iu"
                        name="product"
                        value="10x30iu"
                        checked={formData.product === "10x30iu"}
                        onChange={handleChange}
                      />
                      <label htmlFor="product-10x30iu" className="ml-2">
                        10 x 30 = 300 iu Price is 3500 euro (350 euro per
                        pack)
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="paymentMethod">
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    className="w-full rounded-lg text-black border font-inherit border-gray-600 p-3 text-sm"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Payment Method</option>
                    
                    <option  value="Bank-Wire">Bank Wire</option>
                    <option  value="Western-Union">
                      Western Union / Money Gram
                    </option>
                    <option  value="Western-Union">
                      Revolut / Wise
                    </option>
                    <option  value="Crypto">Crypto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  {loading ? (
                    <VscLoading
                      className="mx-auto animate-spin"
                      stroke="30"
                      size={20}
                    />
                  ) : (
                    "Order Now"
                  )}
                </button>
              </div>
            </form>
            <div className="mt-3">
              <p>
                For custom orders and inquires about hgh, please contact me
                directly.{" "}
                <a
                  href="mailto:fedyanasosovich@gmail.com"
                  className="text-darkPurple  underline line-clamp-2 underline-offset-4"
                >
                  fedyanasosovich@gmail.com
                </a>
              </p>
            </div>
            {status && (
              <p
                className={`mt-4 text-center p-8  rounded text-black ${
                  status.type === "success"
                    ? "bg-[#e0ffc7] "
                    : "bg-red-600 text-white "
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

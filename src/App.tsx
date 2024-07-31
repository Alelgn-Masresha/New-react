import "./App.css";
// import { HeroParallaxDemo } from "./components/ui/Para";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

import {
  BiCodeAlt,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTelegram,
} from "react-icons/bi";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillYoutube,
  AiFillBehanceSquare,
  AiFillTwitterSquare,
  AiFillCodeSandboxSquare,
} from "react-icons/ai";

import cms from "./assets/event-pulse.png";
import personal from "./assets/tern.png";
import profile from "./assets/port-photo.png";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i7upijg", // Replace with your EmailJS Service ID
        "template_0dg2nkp", // Replace with your EmailJS Template ID
        formData,
        "vqAqzEG87nzS_mvvg" // Replace with your EmailJS User ID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log("Email successfully sent!", result.text);
          setStatus("Email successfully sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error: EmailJSResponseStatus) => {
          console.error("Failed to send email:", error.text);
          setStatus("Failed to send email.");
        }
      );
  };
  return (
    <>
      <main className="bg-white">
        {/* nav section */}
        <section className="bg-slate-200">
          <div className="mx-9">
            <div className="mx-auto max-w-6xl">
              <nav className="py-5 mb-12 flex justify-between">
                <h1 className="text-2xl font-burtons">I'm Alelgn</h1>
                <ul className="flex items-center">
                  <li>
                    <a
                      href="#"
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 outline-none"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* hero section */}
        <section className=" min-h-screen py-16 mx-9">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col justify-center md:flex-row">
              <div className="text-center md:text-start">
                <h2 className="font-bold text-5xl py-2 text-teal-950">
                  Alelgn Masresha
                </h2>
                <h3 className="font-semibold text-3xl text-teal-900 mt-10">
                  Developer and Designer
                </h3>
                <p className="text-md py-5 leading-7 text-teal-700 max-w-lg mx-auto md:mx-0 md:max-w-xs">
                  Freelancer providing service for programming needs. I can work
                  anytime any were. I'm have dedication and passion to work on
                  anything in my profession.
                </p>

                <div className="text-5xl md:text-3xl flex justify-center gap-10 text-teal-800 mt-10 md:justify-start">
                  <a href="https://t.me/aleonair1">
                    <BiLogoTelegram className="hover:text-slate-800 transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/alelgn-masresha-6468b6293/">
                    <AiFillLinkedin className="hover:text-slate-800 transition-colors" />
                  </a>
                  <a href="https://m.facebook.com/alelgn.masresha.3">
                    <AiFillFacebook className="hover:text-slate-800 transition-colors" />
                  </a>
                  <AiFillBehanceSquare className="hover:text-slate-800 transition-colors" />
                </div>
              </div>
              <div className="relative bg-gradient-to-b from-slate-500 to-white rounded-full max-w-80 h-80 overflow-hidden mx-auto mt-10">
                <img src={profile} alt="Profile" />
              </div>
            </div>
          </div>
        </section>

        {/* cards */}
        <section className=" min-h-screen py-16 bg-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center my-10">
              <h2 className="font-bold text-3xl text-teal-900 ">Skills</h2>
              <p className="text-md py-2 leading-7 text-teal-700">
                Freelancer providing service for programming needs. I can work
                anytime. I am Dedicated to do anything with high quality and
                efficency
              </p>
            </div>
            <div className="flex flex-col flex-wrap mx-20 md:gap-6 md:flex-row items-center justify-center">
              <div className="flex flex-col text-center min-w-60 max-w-96 items-center shadow-2xl py-8 px-4 bg-slate-50 rounded-xl hover:scale-105 transition-transform my-4">
                <BiLogoHtml5 className="text-5xl text-amber-600 mb-7" />
                <h3 className="text-2xl text-teal-900 mb-3">HTML5</h3>
                <p className="text-md leading-7 text-teal-700">
                  The standard markup language for creating web pages and web
                  applications.
                </p>
              </div>
              <div className="flex flex-col text-center min-w-60 max-w-96 items-center shadow-2xl py-8 px-4 bg-slate-50 rounded-xl hover:scale-105 transition-transform my-4">
                <BiLogoCss3 className="text-5xl text-cyan-600 mb-7" />
                <h3 className=" font-semibold text-2xl text-teal-900 mb-3">
                  CSS3
                </h3>
                <p className="text-md leading-7 text-teal-700">
                  Responsive design using custom css and html. for more
                  customized web page.
                </p>
              </div>
              <div className="flex flex-col text-center min-w-60 max-w-96 items-center shadow-2xl py-8 px-4 bg-slate-50 rounded-xl hover:scale-105 transition-transform my-4">
                <BiLogoReact className="text-5xl text-cyan-400 mb-7" />
                <h3 className="font-semibold text-2xl text-teal-900 mb-3">
                  React
                </h3>
                <p className="text-md leading-7 text-teal-700">
                  React website development for website with more complex
                  features.
                </p>
              </div>
              <div className="flex flex-col text-center min-w-60 max-w-96 items-center shadow-2xl py-8 px-4 bg-slate-50 rounded-xl hover:scale-105 transition-transform my-4">
                <BiLogoTailwindCss className="text-5xl text-cyan-400 mb-7" />
                <h3 className="font-semibold text-2xl text-teal-900 mb-3">
                  tailwind
                </h3>
                <p className="text-md leading-7 text-teal-700">
                  React website development for website with more complex
                  features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* portfolio */}
        <section className=" min-h-screen py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center my-10">
              <h3 className="text-3xl text-teal-900 font-bold">Portfolio</h3>
              <p className="text-md py-2 leading-7 text-teal-700">
                Here are some of the website I designed and developed on the
                past
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <div
                className="rounded-lg shadow-lg bg-cover overflow-hidden hover:scale-105 hover:shadow-2xl m-5 transition-all group"
                style={{ backgroundImage: `url(${cms})` }}
              >
                <div className="bg-black/30 backdrop-blur-sm text-center items-center justify-center py-10 px-6 relative top-80 group-hover:top-0 transition-all">
                  <h3 className="text-2xl text-white mb-2">Event Pulse</h3>
                  <p className="text-md leading-7 text-slate-300 mb-4 max-w-sm">
                    website built with react to conduct virtual and on-site
                    events simlessly
                  </p>
                  <a
                    href={"https://github.com/Alelgn-Masresha/New-react"}
                    className="btn bg-blue-600 hover:bg-blue-800 transition-colors text-cyan-300 hover:text-white py-2 px-5 rounded-lg"
                  >
                    visit site
                  </a>
                </div>
              </div>
              <div
                className="rounded-lg shadow-lg bg-cover overflow-hidden hover:scale-105 hover:shadow-2xl m-5 transition-all group"
                style={{ backgroundImage: `url(${personal})` }}
              >
                <div className="bg-black/40 backdrop-blur-sm text-center items-center justify-center py-10 px-6 relative top-80 group-hover:top-0 transition-all">
                  <h3 className="text-2xl text-white mb-2">turn</h3>
                  <p className="text-md leading-7 text-slate-300 mb-4  max-w-sm">
                    A booking website used to book travel or hotel recervation
                  </p>
                  <a
                    href={"https://github.com/Alelgn-Masresha/New-react/"}
                    className="btn bg-blue-700 hover:bg-blue-800 transition-colors text-cyan-300 hover:text-white py-2 px-5 rounded-lg"
                  >
                    visit site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl py-2 font-bold text-teal-950">Contact</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in touch
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                I'd love to hear from you. Please email me below and I will get
                back to you as soon as possible.
              </p>
            </div>
            <div className="mt-12">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="outline-none border-2 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="outline-none border-2 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="outline-none border-2 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {status && (
                <p className="mt-4 text-center text-lg text-gray-500">
                  {status}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

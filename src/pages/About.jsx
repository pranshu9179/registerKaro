import React from "react";
import aboutus from "../photos/AboutImg/aboutImage.jpg";
import aboutUsVideo from "../photos/AboutImg/aboutUsVideo.webp";
const AboutUs = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="text-center md:text-left">
        <h3 className="text-sm text-orange-500 uppercase tracking-wide">
          Welcome to RegisterKaro.in
        </h3>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mt-4">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              About <span className="text-orange-500">Register Karo</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We have been using RegisterKaro as our One-stop vendor for our
              most service applications over the last 6 years, and the testimony
              heavily lies in their performance, ability to co-exist, and
              willingness to act based on our changing requirements.
            </p>
            <p className="text-gray-600 mt-4 text-lg">
              We would strongly recommend their services to any organization
              that is looking for a quick, reliable, and predictable outcome.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={aboutus}
              alt="About Us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
          Why Choose Register Karo
        </h2>
        <p className="text-gray-600 mt-4 text-lg text-center">
          It is both cost-efficient and secure, building trust with people and
          bringing holistic value for client loyalty.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
          {[
            { icon: "🔒", title: "Confidential & Safe", bg: "bg-orange-50" },
            { icon: "✅", title: "No Hidden Fee", bg: "bg-green-50" },
            { icon: "😊", title: "Guaranteed Satisfaction", bg: "bg-blue-50" },
            {
              icon: "👨‍💼",
              title: "Expert CA/CS Assistance",
              bg: "bg-purple-50",
            },
            { icon: "🔒", title: "Confidential & Safe", bg: "bg-orange-50" },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 ${item.bg} rounded-lg shadow-md text-center h-full flex flex-col justify-between`}
            >
              <h4 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
                {item.icon} {item.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                {item.title === "No Hidden Fee"
                  ? "Everything is put before you with no hidden charges or conditions."
                  : "All your private information is safe with us."}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold">
          Our Video Introductions
        </h2>
        <p className="mt-2 text-lg">
          Watch great insights and feedback from experts.
        </p>

        <div className="flex flex-col md:flex-row mt-6 items-center gap-6">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              <div className="bg-blue-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold">
                  Explore ideas together
                </h4>
                <p className="text-sm mt-1">
                  Working together brings out the best innovative strategies.
                </p>
              </div>
              <div className="bg-blue-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold">
                  Bring those ideas to life
                </h4>
                <p className="text-sm mt-1">
                  Our experts help transform ideas into successful strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={aboutUsVideo}
              alt="Video Thumbnail"
              className="rounded-lg shadow-lg w-auto h-auto max-w-[350px] max-h-[200px] object-contain md:max-w-[400px] md:max-h-[250px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our Happy Clients
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Professionally cultivate one-to-one customer service with robust
          ideas.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[...Array(20)].map((_, i) => (
            <button
              key={i}
              className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center shadow-md"
            >
              <span className="text-2xl">💼</span>
            </button>
          ))}
        </div>

        <button className="mt-6 text-blue-600 font-semibold hover:underline">
          Show more →
        </button>
      </div>

      <div className="mt-12 bg-orange-500 text-white p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { text: "Fill up Application Form", icon: "📝" },
          { text: "Make Online Payment", icon: "💳" },
          { text: "Executive will Process Application", icon: "🛠" },
          { text: "Get Confirm Mail", icon: "📩" },
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-2xl">{step.icon}</span>
            <p className="text-sm mt-2">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

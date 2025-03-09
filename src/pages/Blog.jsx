import React, { useState } from "react";
import blog from "../photos/BlogImg/blog.jpg";

const blogs = [
  {
    id: 1,
    image: blog,
    author: "Prakash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small Business & Startup",
    description:
      "Dive into the success trends of transitioning a 2-10 team into a Super Boot thriving company.",
    tags: ["Tax & Audit", "Management"],
  },
  {
    id: 2,
    image: blog,
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Investment models and scale-up aspects of complex business marketplaces.",
    tags: ["Resources", "Compliance"],
  },
  {
    id: 3,
    image: blog,
    author: "Rashi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Well-being and HR Principles. Learn how it builds a proactive workspace.",
    tags: ["Audit", "Networking"],
  },
  {
    id: 4,
    image: blog,
    author: "Karan Kumar",
    date: "1 Jan 2022",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration between new startups, stronger, and organized teams.",
    tags: ["Money", "Management"],
  },
  {
    id: 5,
    image: blog,
    author: "Richa Singh",
    date: "1 Jan 2022",
    title: "Scale-Up Company Offer",
    description:
      "A scientific framework to guide teams in their expansion towards sustainable business.",
    tags: ["Tax Return", "Fundamental"],
  },
  {
    id: 6,
    image: blog,
    author: "Miss Hasa",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Startup growth strategies and essential tools for operational excellence.",
    tags: ["Private Limited Company", "Customer Success"],
  },
];

const testimonials = [
  {
    id: 1,
    name: "Chris",
    position: "President at GCS, Providence, USA",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: blog,
  },
  {
    id: 2,
    name: "Chris",
    position: "President at GCS, Providence, USA",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: blog,
  },
  {
    id: 3,
    name: "Chris",
    position: "President at GCS, Providence, USA",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: blog,
  },
];

const faqs = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software allows recovery of deleted files from your desktop through an intuitive and user-friendly process.",
  },
  {
    question: "How secure is my data with this software?",
    answer:
      "We use state-of-the-art encryption to ensure your data remains safe and secure during recovery.",
  },
  {
    question: "Is there a trial version available?",
    answer:
      "Yes, we offer a free trial version with limited features so you can test the software before purchasing.",
  },
];

const Blog = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-12">
      <div className="text-center">
        <h3 className="text-sm text-orange-500 uppercase tracking-wide">
          Explore Our Blogs
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          Accelerate Digital Transformation
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                {blog.author} • {blog.date}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Show more blogs →
        </button>
      </div>

      <div className="mt-16 bg-blue-900 text-white py-12 px-6 rounded-lg">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
          What People Say About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{testimonial.review}</p>
              <div className="mt-3 text-yellow-500 flex">
                {"⭐".repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-sm text-orange-500 uppercase tracking-wide">
          FAQ
        </h3>
        <h2 className="text-center text-2xl md:text-3xl font-bold mt-2">
          Frequent Ask Questions
        </h2>
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-3 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-900">{faq.question}</h4>
                <span>{openFAQ === index ? "−" : "+"}</span>
              </div>
              {openFAQ === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

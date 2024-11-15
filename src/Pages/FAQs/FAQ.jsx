import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";  // Import the CSS file
import { InfiniteMovingCards } from "./components/InfiniteMovingCards.jsx"; // Adjust the path as needed

const faqItems = [
  {
    question: "What is Sakthi Saadhak?",
    answer: "Sakthi Saadhak is a platform designed to help individuals discover and develop their spiritual journey with resources, guidance, and community support.",
  },
  {
    question: "How do I register on Sakthi Saadhak?",
    answer: "You can register by visiting the registration page on our website and filling out the necessary details.",
  },
  {
    question: "Is there a mobile app for Sakthi Saadhak?",
    answer: "Currently, our platform is web-based, but we are working on developing a mobile app for a more accessible experience.",
  },
  // Add more FAQs here
];

export default function FAQPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <InfiniteMovingCards items={faqItems} direction="left" speed="normal" pauseOnHover={true} />
    </div>
  );
}

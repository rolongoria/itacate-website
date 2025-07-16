import React from "react";
import { useState, useEffect } from "react";

const reviews = [
  "The food was amazing and the service was even better!",
  "Absolutely love the chilaquiles here – best in the Valley!",
  "Great atmosphere, friendly staff, and authentic taste!",
  "Mission location is our new favorite spot!",
  "Never disappoints. Always fresh and flavorful!",
];

export default function CustomerReview() {
  const [randomReview, setRandomReview] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setRandomReview(reviews[randomIndex]);
  }, []); // runs once when component mounts

  return (
    <div className="text-center mt-6">
      <p className="italic text-lg text-gray-700">"{randomReview}"</p>
    </div>
  );
}

"use client"
import React, { useState, useEffect } from "react";
import { aboutSkills } from "../../data/data";

const AboutSkills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (deleting) {
      // Deleting phase
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Speed of "deleting"
      } else {
        setDeleting(false);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % aboutSkills.length);
      }
    } else {
      // Typing phase
      if (displayedText.length < aboutSkills[currentSkillIndex].length) {
        setTimeout(() => {
          setDisplayedText(aboutSkills[currentSkillIndex].slice(0, displayedText.length + 1));
        }, 100); // Speed of typing
      } else {
        setTimeout(() => {
          setDeleting(true);
        }, 2000); // Wait time before starting to delete
      }
    }
  }, [displayedText, deleting, currentSkillIndex]);

  return (
    <span className="bg-gradient-to-br from-blue-400 via-purple-700 to-pink-600 text-transparent bg-clip-text font-black text-4xl">
      {displayedText}
    </span>
  );
};

export default AboutSkills;



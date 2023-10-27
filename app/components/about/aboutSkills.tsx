"use client"
import React, { useState, useEffect } from "react";
import { aboutSkills } from "../../data/data";

const AboutSkills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // Function to update the skill index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) =>
        (prevIndex + 1) % aboutSkills.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <span>{aboutSkills[currentSkillIndex]}</span>;
};

export default AboutSkills;

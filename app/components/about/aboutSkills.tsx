"use client"
import React, { useState, useEffect } from "react";
import { aboutSkills } from "../../data/data";
import { Transition } from "@headlessui/react";

const AboutSkills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to update the skill index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) =>
          (prevIndex + 1) % aboutSkills.length
        );
        setVisible(true);
      }, 500); // Adjust the timing here for your desired effect
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Transition
      show={visible}
      as={React.Fragment}
      enter="transition-opacity ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {(ref) => (
        <span
          className="bg-gradient-to-br from-blue-400 via-purple-700 to-pink-600 text-transparent bg-clip-text font-black text-5xl"
          ref={ref}
        >
          {aboutSkills[currentSkillIndex]}
        </span>
      )}
    </Transition>
  );
};

export default AboutSkills;


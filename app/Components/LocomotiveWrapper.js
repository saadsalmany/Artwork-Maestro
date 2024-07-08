'use client'
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";

const LocomotiveWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      // Add other Locomotive Scroll options as needed
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [scrollRef]);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default LocomotiveWrapper;

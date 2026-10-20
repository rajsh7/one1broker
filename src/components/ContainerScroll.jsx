"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * ContainerScroll (Aceternity UI 3D Perspective Card Tilt)
 * Scroll-driven 3D perspective rotation, scale, and header translation
 */
export const ContainerScroll = ({
  titleComponent,
  children,
  className = "",
  containerClassName = "",
  cardClassName = "",
  innerClassName = "",
  height = "h-auto min-h-[30rem] md:min-h-[36rem]",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      className={`py-12 md:py-24 flex items-center justify-center relative px-3 sm:px-6 lg:px-8 ${containerClassName}`}
      ref={containerRef}
    >
      <div
        className={`w-full max-w-6xl relative ${className}`}
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          className={cardClassName}
          innerClassName={innerClassName}
          height={height}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-8 relative z-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  className = "",
  innerClassName = "",
  height = "h-auto min-h-[30rem] md:min-h-[36rem]",
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`max-w-6xl -mt-6 sm:-mt-10 mx-auto ${height} w-full border-4 border-[#6C6C6C] p-2 md:p-5 bg-[#1E293B] rounded-[30px] md:rounded-[36px] shadow-2xl transition-all duration-300 ${className}`}
    >
      <div
        className={`h-full w-full overflow-hidden rounded-2xl bg-white md:rounded-2xl ${innerClassName}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

/**
 * SectionScroll
 * Fluid, non-clipping scroll entrance animation without aggressive 3D perspective
 * which prevents tall sections (like PropertyListings) from being clipped
 */
export const SectionScroll = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center 80%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.95, 1]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative ${className}`}
    >
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContainerScroll;

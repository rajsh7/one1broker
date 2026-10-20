"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DropdownMenu = ({
  label,
  value,
  displayValue,
  options = [],
  onChange,
  Icon,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${isOpen ? "z-[60]" : "z-10"} ${className}`} ref={containerRef}>
      {/* Trigger Button (Pure Glass Filter Field) */}
      <button
        type="button"
        onClick={toggleDropdown}
        className={`w-full bg-white/45 hover:bg-white/60 backdrop-blur-2xl rounded-2xl p-3 sm:p-3.5 flex items-center gap-2.5 transition-all text-left border border-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_4px_16px_rgba(0,0,0,0.03)] cursor-pointer select-none group ${
          isOpen ? "ring-2 ring-[#0066FF]/40 bg-white/65" : ""
        }`}
      >
        {Icon && <span className="text-[#0066FF] shrink-0">{Icon}</span>}
        <div className="flex-1 min-w-0">
          {label && (
            <span className="block text-[10px] uppercase font-bold text-[#475569] tracking-wider mb-0.5">
              {label}
            </span>
          )}
          <span className="block text-xs sm:text-sm font-bold text-[#0F172A] truncate">
            {displayValue || value || "Select"}
          </span>
        </div>

        <motion.span
          className="ml-1 text-[#0F172A]/70 group-hover:text-[#0066FF] shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut", type: "spring" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      {/* Animated Dropdown Menu with High Z-Index and Scroll Protection */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -6, scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -6, scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.35, ease: "circInOut", type: "spring" }}
            className="absolute z-[100] left-0 right-0 mt-2 p-1.5 bg-[#0F172A]/95 text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-3xl border border-white/20 flex flex-col gap-1 max-h-52 overflow-y-auto no-scrollbar"
          >
            {options && options.length > 0 ? (
              options.map((option, index) => {
                const isSelected = value === option.value || value === option.label;
                return (
                  <motion.button
                    type="button"
                    initial={{
                      opacity: 0,
                      x: 8,
                      scale: 0.95,
                      filter: "blur(10px)",
                    }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{
                      opacity: 0,
                      x: 8,
                      scale: 0.95,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.03,
                      ease: "easeInOut",
                      type: "spring",
                    }}
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.16)",
                      transition: {
                        duration: 0.15,
                        ease: "easeInOut",
                      },
                    }}
                    whileTap={{
                      scale: 0.97,
                      transition: {
                        duration: 0.1,
                        ease: "easeInOut",
                      },
                    }}
                    key={option.value || option.label}
                    onClick={() => {
                      if (option.onClick) option.onClick();
                      if (onChange) onChange(option.value !== undefined ? option.value : option.label);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 cursor-pointer text-xs sm:text-sm font-semibold rounded-xl w-full text-left flex items-center justify-between gap-x-2 transition-colors ${
                      isSelected ? "bg-white/20 text-white" : "text-slate-200 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {option.Icon}
                      <span className="truncate">{option.label}</span>
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0"></span>
                    )}
                  </motion.button>
                );
              })
            ) : (
              <div className="px-4 py-2 text-white/70 text-xs">No options</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;

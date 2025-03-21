import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(prevScroll > currentScroll || currentScroll < 10);
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur shadow-md"
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Name with Projection Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/" className="text-xl font-bold tracking-wide">
            Akshay Jegaonkar
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-14 left-0 w-full bg-background border-b shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <NavLinks />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Extracted Navigation Links Component
const NavLinks = () => (
  <>
    {["projects", "experience", "skills", "education", "certifications", "contact"].map((section) => (
      <a
        key={section}
        href={`#${section}`}
        className="transition-colors hover:text-primary relative"
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    ))}
  </>
);

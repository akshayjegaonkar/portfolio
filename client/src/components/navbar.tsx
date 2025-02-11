import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";
import { Menu, X } from "lucide-react"; // Import icons for menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Akshay Jegaonkar</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLinks />
          <ThemeToggle /> {/* Theme Toggle remains in top-right for desktop */}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && isMobile && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLinks />
            <ThemeToggle /> {/* Theme Toggle inside menu for mobile */}
          </div>
        </div>
      )}
    </nav>
  );
}

// Extracted Navigation Links Component for Reusability
const NavLinks = () => (
  <>
    <a href="#projects" className="transition-colors hover:text-primary">
      Projects
    </a>
    <a href="#experience" className="transition-colors hover:text-primary">
      Experience
    </a>
    <a href="#skills" className="transition-colors hover:text-primary">
      Skills
    </a>
    <a href="#education" className="transition-colors hover:text-primary">
      Education
    </a>
    <a href="#certifications" className="transition-colors hover:text-primary">
      Certifications
    </a>
    <a href="#contact" className="transition-colors hover:text-primary">
      Contact
    </a>
  </>
);

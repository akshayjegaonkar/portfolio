import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Portfolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none">
            <nav className="flex items-center space-x-6 text-sm font-medium">
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
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
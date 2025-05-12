
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-event-primary" />
          <Link to="/" className="font-bold text-xl text-event-dark">
            <span className="gradient-text">Event</span>
            Next
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-event-primary transition-colors">
            Home
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-event-primary transition-colors">
            Events
          </Link>
          <Link to="/jobs" className="text-gray-700 hover:text-event-primary transition-colors">
            Jobs
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-event-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/create-event">
            <Button className="bg-event-primary hover:bg-event-secondary text-white">
              Host Event
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-event-primary text-event-primary hover:bg-event-light">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-event-primary py-2 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-event-primary py-2 transition-colors" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-event-primary py-2 transition-colors" onClick={toggleMenu}>
              Jobs
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-event-primary py-2 transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <hr className="my-2" />
            <Link to="/create-event" onClick={toggleMenu}>
              <Button className="w-full bg-event-primary hover:bg-event-secondary text-white">
                Host Event
              </Button>
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" className="w-full border-event-primary text-event-primary hover:bg-event-light">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

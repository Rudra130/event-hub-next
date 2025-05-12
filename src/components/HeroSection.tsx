
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-event-light to-white pt-28 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover & Create Amazing <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find the perfect events to attend or host your own. 
            Connect, learn, and grow with like-minded people.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-md p-1 mb-8">
              <Search className="ml-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for events, jobs, or interests..."
                className="w-full px-4 py-3 rounded-full focus:outline-none"
              />
              <Button className="rounded-full bg-event-primary hover:bg-event-secondary">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events">
              <Button className="btn-event-primary w-full sm:w-auto">
                Explore Events
              </Button>
            </Link>
            <Link to="/create-event">
              <Button variant="outline" className="border-event-primary text-event-primary hover:bg-event-light w-full sm:w-auto">
                Host Your Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full flex justify-between overflow-hidden">
        <svg className="text-event-light/30 w-24 md:w-32 h-auto" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg className="text-event-primary/20 w-40 md:w-64 h-auto" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

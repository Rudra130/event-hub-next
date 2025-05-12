
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import JobListings from "@/components/JobListings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturedEvents />
        
        {/* How it works section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How EventNext Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connecting people through events and opportunities has never been easier
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-event-light h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-event-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Discover Events</h3>
                <p className="text-gray-600">
                  Find events that match your interests, location, and schedule
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-event-light h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-event-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Book Your Spot</h3>
                <p className="text-gray-600">
                  Register for events with just a few clicks and manage your bookings
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-event-light h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-event-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Create & Host</h3>
                <p className="text-gray-600">
                  Create your own events and manage registrations easily
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <JobListings />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-event-primary to-event-tertiary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Event?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Share your passion, build your community, and create memorable experiences
            </p>
            <Link to="/create-event">
              <Button className="bg-white text-event-primary hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, User } from "lucide-react";
import { Event } from "@/types";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Mock data for a single event
const mockEvent: Event = {
  id: "1",
  title: "Tech Conference 2025",
  description: "Join us for the biggest tech conference of the year featuring industry leaders and innovators. This event will bring together experts from around the world to discuss the latest trends in technology, AI, machine learning, and more. Network with professionals, attend workshops, and gain insights into the future of tech.\n\nAttendees will have access to keynote speeches, panel discussions, networking events, and exclusive demonstrations of cutting-edge technologies. Don't miss this opportunity to be part of the tech community's premier annual gathering!",
  date: "June 15, 2025",
  time: "9:00 AM - 5:00 PM",
  location: "San Francisco Convention Center, 123 Tech Blvd, San Francisco, CA",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
  price: 149.99,
  category: "Technology",
  hostId: "host1",
  hostName: "Tech Partners Inc.",
  attendees: 358,
  capacity: 500
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvent; // In a real app, fetch the event using the id
  
  const handleBookNow = () => {
    toast.success("Your spot has been reserved!", {
      description: `You're going to ${event.title}!`
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="relative h-80 md:h-96 lg:h-[500px] w-full">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <Badge className="mb-4 bg-event-primary/80 hover:bg-event-primary">
              {event.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <div className="prose max-w-none text-gray-700">
                  {event.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Host</h2>
                <div className="flex items-center">
                  <div className="bg-event-light rounded-full h-16 w-16 flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-event-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{event.hostName}</h3>
                    <p className="text-gray-600">Event Organizer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="font-bold text-2xl text-event-primary mb-2">
                    {event.price === 0 ? "Free" : `$${event.price}`}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>
                      {event.attendees} attending • {event.capacity - event.attendees} spots left
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="w-full btn-event-primary mb-4"
                  onClick={handleBookNow}
                >
                  Book Your Spot
                </Button>
                
                <Button variant="outline" className="w-full border-event-primary text-event-primary hover:bg-event-light">
                  Save for Later
                </Button>
                
                <hr className="my-6" />
                
                <div className="flex flex-col space-y-3">
                  <h4 className="font-bold text-gray-800">Share This Event</h4>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-event-primary transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-event-primary transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-event-primary transition-colors">
                      <span className="sr-only">Email</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetails;

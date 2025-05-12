
import React from "react";
import { Event } from "@/types";
import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Conference 2025",
    description: "Join us for the biggest tech conference of the year featuring industry leaders and innovators.",
    date: "June 15, 2025",
    time: "9:00 AM",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    price: 149.99,
    category: "Technology",
    hostId: "host1",
    hostName: "Tech Partners Inc.",
    attendees: 358,
    capacity: 500
  },
  {
    id: "2",
    title: "Summer Music Festival",
    description: "A weekend of amazing music performances, food, and fun activities.",
    date: "July 8-10, 2025",
    time: "12:00 PM",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1000",
    price: 89.99,
    category: "Music",
    hostId: "host2",
    hostName: "Festival Productions",
    attendees: 1245,
    capacity: 2000
  },
  {
    id: "3",
    title: "Marketing Workshop",
    description: "Learn the latest marketing strategies to grow your business.",
    date: "May 22, 2025",
    time: "10:00 AM",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000",
    price: 49.99,
    category: "Business",
    hostId: "host3",
    hostName: "Marketing Experts",
    attendees: 89,
    capacity: 100
  },
  {
    id: "4",
    title: "Yoga Retreat",
    description: "A weekend of relaxation, meditation, and yoga in the mountains.",
    date: "August 5-7, 2025",
    time: "8:00 AM",
    location: "Boulder, CO",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=1000",
    price: 299.99,
    category: "Wellness",
    hostId: "host4",
    hostName: "Mind & Body Wellness",
    attendees: 42,
    capacity: 50
  }
];

const FeaturedEvents: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <p className="text-gray-600">Discover the most popular events happening soon</p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-event-primary text-event-primary hover:bg-event-light">
              View All Events
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockEvents.map(event => (
            <div key={event.id} className="animate-fade-in">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;

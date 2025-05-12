
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { Event } from "@/types";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className="event-card block group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-event-primary/80 hover:bg-event-primary">
          {event.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-event-dark group-hover:text-event-primary transition-colors">
          {event.title}
        </h3>
        <div className="flex items-center text-gray-500 mb-2 text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{event.date} • {event.time}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-3 text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            <span>
              {event.attendees}/{event.capacity}
            </span>
          </div>
          <div className="font-bold text-event-primary">
            {event.price === 0 ? "Free" : `$${event.price}`}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

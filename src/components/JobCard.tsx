
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { Job } from "@/types";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link to={`/jobs/${job.id}`} className="event-card block group">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="mr-4">
            <h3 className="font-bold text-lg mb-2 text-event-dark group-hover:text-event-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-2 text-sm">
              {job.company}
            </div>
            <div className="flex items-center text-gray-500 mb-2 text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-500 mb-3 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Posted {job.postedDate}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-event-light text-event-primary border-event-primary">
                {job.type}
              </Badge>
              <Badge variant="outline" className="bg-gray-100 text-gray-700">
                {job.category}
              </Badge>
            </div>
          </div>
          <div className="w-12 h-12 flex-shrink-0">
            <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
          </div>
        </div>
        {job.salary && (
          <div className="mt-3 text-sm font-medium text-gray-700">
            {job.salary}
          </div>
        )}
      </div>
    </Link>
  );
};

export default JobCard;

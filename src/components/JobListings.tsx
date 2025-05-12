
import React from "react";
import { Job } from "@/types";
import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote (US)",
    type: "Full-time",
    category: "Engineering",
    postedDate: "2 days ago",
    logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=200",
    salary: "$120,000 - $150,000"
  },
  {
    id: "2",
    title: "Marketing Intern",
    company: "Growth Media",
    location: "New York, NY",
    type: "Internship",
    category: "Marketing",
    postedDate: "1 week ago",
    logo: "https://images.unsplash.com/photo-1560179304-6fc1d8749b23?auto=format&fit=crop&q=80&w=200",
    salary: "$25/hour"
  },
  {
    id: "3",
    title: "Product Manager",
    company: "InnovateSoft",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Product",
    postedDate: "3 days ago",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200",
    salary: "$130,000 - $160,000"
  }
];

const JobListings: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Jobs & Internships</h2>
            <p className="text-gray-600">Find exciting career opportunities</p>
          </div>
          <Link to="/jobs" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-event-primary text-event-primary hover:bg-event-light">
              Browse All Jobs
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockJobs.map(job => (
            <div key={job.id} className="animate-fade-in">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;

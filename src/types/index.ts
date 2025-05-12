
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: number;
  category: string;
  hostId: string;
  hostName: string;
  attendees: number;
  capacity: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  category: string;
  postedDate: string;
  logo: string;
  salary?: string;
}

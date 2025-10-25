export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description:string;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}
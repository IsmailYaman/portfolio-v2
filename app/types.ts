// types.ts
export interface Project {
    links: any;
    id: number;
    title: string;
    description: { body1: string, body2: string }[]; // Adjust as per your data structure
    tools: {label: string, image: string}[];
    image: string;
  }
  
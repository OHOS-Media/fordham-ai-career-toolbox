import toast from "react-hot-toast";
import Accordion from "../Accordion/Accordion";

const mockBulletPoints = [
  {
    "Senior Frontend Developer | Acme Corp": [
      "Led development of a high-performance React application serving 1M+ users, resulting in 40% faster load times",
      "Implemented responsive design principles and modernized legacy codebase, improving mobile user experience by 60%",
      "Mentored junior developers and established coding standards, reducing bug reports by 35%",
      "Architected and deployed microservices using Node.js and AWS, achieving 99.9% uptime",
      "Collaborated with UX team to implement material design system, increasing user engagement by 25%"
    ]
  },
  {
    "Full Stack Engineer | Tech Innovators": [
      "Developed and maintained RESTful APIs serving 500k+ daily requests with 99.99% reliability",
      "Optimized database queries and implemented caching, reducing response time by 65%",
      "Built automated testing pipeline that caught 90% of bugs before production",
      "Integrated third-party payment systems processing $10M+ in transactions monthly",
      "Led migration from monolithic to microservices architecture, improving scalability"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },{
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },
  {
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  },{
    "Software Developer | StartUp Solutions": [
      "Created custom React components library used across 12 different projects",
      "Implemented real-time data synchronization using WebSocket, reducing latency by 80%",
      "Developed CI/CD pipeline using GitHub Actions, cutting deployment time by 70%",
      "Built analytics dashboard tracking KPIs for 100+ metrics in real-time",
      "Optimized webpack configuration, reducing bundle size by 45%"
    ]
  }
];

// This renders Step 4 of the Toolbox which displays the AI reccomended resume bullet points
export default function ToolboxStep4({ bulletPoints }) {
  // Transform bulletPoints data for the Accordion
  const accordionData = mockBulletPoints.map(job => {
    const [title, points] = Object.entries(job)[0];
    return {
      title,
      bulletPoints: points
    };
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="bg-fordham-brown flex flex-col gap-4 h-full">
      <Accordion
        data={accordionData}
        variant="toolbox"
        onCopy={handleCopy}
      />
    </div>
  );
}


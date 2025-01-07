import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <Shield className="h-16 w-16 text-primary-500 animate-bounce" />
        <h1 className="text-6xl font-bold text-primary-500">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-400">
          A showcase of my projects, visions, and expertise.
        </p>
        <a
          href="/projects"
          className="mt-6 px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-all duration-300"
        >
          Explore My Projects
        </a>
      </div>
    </div>
  );
}

import { CogIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Nexus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-primary-500 text-white p-12">
      <Link href="/projects" className="text-primary-500 hover:text-primary-600 mb-8 inline-block">
  ← Back to Projects
</Link>

      <h1 className="text-4xl font-bold text-primary-500 mb-8 flex items-center">
        <CogIcon className="h-10 w-10 text-primary-500 mr-4" /> Nexus
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Overview</h2>
        <p className="text-lg text-gray-400">
          Nexus is a digital and physical innovation hub that provides access to tools like 3D printing, VR/AR, robotics, and public service assistance.
        </p>
      </section>
    </div>
  );
}

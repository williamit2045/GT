import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Memeplex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-primary-500 text-white p-12">
      <Link href="/projects" className="text-primary-500 hover:text-primary-600 mb-8 inline-block">
  ← Back to Projects
</Link>

      <h1 className="text-4xl font-bold text-primary-500 mb-8 flex items-center">
        <LightBulbIcon className="h-10 w-10 text-primary-500 mr-4" /> Memeplex
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Overview</h2>
        <p className="text-lg text-gray-400">
          Memeplex is a relational knowledge blog platform designed to transform passive reading into active learning by creating connections between ideas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Content categorization and tagging</li>
          <li>Knowledge mapping and exploration</li>
          <li>Community engagement tools</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Development Roadmap</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Alpha: Basic content categorization and tagging</li>
          <li>Beta: Advanced knowledge mapping tools</li>
          <li>Public Launch: Full knowledge blog platform</li>
        </ul>
      </section>
    </div>
  );
}

import { GlobeAltIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Globethoughts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-primary-500 text-white p-12">
      <Link href="/projects" className="text-primary-500 hover:text-primary-600 mb-8 inline-block">
  ← Back to Projects
</Link>

      <h1 className="text-4xl font-bold text-primary-500 mb-8 flex items-center">
        <GlobeAltIcon className="h-10 w-10 text-primary-500 mr-4" /> Globethoughts
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Overview</h2>
        <p className="text-lg text-gray-400">
        Globethoughts enables communities to become functionally self-aware as communities, through individual's anonymously joining "cohorts" they feel represent them, which in turn represent each other as the voices of each other, through their shared users, creating an emergent reflection of the whole for individuals to see. These cohorts are self naming, self describing strings of text which represent real users ,and come to represent each other, making a reflection of the total for individual to know they are a part of greater wholes.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Anonymous cohort creation and joining</li>
          <li>Dynamic sorting and filtering of cohorts</li>
          <li>Social insight generation and sharing</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Development Roadmap</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Alpha: Basic cohort creation and joining</li>
          <li>Beta: Enhanced search and engagement tools</li>
          <li>Public Launch: Full platform with social insights</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Goals</h2>
        <p className="text-lg text-gray-400">
          Globethoughts aims to improve community cooperation, foster social justice, and enhance individual freedom through collective understanding.
        </p>
      </section>
    </div>
  );
}

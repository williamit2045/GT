import { ShieldCheckIcon, BriefcaseIcon, AcademicCapIcon, LightBulbIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-primary-500 text-white p-12">
      <h1 className="text-4xl font-bold text-primary-500 mb-8">About Me</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Professional Background</h2>
        <p className="text-lg text-gray-400">
          I am a technical visionary with a strong focus on collective intelligence, cultural development, and veteran empowerment. My work spans multiple disciplines, including web development, psychology, philosophy, and innovation systems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Areas of Expertise</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Web Development (React, Next.js, Tailwind CSS)</li>
          <li>Collective Intelligence and Social Insights</li>
          <li>Visual-Spatial Reasoning and Design</li>
          <li>Veteran Entrepreneurship and Innovation</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Education</h2>
        <div className="flex items-start space-x-4">
          <AcademicCapIcon className="h-8 w-8 text-primary-500" />
          <div>
            <h3 className="text-xl font-semibold">UCSD - Bachelor of Arts in Psychology</h3>
            <p className="text-gray-400">Focus on Cognitive Science, Consciousness, and Philosophy of Mind.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Professional Experience</h2>
        <div className="flex items-start space-x-4">
          <BriefcaseIcon className="h-8 w-8 text-primary-500" />
          <div>
            <h3 className="text-xl font-semibold">US Navy (2003-2007)</h3>
            <p className="text-gray-400">Honorable Discharge. International assignments across Japan, Bahrain, and South Korea.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mt-6">
          <ShieldCheckIcon className="h-8 w-8 text-primary-500" />
          <div>
            <h3 className="text-xl font-semibold">TEDx Conference Organizer (2012)</h3>
            <p className="text-gray-400">Organized a TEDx event at UCSD focused on humanity's future and innovation.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Creative Works</h2>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img src={`/api/placeholder/400/400`} alt={`Artwork ${item}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <a href="/" className="inline-block text-primary-500 hover:text-primary-600">
        Go Back Home
      </a>
    </div>
  );
}

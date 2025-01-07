import ProjectCard from "../components/ProjectCard";
import { GlobeAltIcon, LightBulbIcon, ShoppingCartIcon, CogIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const projects = [
    {
      title: "Globethoughts",
      description:
        "A collective-intelligence network fostering social insight and cooperation. Users anonymously endorse cohorts representing shared identities, creating emergent group self-awareness.",
      Icon: GlobeAltIcon,
      status: "Flagship Project",
      color: "text-blue-400",
      link: "/projects/globethoughts",
    },
    {
      title: "Memeplex",
      description:
        "A relational knowledge blog platform for creating, categorizing, and exploring ideas. Memeplex transforms passive content consumption into active learning.",
      Icon: LightBulbIcon,
      status: "In Development",
      color: "text-red-400",
      link: "/projects/memeplex",
    },
    {
      title: "Apex",
      description:
        "An online marketplace connecting creative veterans with tools for product design, showcasing handmade gear, selling novelty items, and discovering clients for collaborations.",
      Icon: ShoppingCartIcon,
      status: "Coming Soon",
      color: "text-blue-400",
      link: "/projects/apex",
    },
    {
      title: "Nexus",
      description:
        "A digital and physical innovation hub supporting veteran entrepreneurship. Nexus provides access to tools like 3D printing, VR/AR, robotics, classes, and public service assistance to help veterans transition from following orders to leading their own ventures.",
      Icon: CogIcon,
      status: "In Planning",
      color: "text-red-400",
      link: "/projects/nexus",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-primary-500 text-white p-12">
      <h1 className="text-4xl font-bold text-primary-500 mb-8">Veteran-First Projects</h1>
      <p className="text-lg text-gray-400 mb-12">
        This portfolio is built with veterans in mind, inviting them to be the first to experiment with and benefit from these innovative platforms.
      </p>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <a href="/" className="mt-12 inline-block text-primary-500 hover:text-primary-600">
        Go Back Home
      </a>
    </div>
  );
}

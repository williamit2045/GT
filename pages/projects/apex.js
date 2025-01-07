import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Apex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-primary-500 text-white p-12">
      <Link href="/projects" className="text-primary-500 hover:text-primary-600 mb-8 inline-block">
  ← Back to Projects
</Link>

      <h1 className="text-4xl font-bold text-primary-500 mb-8 flex items-center">
        <ShoppingCartIcon className="h-10 w-10 text-primary-500 mr-4" /> Apex
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Overview</h2>
        <p className="text-lg text-gray-400">
          Apex is an online marketplace that connects creative veterans with tools for product design and showcases handmade gear for sale.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Product design tools</li>
          <li>Showcase handmade gear</li>
          <li>Client collaboration services</li>
        </ul>
      </section>
    </div>
  );
}

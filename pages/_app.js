import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-black p-4 flex justify-center space-x-4">
      <Link href="/" className="text-white hover:text-primary-500">Home</Link>

      <Link href="/about" className="text-white hover:text-primary-500">About</Link>
<Link href="/projects" className="text-white hover:text-primary-500">Projects</Link>

      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


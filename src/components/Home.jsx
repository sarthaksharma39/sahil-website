"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-blue-900 text-white text-center">
        <div className="flex flex-row justify-center items-center">
          <div>
            <Image src="/sahil_image.jpg" className="rounded-2xl" alt="Student Image" width={350} height={450} />
          </div>
          <div className="ml-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Sahil Sharma</h1>
            <p className="text-lg md:text-2xl mb-8">A Curious Pharmaceutical Student</p>
            <Link href="#about" className="px-6 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-200 transition">
              Get to Know Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-8 md:px-20 min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-[80px] font-bold text-center mb-6">About Me</h2>
        <p className="text-center max-w-2xl mx-auto text-xl">
          I&apos;m currently studying pharmaceutical sciences and have a keen interest in understanding the world of medicine and healthcare. My journey is all about learning and exploring different facets of pharmacology, and I am excited about the impact of modern science on improving lives. I&apos;m always eager to connect with others in the field and exchange knowledge!
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen justify-center items-center py-20 px-8 md:px-20bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Research on Drug Interactions</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A small study focused on understanding common drug interactions and their effects on patient health. This project helped me build a foundation in pharmacology research.
            </p>
            <Link href="#" className="mt-4 inline-block text-teal-500 hover:underline">View Details</Link>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Medicine Inventory App Concept</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developed an app concept for tracking medicine inventories in small clinics. This project was my first dive into tech solutions for healthcare.
            </p>
            <Link href="#" className="mt-4 inline-block text-teal-500 hover:underline">View Details</Link>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Public Health Awareness Campaign</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Collaborated on a campaign to promote awareness about common health conditions and preventive care, aiming to inform the community about making healthier choices.
            </p>
            <Link href="#" className="mt-4 inline-block text-teal-500 hover:underline">View Details</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 md:px-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Connect with Me</h2>
        <p className="text-center mb-6">I&apos;m open to discussions on pharmaceuticals, healthcare, or just a friendly conversation. Feel free to reach out!</p>
        <div className="flex flex-row justify-center items-center space-x-4">
          <Link href="mailto:sahilsharma98552@gmail.com" className="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition">
            Email
          </Link>
          <Link href="https://www.facebook.com/share/MVrNt1dD7uZM59eF/" className="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition">
            Facebook
          </Link>
          <Link href="https://www.instagram.com/its_sahilsharma_01?igsh=Y3pyOXp1cTNncTk4" className="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition">
            Instagram
          </Link>
        </div>
      </section>
    </main>
  );
}

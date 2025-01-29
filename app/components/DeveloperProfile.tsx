import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function DeveloperProfile() {
  return (
    <section className="bg-gradient-to-r from-[#00988d] to-[#2c6b74] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://storage.rxresu.me/clp9fy7vb98iw9huni1lrshme/pictures/clp9fy7vb98iw9huni1lrshme.jpg"
            alt="Developer Profile"
            width={400}
            height={400}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Emanuel Santana</h1>
          <div className="text-xl mb-6">
            <p className="pb-2 text-2xl font-semibold">
              Full-Stack Developer | 8+ Years of Experience
            </p>
            <p>
            Experienced in building scalable, high-performance web applications with React, Node.js, and TypeScript. I also have strong expertise in cloud technologies and databases, including AWS and MySQL.
            </p>
            <p className="mt-3">Let’s create something amazing! 🚀</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link
              href="https://github.com/esantana21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/esantana21/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
          <Link
            href="https://storage.rxresu.me/clp9fy7vb98iw9huni1lrshme/resumes/emanuel-santana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

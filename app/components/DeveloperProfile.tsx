import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export function DeveloperProfile() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Developer Profile"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Juan Pérez</h1>
          <p className="text-xl mb-6">
            Desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables. Con experiencia en
            React, Node.js y bases de datos NoSQL.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </Link>
          </div>
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Ver CV
          </Link>
        </div>
      </div>
    </section>
  )
}


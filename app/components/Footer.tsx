import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaG } from "react-icons/fa6";

const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-url";
const githubUrl = "https://www.github.com/your-github-url";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-center space-x-4">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaLinkedin color={"#ffffff"} />
            <div className={"ml-2"}>LinkedIn</div>
          </div>
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaGithub color={"#ffffff"} />
            <div className={"ml-2"}>Github</div>
          </div>
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center text-sm mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Laura
      </div>
    </footer>
  );
}

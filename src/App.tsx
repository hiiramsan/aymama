import Particles from "./components/Particles/Particles";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import AvailableBadge from "./components/AvailableBadge/AvailableBadge";
import {
  MapPin,
  Instagram,
  Github,
  Linkedin,
  School,
  AppWindow,
} from "lucide-react";
import Timeline from "./components/Timeline/Timeline";
import { JavaScript, Nodejs, CSS, Expressjs, HTML5, MongoDB } from "./components/icons/icons";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Presentation Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg mt-8 w-full md:w-2/4 flex flex-col md:flex-row">
          {/* My cute face */}
          <img
            src="https://github.com/hiiramsan.png"
            className="rounded-lg mb-4 md:mb-0 md:mr-4 w-32 h-32 md:w-48 md:h-48"
          ></img>
          {/* Info at the right */}
          <div>
            <div className="flex justify-between items-center">
              <AvailableBadge />
              <div id="socials" className="flex space-x-2">
                <a
                  href="https://instagram.com/hiiramsan"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-2 rounded-lg border border-gray-700 shadow-lg"
                >
                  <Instagram color="rgba(209, 213, 219)" />
                </a>
                <a
                  href="https://github.com/hiiramsan"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-2 rounded-lg border border-gray-700 shadow-lg"
                >
                  <Github color="rgba(209, 213, 219)" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hiiramsan/"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-2 rounded-lg border border-gray-700 shadow-lg"
                >
                  <Linkedin color="rgba(209, 213, 219)" />
                </a>
              </div>
            </div>

            <DecryptedText
              className="text-2xl font-bold text-white"
              text="Hey, I'm Hiram Sánchez"
              animateOn="view"
              revealDirection="start"
              style={{ color: "white", marginBottom: "0.5rem" }}
              sequential={true}
            />
            <p className="text-gray-300 text-sm">
              A Software Engineer student at ITSON. I am on a journey to become
              a competent full-stack developer. My goal is to create efficient,
              scalable and easy to use applications that can make a difference.
            </p>
            <div className="flex mt-2 justify-start items-center">
              <MapPin color="rgba(209, 213, 219)" size={18} className="mr-1" />
              <p className="text-gray-300 text-md">Mexico</p>
            </div>
          </div>
        </div>
        {/* Education Timeline */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg mt-8 w-full md:w-2/4 flex flex-col">
          <div className="flex mb-2 space-x-4 item-center">
            <School color="white" />
            <h1 className="text-xl text-white font-bold mb-2">Education</h1>
          </div>
          <Timeline
            events={[
              {
                name: "Instituto Tecnologico de Sonora",
                date: "2022 - Present",
                description:
                  "Since 2022 I've been pursuing a Software Engineer degree. I will graduate in 2026! 🎉",
              },
              {
                name: "Self-taught (Programming)",
                date: "2020 - 2022",
                description:
                  "In 2020 I started learning web development on my own learning HTML, CSS and Javascript 👨‍💻",
              },
            ]}
          />
        </div>
        {/* Projects */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg mt-8 w-full md:w-2/4 flex flex-col">
          <div className="flex mb-6 space-x-4 items-center">
            <AppWindow color="white" />
            <h1 className="text-xl text-white font-bold">Projects</h1>
          </div>
          {/* Projects */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <a
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-lg flex flex-col transition-transform transform duration-300 ease-in-out hover:scale-105 hover:border-slate-500 hover:shadow-lg hover:shadow-indigo-500/30"
              href="https://flashy-v2.vercel.app"
              target="_blank"
            >
              <img
              src="/flashy.png"
              alt="Flashy"
              className="w-full h-[180px] object-cover rounded-t-lg"
              />
              <p className="text-md text-white ml-4 mt-4 font-semibold">
              Flashy
              </p>
              <p className="text-md text-gray-300 ml-4 mb-2 font-light">
              A simple flashcard app
              </p>
              <div className="flex justify-start items-center ml-4 mb-4 space-x-2">
              <Nodejs className="size-6"/>
              <JavaScript className="size-6" />
              <CSS className="size-6" />
              <Expressjs className="size-6" />
              <HTML5 className="size-6" />
              <MongoDB className="size-6" />
              </div>
            </a>

            <a
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-lg flex flex-col transition-transform transform duration-300 ease-in-out hover:scale-105 hover:border-slate-500 hover:shadow-lg hover:shadow-indigo-500/30"
              href="https://hiiramsan-wordle.vercel.app/"
              target="_blank"
            >
              <img
                src="/wordle.png"
                alt="Wordle"
                className="w-full h-[180px] object-cover rounded-t-lg"
              />
              <p className="text-md text-white ml-4 mt-4 font-semibold">
                Wordle
              </p>
              <p className="text-md text-gray-300 ml-4 mb-2 font-light">
                Wordle dumb clone (My first project)
              </p>
              <div className="flex justify-start items-center ml-4 mb-4 space-x-2">
                <JavaScript className="size-6" />
                <CSS className="size-6" />
                <HTML5 className="size-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

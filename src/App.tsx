import Particles from "./components/Particles/Particles";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import AvailableBadge from "./components/AvailableBadge/AvailableBadge";
import { MapPin, Instagram, Github, Linkedin, School, AppWindow } from "lucide-react";
import Timeline from "./components/Timeline/Timeline";

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
            <School
              color="white"
            />
            <h1 className="text-xl text-white font-bold mb-2">Education</h1>
          </div>
          <Timeline 
            events={[
              {
                name: "Instituto Tecnologico de Sonora",
                date: "2022 - Present",
                description: "Since 2022 I've been pursuing a Software Engineer degree. I will graduate in 2026! 🎉"
              },
              {
                name: "Self-taught (Programming)",
                date: "2020 - 2022",
                description: "In 2020 I started learning web development on my own learning HTML, CSS and Javascript 👨‍💻"
              }
            ]}
          />
        </div>
        {/* Projects */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg mt-8 w-full md:w-2/4 flex flex-col">
          <div className="flex mb-6 space-x-4 items-center">
            <AppWindow
              color="white"
            />
            <h1 className="text-xl text-white font-bold">Projects</h1>
          </div>
          {/* Projects */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-amber-300"></div>
            <div className="p-8 bg-amber-300"></div>
            <div className="p-8 bg-amber-300"></div>
            <div className="p-8 bg-amber-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

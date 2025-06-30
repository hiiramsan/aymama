import Particles from "./components/Particles/Particles";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import AvailableBadge from "./components/AvailableBadge/AvailableBadge";
import {
  MapPin,
  Instagram,
  Github,
  Linkedin,
  AppWindow,
  GraduationCap,
  Stars,
} from "lucide-react";
import Timeline from "./components/Timeline/Timeline";
import {
  JavaScript,
  Nodejs,
  CSS,
  Expressjs,
  HTML5,
  MongoDB,
} from "./components/icons/icons";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

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
            src="me.jpg"
            className="rounded-lg mb-4 md:mb-0 md:mr-4 w-32 h-32 md:w-48 md:h-48 border border-gray-700"
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
            <GraduationCap color="white" />
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
        
        {/* Posts/Achievements */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg mt-8 w-full md:w-2/4 flex flex-col">
          <div className="flex mb-6 space-x-4 items-center">
            <Stars color="white" />
            <h1 className="text-xl text-white font-bold">Activities</h1>
          </div>
          
          {/* Post Item */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg border border-gray-600 shadow-lg overflow-hidden">
            {/* Post Image */}
            <img
              src="/JII.JPG"
              alt="Hackathon Victory"
              className="w-full h-[400px] object-cover"
            />
            
            {/* Post Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">
                🏆 Won First Place at JII 2025!
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Had the opportunity to be part of the winning team of Jovenes Impulsando la Industria's IT challenge: Development of an application for the management of activities, performance and task assignment in the operations area.
              </p>
              
              {/* Post Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400 text-xs">
                  <span>June 2025</span>
                  <span>•</span>
                  <span>Achievement</span>
                </div>
              </div>
            </div>
          </div>
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
                <Nodejs className="size-6" />
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

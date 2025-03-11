import Particles from "./components/Particles/Particles";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import AvailableBadge from "./components/AvailableBadge/AvailableBadge"; // Import the new component

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
        {/* Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg mt-8 w-2/4 flex flex-row">
          <img
            src="https://unavatar.io/hiiramsan"
            className="rounded-lg mr-4 w-32 h-32"
          ></img>
          <div>
          <AvailableBadge />
            <DecryptedText
              className="text-2xl font-bold text-white"
              text="Hey, I'm Hiram Sánchez"
              animateOn="view"
              revealDirection="start"
              style={{ color: "white", marginBottom: "0.5rem" }}
              sequential={true}
            />
            <p className="text-gray-300">
              A Software Engineer student at ITSON. I am on a journey to become
              a competent full-stack developer. My goal is to create efficient,
              scalable and easy to use applications that can make a difference.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

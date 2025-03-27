const Project = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-lg mt-0 w-full md:w-3/4 flex flex-col">
      <img
        src="/flashy.png"
        alt="Flashy"
        className="w-full object-cover rounded-t-lg"
      />
      <p className="text-md text-white ml-4 mt-4 font-semibold">
        Flashy
      </p>
        <p className="text-md text-gray-300 ml-4 mb-2 font-light">
            A simple flashcard app
        </p>
        <div className="flex justify-start items-center ml-4 mb-4 space-x-4">
            <img
            src="/nodejs.svg"
            alt="NodeJS"
            className="w-8 h-8"
            />
        </div>
    </div>
  );
};

export default Project;

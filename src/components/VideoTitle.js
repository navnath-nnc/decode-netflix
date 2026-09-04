const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-linear-to-r from-black">
      <h1 className=" text-xl md:text-6xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button className="bg-white text-black rounded-md py-1 px-3 mt-3 md:m-0 md:py-4 md:px-8 text-xl hover:opacity-50">
          ▶️Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white text-xl bg-opacity-50 rounded-md py-4 px-8 hover:opacity-50">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

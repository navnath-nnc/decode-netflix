const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button className="bg-white text-black rounded-md p-4 text-xl hover:opacity-50">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500 text-white text-xl bg-opacity-50 rounded-md p-4 hover:opacity-50">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

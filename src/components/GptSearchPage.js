import { BG_URL } from "../utils/constants";
import GptMovieSuggessions from "./GptMovieSuggessions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="backGroundIamge" />
      </div>
      <GptSearchBar />
      <GptMovieSuggessions />
    </div>
  );
};

export default GptSearchPage;

import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import ai from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const langKey = useSelector((sotre) => sotre.config.lang);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleSearch = async () => {
    console.log(searchText.current.value);
    const aiQuery =
      "Act as movie Recommendation system and a suggestfor some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like example given ahead. Example, Sholay, DDLJ, Phir Hera Pheri, Dhamal, Padosan";

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: aiQuery,
    });
    const aiMovies = response?.text.split(",");
    console.log("aiMovies", aiMovies);

    const promiseArray = aiMovies.map((movie) => searchMovieInTMDB(movie));
    const TMDBResults = await Promise.all(promiseArray);
    console.log(TMDBResults);
    dispatch(
      addGptMovieResult({ movieNames: aiMovies, movieResults: TMDBResults }),
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

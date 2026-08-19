import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value, password.current.value);

    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
  };

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backGroundIamge"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="py-2 text-red-700 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 rounded-lg w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSingInForm}>
          {isSignInFrom
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

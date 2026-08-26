import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((eorror) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign up / sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // sign out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsunscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex absolute px-8 py-2 w-screen bg-linear-to-b from-black z-10 justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="h-12 w-12 rounded-lg"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactGA from "react-ga";
import Annonces from "../components/Annonces/Annonces";

const Home = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [popupDiscussions, setPopupDiscussions] = useState(false);
  const [popupGain, setPopupGain] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const openIsPosting = () => {
    setIsPosting(true);
  };

  const closeIsPosting = () => {
    setIsPosting(false);
  };

  const openDiscussions = () => {
    setPopupDiscussions(true);
  };

  const closeDiscussions = () => {
    setPopupDiscussions(false);
  };

  const openGain = () => {
    setPopupGain(true);
  };

  const closeGain = () => {
    setPopupGain(false);
  };

  return (
    <div>
      <div className="logged-user">
        <Navbar
          openIsPosting={openIsPosting}
          openDiscussions={openDiscussions}
          openGain={openGain}
        />
        <Annonces
          isPosting={isPosting}
          closeIsPosting={closeIsPosting}
          popupDiscussions={popupDiscussions}
          closeDiscussions={closeDiscussions}
          popupGain={popupGain}
          closeGain={closeGain}
        />
      </div>
    </div>
  );
};

export default Home;

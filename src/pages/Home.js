import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactGA from "react-ga";
import Annonces from "../components/Annonces/Annonces";
import { useSelector } from "react-redux";

const Home = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [popupDiscussions, setPopupDiscussions] = useState(false);
  const [popupGain, setPopupGain] = useState(false);
  const [loading, setLoading] = useState(true);
  const annoncesData = useSelector((state) => state.annoncesReducer);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    annoncesData[1] && setLoading(false);
  }, [loading, annoncesData]);

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
        {loading ? (
          <main style={{ width: "100%" }}>
            <div
              className="loading-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <p>Chargement des annonces</p>
              <div>
                {" "}
                <i className="fas fa-spinner fa-spin loading"></i>
              </div>
            </div>
          </main>
        ) : (
          <Annonces
            isPosting={isPosting}
            closeIsPosting={closeIsPosting}
            popupDiscussions={popupDiscussions}
            closeDiscussions={closeDiscussions}
            popupGain={popupGain}
            closeGain={closeGain}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

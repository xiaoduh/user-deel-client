import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Logout from "./Log/Logout";

const Header = () => {
  const uid = useContext(UidContext);
  return (
    <>
      <header>
        <h2>Deel</h2>
        <div className="icon">{uid ? <Logout /> : <></>}</div>
      </header>
    </>
  );
};

export default Header;

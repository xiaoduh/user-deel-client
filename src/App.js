import { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import ReactGA from "react-ga";

ReactGA.initialize("G-PX6V2GRHT5");

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    if (uid !== "notoken") {
      const fetchToken = async () => {
        await axios({
          method: "get",
          url: `https://deeel-v0-test.onrender.com/jwtid`,
          withCredentials: true,
        })
          .then((res) => {
            setUid(res.data.user._id);
          })
          .catch((err) => console.log("No token"));
      };
      fetchToken();
    }

    if (uid) dispatch(getUser(uid));
  }, [dispatch, uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;

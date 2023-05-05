import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const EmailVerificator = () => {
  const param = useParams();
  const [validUrl, setValidUrl] = useState(null);

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        await axios({
          method: "get",
          url: `https://deeel-v0-test.onrender.com/api/user/${param.id}/verify/${param.token}`,
        }).then((res) => {
          setValidUrl(true);
        });
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {" "}
      {validUrl ? (
        <div className="connection-form">
          <div className="form-container">
            <div className="validation-message">
              <img src="/succes.svg" alt="register-completed" />
              <div className="register-confirmation-content">
                <h4>
                  Email <span className="success">validé</span>.
                </h4>
              </div>
              <NavLink to="/marketplace">
                <button>Se connecter</button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="connection-form">
          <div className="form-container">
            <div className="validation-message">
              <img src="/failed.svg" alt="register-completed" />
              <div className="register-confirmation-content">
                <h4>
                  <span className="error">Impossible de valider </span> votre
                  Email
                </h4>
              </div>
              <NavLink to="/marketplace">
                <button>Retour</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailVerificator;

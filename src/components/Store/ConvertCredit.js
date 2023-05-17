import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, withDraw } from "../../actions/user.actions";

const ConvertCredit = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleWithdraw = async (e) => {
    const formMess = document.querySelector(".form-message");
    if (amount > 0 && user.solde > 0)
      try {
        e.preventDefault();
        console.log("retrait: " + amount);
        setLoading(true);
        const formMess = document.querySelector(".form-message");
        await dispatch(withDraw(user._id, amount));
        await dispatch(getUser(user._id));
        setLoading(false);
        formMess.innerHTML = `<p class='success'>Votre demande de retrait à bien été prise en compte. Vous recevrez votre virement dans les prochains jours.</p>`;

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 4500);
      } catch (error) {
        console.log(error);
      }
    else
      formMess.innerHTML = `<p class='error'>Votre demande de retrait n'a pas pu aboutir.</p>`;
    setTimeout(() => {
      formMess.innerHTML = "";
    }, 4500);
  };
  return (
    <main>
      <div className="grid-form-need">
        <div className="title-container" style={{ marginBottom: "2rem" }}>
          <h3>Transferer vos gains sur votre compte</h3>
          <p>Faites une demande de virement sur votre compte bancaire.</p>
        </div>
        <>
          <div className="left-side">
            <h3>
              Votre cagnotte s'éleve à
              <span style={{ color: "#109CF1" }}> {user.solde}</span> €
            </h3>
            {/* <input
              type="number"
              id="amount-digit"
              min={0}
              max={user.solde}
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              style={{
                width: "auto",
                padding: "10px",
                fontWeight: "bold",
                fontSize: "2rem",
                border: "1px solid #109CF1",
                borderRadius: "10px",
                cursor: "pointer",
                color: "#334D6E",
              }}
            /> */}
            <input
              type="range"
              id="amount"
              min={0}
              max={user.solde}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                cursor: "pointer",
              }}
            />
            <div className="amount-container">
              <h3>
                Votre demande de retrait s'éleve à
                <span style={{ color: "#109CF1" }}> {amount}</span> €
              </h3>
            </div>
            <div className="form-message"></div>
          </div>
          <div></div>
          <div className="btn-container">
            <button onClick={(e) => handleWithdraw(e)}>
              {loading ? (
                <>
                  <>
                    Chargement... <i className="fas fa-spinner fa-spin"></i>
                  </>{" "}
                </>
              ) : (
                <p>Valider ma demande de virement</p>
              )}
            </button>
          </div>
        </>
      </div>
    </main>
  );
};

export default ConvertCredit;

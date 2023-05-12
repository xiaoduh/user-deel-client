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
    if (amount > 0)
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
          <h3>Transferer votre solde sur votre compte</h3>
          <p>
            Convertissez vos crédits en € et faites une demande de virement sur
            votre compte bancaire.
          </p>
        </div>
        <>
          <div className="left-side">
            <h3>
              Vous avez
              <span style={{ color: "#109CF1" }}> {user.coin}</span> crédits
              soit une somme totale de{" "}
              <span style={{ color: "#109CF1" }}>{user.coin * 12.5}</span> €
            </h3>
            <p>Choisissez le nombre de crédit à convertir</p>
            <div
              className="input-amount"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="number"
                id="amount-digit"
                min={0}
                max={user.coin}
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
              />
              <input
                type="range"
                id="amount"
                min={0}
                max={user.coin}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="amount-container">
              <h2>
                <span style={{ color: "#2ED47A" }}>{amount}</span> crédits,
                <span> soit un montant net de </span>{" "}
                <span style={{ color: "#2ED47A" }}>{amount * 12.5}</span> €
              </h2>
            </div>
            <div className="form-message"></div>
          </div>
          <div></div>
          <div className="btn-container">
            <button onClick={(e) => handleWithdraw(e)}>
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
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

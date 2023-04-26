import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PopupDeleteLead = ({ closePopupDel, contactToDel }) => {
  const [lookingFor, setLookingFor] = useState(contactToDel.lookingFor);
  const [company, setCompany] = useState(contactToDel.company);
  const [sector, setSector] = useState(contactToDel.sector);
  const [region, setRegion] = useState(contactToDel.region);
  const [skill, setSkill] = useState(contactToDel.skill);
  const [firstName, setFirstName] = useState(contactToDel.first_name);
  const [lastName, setLastName] = useState(contactToDel.last_name);
  const [position, setPosition] = useState(contactToDel.role);
  const [email, setEmail] = useState(contactToDel.email);
  const [phone, setPhone] = useState(contactToDel.phone);
  const dispatch = useDispatch();

  const handleDelete = () => {};

  return (
    <div className="popup">
      <div className="modal" id="edit-contact">
        <h3>
          Supprimer l'apport d'affaire n°
          <span style={{ color: "#109CF1" }}>{contactToDel._id}</span>
        </h3>
        <>
          <div className="left-side">
            <h3>Informations sur l' affaire</h3>
            <label
              style={{ color: "#109CF1" }}
              htmlFor="besoin"
              class="form__label"
            >
              Profil recherché
            </label>
            <br />
            <input
              class="form__field profil-required"
              type="text"
              name="besoin"
              id="besoin"
              autocomplete="off"
              required
              onChange={(e) => setLookingFor(e.target.value)}
              placeholder="Développeur React"
              defaultValue={contactToDel.lookingFor}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="company"
              class="form__label"
            >
              Entreprise
            </label>
            <br />
            <input
              class="form__field company-required"
              type="text"
              name="company"
              id="company"
              autocomplete="off"
              required
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Google"
              defaultValue={contactToDel.company}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="sector"
              class="form__label"
            >
              Secteur
            </label>
            <br />
            <input
              class="form__field sector-required"
              type="text"
              name="sector"
              id="sector"
              autocomplete="off"
              required
              onChange={(e) => setSector(e.target.value)}
              placeholder="Internet"
              defaultValue={contactToDel.sector}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="sector"
              class="form__label"
            >
              Département (géographique)
            </label>
            <br />
            <input
              class="form__field region-required"
              type="text"
              name="region"
              id="region"
              autocomplete="off"
              required
              onChange={(e) => setRegion(e.target.value)}
              placeholder="75"
              defaultValue={contactToDel.region}
              readOnly={true}
            />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="skills"
              class="form__label"
            >
              Compétences
            </label>
            <br />
            <input
              class="form__field skill-required"
              type="text"
              name="skills"
              id="skills"
              autocomplete="off"
              required
              onChange={(e) => setSkill(e.target.value)}
              placeholder="React, Redux, SASS..."
              defaultValue={contactToDel.skills}
              readOnly={true}
            />
          </div>
          <div className="right-side">
            <h3>Informations sur le demandeur</h3>
            <p>
              <img
                style={{ widht: "20px", height: "20px" }}
                src="/important.svg"
                alt="important"
              />{" "}
              ce sont les données les plus importantes.
            </p>{" "}
            <label
              style={{ color: "#109CF1" }}
              htmlFor="last_name"
              class="form__label"
            >
              Nom
            </label>
            <br />
            <input
              class="form__field"
              type="text"
              name="last_name"
              id="last_name"
              autocomplete="off"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Duff"
              defaultValue={contactToDel.last_name}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="first_name"
              class="form__label"
            >
              Prénom
            </label>
            <br />
            <input
              class="form__field"
              type="text"
              name="first_name"
              id="first_name"
              autocomplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              defaultValue={contactToDel.first_name}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="role"
              class="form__label"
            >
              Rôle
            </label>
            <br />
            <input
              class="form__field"
              type="text"
              name="role"
              id="role"
              autocomplete="off"
              onChange={(e) => setPosition(e.target.value)}
              placeholder="VP of Engineering"
              defaultValue={contactToDel.role}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="email"
              class="form__label"
            >
              Email
            </label>
            <br />
            <input
              class="form__field"
              type="email"
              name="email"
              id="email"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.duff@google.com"
              defaultValue={contactToDel.email}
              readOnly={true}
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="phone"
              class="form__label"
            >
              Téléphone
            </label>
            <br />
            <input
              class="form__field"
              type="text"
              name="phone"
              id="phone"
              autocomplete="off"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0669584702 ou 0145879558"
              defaultValue={contactToDel.phone}
              readOnly={true}
            />
          </div>
        </>
        <div className="btn-unlock">
          {/* <button className="btn-confirm" onClick={() => handleDelete()}>
            Enregistrer
          </button> */}
          <button className="btn-cancel" onClick={() => closePopupDel()}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDeleteLead;

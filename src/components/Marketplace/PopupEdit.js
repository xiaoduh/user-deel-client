import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editLead } from "../../actions/leads.actions";

const PopupEdit = ({ closePopupEdit, contactToEdit }) => {
  const [lookingFor, setLookingFor] = useState(contactToEdit.lookingFor);
  const [company, setCompany] = useState(contactToEdit.company);
  const [sector, setSector] = useState(contactToEdit.sector);
  const [region, setRegion] = useState(contactToEdit.region);
  const [skill, setSkill] = useState(contactToEdit.skill);
  const [firstName, setFirstName] = useState(contactToEdit.first_name);
  const [lastName, setLastName] = useState(contactToEdit.last_name);
  const [position, setPosition] = useState(contactToEdit.role);
  const [email, setEmail] = useState(contactToEdit.email);
  const [phone, setPhone] = useState(contactToEdit.phone);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (
      firstName != "" ||
      lastName != "" ||
      position != "" ||
      email != "" ||
      phone != ""
    )
      dispatch(
        editLead(
          contactToEdit._id,
          lookingFor,
          company,
          sector,
          region,
          skill,
          firstName,
          lastName,
          position,
          email,
          phone
        )
      );
    window.location.reload(false);
    closePopupEdit();
  };

  return (
    <div className="popup">
      <div className="modal" id="edit-contact">
        <h3>
          Modifier l'apport d'affaire n°
          <span style={{ color: "#109CF1" }}>{contactToEdit._id}</span>
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
              defaultValue={contactToEdit.lookingFor}
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
              defaultValue={contactToEdit.company}
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
              defaultValue={contactToEdit.sector}
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
              defaultValue={contactToEdit.region}
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
              defaultValue={contactToEdit.skills}
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
              defaultValue={contactToEdit.last_name}
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
              defaultValue={contactToEdit.first_name}
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
              defaultValue={contactToEdit.role}
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
              defaultValue={contactToEdit.email}
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
              defaultValue={contactToEdit.phone}
            />
          </div>
        </>
        <div className="btn-unlock">
          <button className="btn-confirm" onClick={() => handleEdit()}>
            Enregistrer
          </button>
          <button className="btn-cancel" onClick={() => closePopupEdit()}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;
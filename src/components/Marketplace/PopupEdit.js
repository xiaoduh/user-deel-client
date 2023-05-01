import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editLead, removeLead } from "../../actions/leads.actions";

const PopupEdit = ({ closePopupEdit, contactToEdit }) => {
  const user = useSelector((state) => state.userReducer);
  const [lookingFor, setLookingFor] = useState(contactToEdit.lookingFor);
  const [company, setCompany] = useState(contactToEdit.company);
  const [sector, setSector] = useState(contactToEdit.sector);
  const [region, setRegion] = useState(contactToEdit.region);
  const [skill, setSkill] = useState(contactToEdit.skills);
  const [firstName, setFirstName] = useState(contactToEdit.first_name);
  const [lastName, setLastName] = useState(contactToEdit.last_name);
  const [position, setPosition] = useState(contactToEdit.role);
  const [email, setEmail] = useState(contactToEdit.email);
  const [phone, setPhone] = useState(contactToEdit.phone);
  const [isOpen, setIsOpen] = useState(contactToEdit.isOpen);
  const [isVerified, setIsVerified] = useState(contactToEdit.isVerified);
  const [status, setStatus] = useState(contactToEdit.status);
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
          phone,
          isOpen,
          isVerified,
          status
        )
      );
    closePopupEdit();
    window.location.reload(false);
  };

  const handleDelete = (id) => {
    dispatch(removeLead(id));
    closePopupEdit();
  };

  return (
    <div className="popup">
      <div className="modal" id="edit-contact">
        <div>
          <h3>
            Modifier l'apport d'affaire n°
            <span style={{ color: "#109CF1" }}>{contactToEdit._id}</span>
          </h3>
          {user.isAdmin && contactToEdit.isOpen ? (
            <>
              {" "}
              <label
                style={{ color: "#109CF1" }}
                htmlFor="isOpen"
                class="form__label"
              >
                Ouvert
              </label>
              <br />
              <select
                style={{ border: "1px solid #C2CFE0" }}
                class="form__field profil-required"
                name="isOpen"
                id="isOpen"
                required
                onChange={() => setIsOpen(!isOpen)}
              >
                <option>Ouvert</option>
                <option>Fermé</option>{" "}
              </select>
              <br />
            </>
          ) : null}
          {user.isAdmin && !contactToEdit.isOpen ? (
            <>
              {" "}
              <label
                style={{ color: "#109CF1" }}
                htmlFor="isOpen"
                class="form__label"
              >
                Ouvert
              </label>
              <br />
              <select
                style={{ border: "1px solid #C2CFE0" }}
                class="form__field profil-required"
                name="isOpen"
                id="isOpen"
                required
                onChange={() => setIsOpen(!isOpen)}
              >
                <option>Fermé</option>
                <option>Ouvert</option>{" "}
              </select>
              <br />
            </>
          ) : null}
          {user.isAdmin && contactToEdit.isVerified ? (
            <>
              {" "}
              <label
                style={{ color: "#109CF1" }}
                htmlFor="verified"
                class="form__label"
              >
                Certifié
              </label>
              <br />
              <select
                style={{ border: "1px solid #C2CFE0" }}
                class="form__field profil-required"
                name="verified"
                id="verified"
                required
                onChange={() => setIsVerified(!isVerified)}
              >
                <option>Certifié</option>
                <option>Non certifié</option>{" "}
              </select>
              <br />
            </>
          ) : null}
          {user.isAdmin && !contactToEdit.isVerified ? (
            <>
              {" "}
              <label
                style={{ color: "#109CF1" }}
                htmlFor="verified"
                class="form__label"
              >
                Certifié
              </label>
              <br />
              <select
                style={{ border: "1px solid #C2CFE0" }}
                class="form__field profil-required"
                name="verified"
                id="verified"
                required
                onChange={() => setIsVerified(!isVerified)}
              >
                <option value="unverified">Non certifié</option>
                <option value="verified">Certifié</option>{" "}
              </select>
              <br />
            </>
          ) : null}
          {user.isAdmin ? (
            <>
              {" "}
              <label
                style={{ color: "#109CF1" }}
                htmlFor="status"
                class="form__label"
              >
                Status
              </label>
              <br />
              <select
                style={{ marginBottom: "2.5rem", border: "1px solid #C2CFE0" }}
                class="form__field profil-required"
                name="status"
                id="status"
                required
                onChange={(e) => setStatus(e.target.value)}
              >
                {status == "validated" ? (
                  <>
                    <option value="validated" selected="selected">
                      Publié
                    </option>
                    <option value="pending">Non publié</option>
                    <option value="disabled">Archivé</option>
                  </>
                ) : (
                  <>
                    <option value="validated">Publié</option>
                    <option value="pending" selected="selected">
                      Non publié
                    </option>
                    <option value="disabled">Archivé</option>
                  </>
                )}
                {status == "disabled" ? (
                  <>
                    <option value="validated">Publié</option>
                    <option value="pending">Non publié</option>
                    <option value="disabled" selected="selected">
                      Archivé
                    </option>
                  </>
                ) : null}
              </select>
              <br />
            </>
          ) : null}
        </div>

        <>
          <div className="left-side">
            <h3>Informations sur l' affaire</h3>
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ widht: "20px", height: "20px", marginRight: ".5rem" }}
                src="/important.svg"
                alt="important"
              />{" "}
              ces informations sont obligatoires.
            </p>
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
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ widht: "20px", height: "20px", marginRight: ".5rem" }}
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
          <button
            style={{ marginRight: "1rem" }}
            className="btn-cancel"
            onClick={() => closePopupEdit()}
          >
            Annuler
          </button>
          {user.isAdmin && (
            <button
              style={{ cursor: "pointer" }}
              className="btn-not-allowed"
              onClick={() => {
                if (window.confirm("Voulez vous supprimer cette annonce ?")) {
                  handleDelete(contactToEdit._id);
                }
              }}
            >
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;

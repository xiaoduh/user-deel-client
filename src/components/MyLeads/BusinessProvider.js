import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getLeads, sellLead } from "../../actions/leads.actions";

const Sales = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [profil, setProfil] = useState(null);
  const [company, setCompany] = useState(null);
  const [skill, setSkill] = useState(null);
  const [sector, setSector] = useState(null);
  const [region, setRegion] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const checkProfil = (e) => {
    setProfil(e.target.value);
    const errorProfilRequired = document.querySelector(".profil-required");
    if (!e.target.value || e.target.value === null)
      errorProfilRequired.style.border = "1px solid #F7685B";
    else errorProfilRequired.style.border = "1px solid #2ED47A";
  };

  const checkCompany = (e) => {
    setCompany(e.target.value);
    const errorCompanyRequired = document.querySelector(".company-required");
    if (e.target.value === "" || e.target.value === null)
      errorCompanyRequired.style.border = "1px solid #F7685B";
    else errorCompanyRequired.style.border = "1px solid #2ED47A";
  };

  const checkSector = (e) => {
    setSector(e.target.value);
    const errorSectorRequired = document.querySelector(".sector-required");
    if (e.target.value === "" || e.target.value === null)
      errorSectorRequired.style.border = "1px solid #F7685B";
    else errorSectorRequired.style.border = "1px solid #2ED47A";
  };

  const checkRegion = (e) => {
    setRegion(e.target.value);
    const errorRegionRequired = document.querySelector(".region-required");
    if (e.target.value === "" || e.target.value === null)
      errorRegionRequired.style.border = "1px solid #F7685B";
    else errorRegionRequired.style.border = "1px solid #2ED47A";
  };

  const checkSkills = (e) => {
    setSkill(e.target.value);
    const errorSkillRequired = document.querySelector(".skill-required");
    if (e.target.value === "" || e.target.value === null)
      errorSkillRequired.style.border = "1px solid #F7685B";
    else errorSkillRequired.style.border = "1px solid #2ED47A";
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    const formMess = document.querySelector(".form-message");
    const errorProfilRequired = document.querySelector(".profil-required");
    const errorCompanyRequired = document.querySelector(".company-required");
    const errorSkillRequired = document.querySelector(".skill-required");
    const errorSectorRequired = document.querySelector(".sector-required");
    const errorRegionRequired = document.querySelector(".region-required");
    // e.preventDefault();

    if (profil === null || profil === "") {
      errorProfilRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (company === null || company === "") {
      errorCompanyRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (skill === null || skill === "") {
      errorSkillRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (sector === null || sector === "") {
      errorSectorRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (region === null || sector === "") {
      errorRegionRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else {
      errorProfilRequired.style.border = "";
      errorCompanyRequired.style.border = "";
      errorSkillRequired.style.border = "";
      await dispatch(
        sellLead(
          user._id,
          firstName,
          lastName,
          email,
          role,
          company,
          skill,
          profil,
          sector,
          region,
          phone
        )
      )
        .then((res) => {
          dispatch(getUser(user._id));
          dispatch(getLeads);
          setLoading(false);
          setProfil(null);
          setCompany(null);
          setSkill(null);
          setSector(null);
          setRegion(null);
          setFirstName("");
          setLastName("");
          setRole("");
          setEmail("");
          setPhone("");
          formMess.innerHTML = `<p class='success'>Votre annonce d'apport d'affaire a bien été envoyée. elle sera vérifiée avant d'être publiée sur la marketplace.</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4500);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main>
      <div className="grid-form-need">
        <div className="title-container" style={{ marginBottom: "2rem" }}>
          <h3>Publier une annonce d'apport d'affaire</h3>
          <p>
            Ici, publiez l'annonce sur l'affaire que vous souhaitez revendre aux
            commerciaux.
          </p>
        </div>
        <>
          <div className="left-side">
            <h3>Informations sur l'affaire</h3>
            <p>
              <img
                style={{ widht: "20px", height: "20px" }}
                src="/important.svg"
                alt="important"
              />{" "}
              ces informations sont obligatoires.
            </p>{" "}
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
              onChange={(e) => checkProfil(e)}
              placeholder="Développeur React"
              // value={profil}
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
              onChange={(e) => checkCompany(e)}
              placeholder="Google"
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
              onChange={(e) => checkSector(e)}
              placeholder="Internet"
            />
            <br />
            <label
              style={{ color: "#109CF1" }}
              htmlFor="sector"
              class="form__label"
            >
              Département
            </label>
            <br />
            <input
              class="form__field region-required"
              type="text"
              name="region"
              id="region"
              autocomplete="off"
              required
              onChange={(e) => checkRegion(e)}
              placeholder="75"
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
              onChange={(e) => checkSkills(e)}
              placeholder="React, Redux, SASS..."
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
              onChange={(e) => setRole(e.target.value)}
              placeholder="VP of Engineering"
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
            />
          </div>
          <div className="btn-container">
            <button onClick={(e) => handleFormSubmit(e)}>
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <p>Publier mon annonce</p>
              )}
            </button>
            <div className="form-message"></div>
          </div>
        </>
      </div>
      <div className="help-container">
        <h3 style={{ marginBottom: "1rem", display: "flex" }}>
          <img
            src="./info-2.svg"
            style={{ width: "20px", marginRight: ".5rem" }}
          />{" "}
          Comment s'y prendre pour publier une annonce d'apport d'affaire sur
          deeel ?
        </h3>
        <p>
          La mise en relation entre acheteurs et apporteurs d'affaires se fait
          de manière totalement anonyme, dans les deux sens. La mise en relation
          se fait à travers notre plateforme d'échange. Pour être visible des
          acheteurs sur la marketplace, vous devez publier une annonce «
          d'apport d'affaire ».
        </p>
        <ol>
          <li>
            Un <span style={{ color: "#109CF1" }}> apport d'affaire </span>:
            c'est un ensemble d'informations sur une société, un demandeur et le
            profil recherché. Plus il y a d'informations, plus votre apport
            d'affaire est susceptible d'être acheté sur la marketplace.
          </li>
          <li>
            Le <span style={{ color: "#109CF1" }}> Profil rehcerché</span> : est
            requis pour créer votre apport d'affaire.
          </li>
          <li>
            L'<span style={{ color: "#109CF1" }}>entreprise</span> : est requise
            pour créer votre apport d'affaire.
          </li>
          <li>
            Les<span style={{ color: "#109CF1" }}> compétences</span> : sont
            requisent pour créer votre apport d'affaire.
          </li>
          <li>
            Le<span style={{ color: "#109CF1" }}> nom</span> du demandeur :
            n'est pas requis pour la création de l'apport d'affaire. Mais{" "}
            <span style={{ color: "#109CF1" }}>fortement recommandé</span> car
            c'est ce qui représente{" "}
            <span style={{ color: "#109CF1" }}>le plus de valeur</span>.
          </li>
          <li>
            Le<span style={{ color: "#109CF1" }}> prénom</span> du demandeur :
            n'est pas requis pour la création de l'apport d'affaire. Mais{" "}
            <span style={{ color: "#109CF1" }}>fortement recommandé</span> car
            c'est ce qui représente{" "}
            <span style={{ color: "#109CF1" }}>le plus de valeur</span>.
          </li>
          <li>
            L<span style={{ color: "#109CF1" }}> email</span> du demandeur :
            n'est pas requis pour la création de l'apport d'affaire. Mais{" "}
            <span style={{ color: "#109CF1" }}>fortement recommandé</span> car
            c'est ce qui représente{" "}
            <span style={{ color: "#109CF1" }}>le plus de valeur</span>.
          </li>
          <li>
            Le<span style={{ color: "#109CF1" }}> téléphone</span> du demandeur
            : n'est pas requis pour la création de l'apport d'affaire. Mais{" "}
            <span style={{ color: "#109CF1" }}>fortement recommandé</span> car
            c'est ce qui représente{" "}
            <span style={{ color: "#109CF1" }}>le plus de valeur</span>.
          </li>
          <li>
            Une fois créé, votre apport d'affaire passe à la validation au sein
            de nos services, nous pouvons enrichir votre apport d'affaire avec
            nos informations internes (Identité du demandeur, email et
            téléphone).
          </li>
          <li>
            Une fois créé, vous pouvez modifier votre apport d'affaire si vous
            obtenez des informations complémentaires. Pour cela RDV sur votre{" "}
            <a href="/dashboard">Tableau de bord</a>
          </li>
        </ol>
      </div>
    </main>
  );
};

export default Sales;

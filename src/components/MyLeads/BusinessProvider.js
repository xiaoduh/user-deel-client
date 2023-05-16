import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getLeads, sellLead } from "../../actions/leads.actions";

const Sales = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [provider, setProvider] = useState(null);
  const [profil, setProfil] = useState(null);
  const [company, setCompany] = useState(null);
  const [skill, setSkill] = useState(null);
  const [region, setRegion] = useState(null);
  const [fdp, setFdp] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // const checkProvider = (e) => {
  //   setProvider(e.target.value);
  //   const errorProviderRequired = document.querySelector(".provider-required");
  //   if (!e.target.value || e.target.value === null)
  //     errorProviderRequired.style.border = "1px solid #F7685B";
  //   else errorProviderRequired.style.border = "1px solid #2ED47A";
  // };

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

  const checkFdp = (e) => {
    setFdp(e.target.value);
    const errorFdpRequired = document.querySelector(".fdp-required");
    if (e.target.value === "" || e.target.value === null)
      errorFdpRequired.style.border = "1px solid #F7685B";
    else errorFdpRequired.style.border = "1px solid #2ED47A";
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    const formMess = document.querySelector(".form-message");
    const errorProviderRequired = document.querySelector(".provider-required");
    const errorProfilRequired = document.querySelector(".profil-required");
    const errorCompanyRequired = document.querySelector(".company-required");
    const errorSkillRequired = document.querySelector(".skill-required");
    const errorRegionRequired = document.querySelector(".region-required");
    const errorFdpRequired = document.querySelector(".region-required");
    e.preventDefault();

    if (profil === null || profil === "") {
      errorProfilRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (provider === null || provider === "") {
      errorProviderRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (company === null || company === "") {
      errorCompanyRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (skill === null || skill === "") {
      errorSkillRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (region === null || region === "") {
      errorRegionRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else if (fdp === null || fdp === "") {
      errorFdpRequired.style.border = "1px solid #F7685B";
      setLoading(false);
    } else {
      errorProfilRequired.style.border = "";
      errorCompanyRequired.style.border = "";
      errorSkillRequired.style.border = "";
      errorRegionRequired.style.border = "";
      errorFdpRequired.style.border = "";
      await dispatch(
        sellLead(
          user._id,
          provider,
          profil,
          company,
          region,
          skill,
          fdp,
          firstName,
          lastName,
          email,
          role,
          phone
        )
      )
        .then((res) => {
          dispatch(getUser(user._id));
          dispatch(getLeads);
          setLoading(false);
          if (firstName && lastName) {
            formMess.innerHTML = `<p class='success'>Votre annonce d'apport d'affaire a bien été envoyée. elle sera vérifiée avant d'être publiée sur la marketplace. une fois publiée, vous serez crédité de 60€.</p>`;
            setProvider(null);
            setProfil(null);
            setCompany(null);
            setSkill(null);
            setRegion(null);
            setFirstName("");
            setLastName("");
            setRole("");
            setEmail("");
            setPhone("");
          } else {
            formMess.innerHTML = `<p class='success'>Envoyée. Votre annonce est incomplète, sans le contact nous ne pouvons publier votre annonce. Une fois publiée, vous serez crédité de 60€.</p>`;
            setProvider(null);
            setProfil(null);
            setCompany(null);
            setSkill(null);
            setRegion(null);
            setFirstName("");
            setLastName("");
            setRole("");
            setEmail("");
            setPhone("");
          }

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
          <form className="form-container">
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
              <div className="radio-container">
                <input
                  class="form__field provider-required"
                  type="radio"
                  name="esn"
                  id="esn"
                  required
                  onChange={(e) => setProvider(e.target.value)}
                  value="esn"
                  checked={provider === "esn"}
                />
                <label
                  style={{ color: "#109CF1" }}
                  htmlFor="esn"
                  class="form__label"
                >
                  Intermédiaire (ESN, cabinet de conseils ou équivalents Gains :
                  5€)
                </label>
              </div>
              <div className="radio-container">
                <input
                  class="form__field provider-required"
                  type="radio"
                  name="client"
                  id="client"
                  required
                  onChange={(e) => setProvider(e.target.value)}
                  value="client"
                  checked={provider === "client"}
                />
                <label
                  style={{ color: "#109CF1" }}
                  htmlFor="client"
                  class="form__label"
                >
                  Client final (Gains : 60€)
                </label>
              </div>
              <br />
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
                value={profil}
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
                value={company}
              />
              <br />
              <label
                style={{ color: "#109CF1" }}
                htmlFor="region"
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
                value={region}
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
                value={skill}
              />
              <label
                style={{ color: "#109CF1" }}
                htmlFor="fdp"
                class="form__label"
              >
                Fiche de poste ou descriptif de mission
              </label>
              <br />
              <textarea
                class="form__field fdp-required"
                name="fdp"
                id="fdp"
                autocomplete="off"
                required
                onChange={(e) => checkFdp(e)}
                placeholder="Au sein du pole...sur le projet...sous la responsabilité du... sont autant d'informations nous permettant d'identifier le demandeur par la suite pour passer votre annonce au statut « publié ». N'hésitez pas à la demander 🧐."
                value={fdp}
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
                le nom et le prénom doivent être renseignés pour que l'annonce
                soit publiée.
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
                value={lastName}
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
                value={firstName}
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
                value={role}
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
                value={email}
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
                value={phone}
              />
            </div>
          </form>
          <div className="btn-container">
            <div className="alert">
              <p>
                <img
                  style={{ widht: "20px", height: "20px" }}
                  src="/important.svg"
                  alt="important"
                />{" "}
                Votre annonce doit passer au statut « publié » pour que vos
                gains soient comptabilisés. Pour qu'une annonce passe du statut
                « pending » au statut « publié », elle doit être complète. A
                savoir, Entreprise, Profil, et contact. Pas de panique, nous
                vous aidons à compléter les informations. Le but, offrir un
                service de qualité à nos utilisateurs.
              </p>
            </div>
            <button onClick={(e) => handleFormSubmit(e)}>
              {loading ? (
                <>
                  Chargement... <i className="fas fa-spinner fa-spin"></i>
                </>
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

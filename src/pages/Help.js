import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HelpForm from "../components/Help/HelpForm";

const Help = () => {
  const uid = useContext(UidContext);
  const title =
    "Vous faites face à des difficultés d'utilisation ou à un problème ?";
  const p =
    "Contactez-nous et nous prendre contacte avec vous dans les plus bref délais.";
  const subject = "d'assictance";

  return (
    <>
      {uid ? (
        <div className="logged-user">
          <Header />
          <Sidebar />
          <main>
            <div className="help-container">
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                C'est quoi deeel ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                www.deeel.fr est une plateforme de mise en relation entre
                apporteurs d'ffaires IT et commerciaux IT. Son unique but est
                d'aider les commerciaux d'ESN de petite et moyenne taille à
                développer leurs clientèles en s'appuyant sur un réseau
                d'apporteurs d'affaires terrains.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                deeel pour les commerciaux, ça sert à quoi ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                deeel aide les commerciaux à être plus précis et pertinent dans
                leur prospection. Grâce à cette remonté d'informations terrains,
                les commerciaux peuvent être là au bon moment, auprès de la
                personne décisionnaire avec la bon proposition de valeur.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                deeel pour les apporteurs d'affaires, ça sert à quoi ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                deeel aide les apporteurs d'affaires à revaloriser des
                informations inutilisées auparavant.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Combien ça coute deeel ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                L'inscription et la navigation sur deeel sont complétement
                gratuites. Seule les mises en relation sont payantes. Exemple,
                lorsqu'un besoin vous intéresse, vous devez payer 1 crédit
                (19,90€) pour entrer en relation direct et anonyme avec
                l'apporteur d'affaire porteur des informations business.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Quelle est la commission de deeel sur les mises en relation ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                19,90€ c'est le prix d'une mise en relation. 65% revient à
                l'apporteur d'affaire, 35% à la plateforme.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                C'est quoi un apporteur d'affaires ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Un apporteur d'affaires est une personne qui met en relation des
                personnes qui souhaitent réaliser entre elles des opérations
                commerciales. On parle également d'entremetteur. Il peut signer
                un contrat ou non, selon la sécurité juridique qu'il souhaite
                donner à cette activité..
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Les informations sont-elles vérifiées ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Les informations entrées par les apporteurs d'affaires sont
                vérifiées avant leurs mises en lignes sur la plateforme. Cela
                signifie que nous avons été capable en interne par recoupement
                de source de confirmer la véracité de l'information.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Et si l'information que j'ai obtenue via mon AA est obsolète ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Nous ne pouvons garantir à 100% que l'information est toujours à
                jour après sa mise en ligne. En particulier si les besoins sont
                toujours ouverts ou non. deeel est un outil de prospection et
                non une plateforme d'appels d'offre et donc décline toutes
                responsabilités en cas de non retour de votre prospection. Si
                toutefois, vous recevez la preuve que votre besoin est fermé,
                nous vous remboursons le crédit.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Quelles sont les informations entrées dans le système ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Afin de publier une annonce d'apport d'affaire sur la
                plateforme. L'AA doit compléter un formulaire qui permet
                d'indiquer son niveau d'information sur la dite affaire.
                L'entreprise, le profil recherché, les compétences, le
                demandeur, ses coordonnées.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Marketplace » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Marketplace », vous retrouvez les annonces
                d'apport d'affaire et toutes les informations textuelles et
                visuelles sur le niveau d'information du porteur de cahcune des
                annonces.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Tableau de bord » (pour les AA) ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Tableau de bord », vous retrouvez toutes vos
                annonces en lignes. C'est ici que vous gérez vos annonces.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Apporter une affaire » (pour les AA) ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Apporter une affaire », vous trouvez le
                formulaire pour publier une annonce.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Convertir mes crédits » (pour les AA) ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Convertir mes crédits », vous trouvez le
                formulaire pour faire une demande de transfert de vos crédits en
                € sur votre compte bancaire.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Mes échanges » (pour les AA) ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Mes échanges », vous trouvez la messagerie
                instantannée qui vous permet d'echanger en direct et de manière
                anonyme au sujet d'un affaire.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Cédits » (pour les commerciaux) ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Cédits », vous trouvez le formulaire pour
                recharger votre compte en crédit.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Mon compte » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Mon compte », vous trouvez vos informations et
                statistiques personnelles.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Aide » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Aide », vous trouvez la FAQ d'utilisation deeel.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                A quoi sert l'onglet « Remboursement » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Sur l'onglet « Remboursement », vous trouvez le formulaire pour
                faire une demande de remboursement de crédit.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./known.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Signifie que l'information est connue par l'AA
              </h3>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./unknown.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Signifie que l'information est inconnue par l'AA
              </h3>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./verified.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Signifie que les informations sont certifiées par notre
                recoupement interne
              </h3>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Que signifie « Nombre de vue » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                La colonne nombre de vue affiche le nombre de commerciaux ayant
                eu l'information. Il existe un plafond de diffusion fixé à 4
                acheteurs maximum par apport d'affaire.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Que signifie « Fiabilité » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                La colonne « fiabilité » est gérée par deeel. Nous nous
                chargeons de vérifier, valider et certifier les informations
                entrées dans le système.
              </p>
              <h3 style={{ marginBottom: "1rem", display: "flex" }}>
                <img
                  src="./info-2.svg"
                  style={{ width: "20px", marginRight: ".5rem" }}
                />{" "}
                Que signifie « Rép. de l'apporteur » ?
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                La colonne « Rép. de l'apporteur » affiche la moyenne des notes
                de l'apporteur d'affaires. Proche de 5 signifie une apporteur
                d'affaires fiable.
              </p>
            </div>
          </main>
        </div>
      ) : (
        <div className="log-container">
          <Log signin={true} signup={false} />
        </div>
      )}
    </>
  );
};

export default Help;

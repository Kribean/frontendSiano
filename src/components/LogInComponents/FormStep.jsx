'use client';
import { useState } from "react";

export default function FormStep(props) {
  const [showAlert,setShowAlert] = useState(true);
  const [textAlert,setTextAlert] = useState([]);
  const dataTheme = [
    {
      activity: "Activité sportive",
    },
    {
      activity: "Alimentation et quotidien",
    },
    {
      activity: "Automobile et transport",
    },
    {
      activity: "Agriculture et Pêche",
    },
    {
      activity: "Espaces naturels et Espaces verts",
    },
    {
      activity: "Soins aux animaux",
    },
    {
      activity: "Arts et Façonnage d'ouvrages d'art",
    },
    {
      activity: "Banque, Assurance, Immobilier",
    },
    {
      activity: "Commerce, Vente et Grande distribution",
    },
    {
      activity: "Beauté et Coiffure",
    },
    {
      activity: "Boulangerie et Patisserie",
    },
    {
      activity: "Communication, Média et Multimédia",
    },
    {
      activity: "Construction, Bâtiment et Travaux publics",
    },
    {
      activity: "Dépannage et installation",
    },
    {
      activity: "Enseignement",
    },
    {
      activity: "Hôtellerie-Restauration, Tourisme, Loisirs et Animation",
    },
    {
      activity: "Industrie",
    },
    {
      activity: "Installation et Maintenance",
    },
    {
      activity: "Logements",
    },
    {
      activity: "Santé et Bien être",
    },
    {
      activity: "Services",
    },
    {
      activity: "Services à la personne et à la collectivité",
    },
    {
      activity: "Spectacle",
    },
    {
      activity: "Support à l'entreprise",
    },
    {
      activity: "Transport et Logistique",
    },
  ];

  const goToNextStepIsChart = () => {
    if (
      props.companyName.length > 2 &&
      props.name.length > 2 &&
      props.firstname.length > 2 &&
      props.phoneNumber.length == 10 &&
      props.postalCode.length > 2 &&
      props.adress.length > 2 &&
      props.description.length > 10 &&
      dataTheme.find((element) => element.activity === props.thematicCompany) &&
      props.email.length > 4 &&
      props.siren.length == 9 &&
      props.password.length>2
    ) {
     return props.setGoToChart(true);
    }

    const errorMessages = [];

    !(props.companyName.length > 2) && errorMessages.push("Nom de l'entreprise: le nom de votre entreprise n'est pas assez long.");
    !(props.name.length > 2) && errorMessages.push("Nom du chef d'entreprise: votre nom n'est pas assez long.");
    !(props.firstname.length > 2) && errorMessages.push("Prénom du chef d'entreprise: votre prénom n'est pas assez long.");
    !(props.phoneNumber.length === 10) && errorMessages.push("Téléphone: le numéro de téléphone doit comporter 10 chiffres. Exemple: 0654997788.");
    !(props.postalCode.length > 2) && errorMessages.push("Code Postal: Avez-vous mis un code postal des DOM TOM? Cette plateforme est dédiée aux entreprises de cet éco-système.");
    !(props.adress.length > 2) && errorMessages.push("Adresse: l'adresse est incomplète.");
    !(props.description.length > 10) && errorMessages.push("Description: la description est incomplète. Veuillez à nous décrire votre entreprise pour que nos utilisateurs puissent comprendre votre activité.");
    !dataTheme.find((element) => element.activity === props.thematicCompany) && errorMessages.push("Activité: choisissez une activité parmi notre sélection.");
    !(props.email.length > 4) && errorMessages.push("Email: l'email est incorrect.");
    !(props.siren.length === 9) && errorMessages.push("Siren: votre numéro SIREN doit comporter 9 chiffres.");
    !(props.password.length>2) && errorMessages.push("Mot de passe: le mot de passe n'est pas assez long.");
    setShowAlert(true);
    setTextAlert(errorMessages);
    

  };

  const containsOnlyLetters = (input) => {
    const letterRegex = /^[A-Za-z\s]+$/;
    return letterRegex.test(input);
  };

  const handleTextChange = (event, foncSet) => {
    const newValue = event.target.value;
    if (containsOnlyLetters(newValue) || newValue === "") {
      foncSet(newValue);
    }
  };

  const filterNonNumeric = (input) => {
    return input.replace(/\D/g, "");
  };

  const handleNumberChange = (event, funcSet) => {
    const newValue = event.target.value;
    const numericValue = filterNonNumeric(newValue);
    funcSet(numericValue);
  };

  const handleChangeEmail = (e) => {
    const sanitizedEmail = e.target.value.replace(/[^a-zA-Z0-9@.-]/g, "");
    props.setEmail(sanitizedEmail);
  };


  return (
    <div className="relative">
{showAlert&&    <div className="alert alert-error cursor-pointer z-10 fixed top-0 left-0 right-0 " onClick={()=>setShowAlert(false)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <div className="flex flex-col">
  <span>Oops! Vous avez mal rempli le formulaire, le(s) champ(s) suivant(s) doivent être corrigé(s):</span>
  <ul className="list-disc">
  {textAlert.map((element,index)=><li key={index} className="text-sm text-danger-content">{element}</li>)}
</ul>
  </div>
  <button className="btn btn-md btn-neutral">Fermer</button>
</div>}
      <div className="hero min-h-screen bg-base-200 text-neutral p-0 justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse p-0">
          <div className="text-center lg:w-full w-[300px] break-words lg:text-left">
            <h1 className="text-lg lg:text-5xl font-bold">
              Inscription à Siano
            </h1>
            <p className="lg:py-6">
              Connectez-vous à Siano et découvrez un univers de possibilités
              pour stimuler la croissance de votre entreprise locale et
              contribuer à l'épanouissement économique des Antilles ! 💻🌱🏢
            </p>
          </div>
          <div className="card flex-shrink-0 w-[380px] lg:w-full lg:max-w-xl shadow-2xl justify-center bg-base-100">
            <div className="card-body">
              <div className="form-control justify-center">
                <label className="label">
                  <span className="label-text">Nom de l'entreprise (ne mettez pas d'accent)</span>
                </label>
                <input
                  type="text"
                  value={props.companyName}
                  onChange={(event) => {
                    handleTextChange(event, props.setCompanyName);
                  }}
                  placeholder="Nom de l'entreprise"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom du chef d'entreprise (ne mettez pas d'accent)</span>
                </label>
                <input
                  type="text"
                  value={props.name}
                  onChange={(event) => {
                    handleTextChange(event, props.setName);
                  }}
                  placeholder="Nom du chef d'entreprise"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Prénom du chef d'entreprise (ne mettez pas d'accent)
                  </span>
                </label>
                <input
                  type="text"
                  value={props.firstname}
                  onChange={(event) => {
                    handleTextChange(event, props.setFirstname);
                  }}
                  placeholder="Prénom du chef d'entreprise"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Téléphone (10 chiffres)</span>
                </label>
                <input
                  type="text"
                  maxLength="10"
                  value={props.phoneNumber}
                  onChange={(event) => {
                    handleNumberChange(event, props.setPhoneNumber);
                  }}
                  placeholder="Téléphone"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Adresse</span>
                </label>
                <input
                  type="text"
                  value={props.adress}
                  onChange={(event) => {
                    props.setAdress(event.target.value);
                  }}
                  placeholder="L'adresse de votre entreprise"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>
              {props.adress?.length > 10 && (
                <>
                  <>
                    <div className="form-control my-[20px]">
                      <h2 className="text-bold text-md text-neutral my-[5px]">
                        Boostez votre visibilité avec Siano !
                      </h2>
                      <p className="text-sm text-neutral my-[5px]">
                        Siano offre une opportunité unique aux entreprises qui
                        joue le jeux : ouvrez vos portes aux visiteurs ou créez
                        des vidéos de votre entreprise. En partageant ainsi la
                        visibilité de votre entreprise, vous boosterez votre
                        visibilité sur notre plateforme et renforcerez notre
                        communauté.
                      </p>
                      <p className="text-bold text-sm text-neutral my-[5px]">
                        Seriez-vous intéressés à accueillir des visiteurs sur
                        votre lieu de travail ou à créer une vidéo présentant
                        votre entreprise pour une meilleure visibilité sur la
                        plateforme Siano ?
                      </p>

                      <label className="label cursor-pointer w-[100px]">
                        <span className="label-text">Non</span>
                        <input
                          type="radio"
                          checked={props.haveAPhysicalSite == false}
                          onChange={() => {
                            props.setHaveAPhysicalSite(false);
                          }}
                          name="radio-company"
                          className="radio checked:bg-neutral"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer w-[100px]">
                        <span className="label-text">Oui</span>
                        <input
                          type="radio"
                          checked={props.haveAPhysicalSite == true}
                          onChange={() => {
                            props.setHaveAPhysicalSite(true);
                          }}
                          name="radio-company"
                          className="radio checked:bg-neutral"
                        />
                      </label>
                    </div>
                  </>
                </>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Code Postal</span>
                </label>
                <input
                  type="text"
                  maxLength="5"
                  value={props.postalCode}
                  onChange={(event) => {
                    handleNumberChange(event, props.setPostalCode);
                  }}
                  placeholder="Code Postal"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  rows="4"
                  value={props.description}
                  onChange={(e) => {
                    props.setDescription(e.target.value);
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Donnez une bonne description de votre entreprise..."
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  maxLength="64"
                  value={props.email}
                  onChange={handleChangeEmail}
                  placeholder="Email"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Siren</span>
                </label>
                <input
                  type="text"
                  maxLength="9"
                  value={props.siren}
                  onChange={(event) => {
                    handleNumberChange(event, props.setSiren);
                  }}
                  placeholder="Siren"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Activité</span>
                </label>
                <select
                  value={props.thematicCompany}
                  onChange={(e) => {
                    props.setThematicCompany(e.target.value);
                  }}
                  className="select select-bordered"
                >
                  <option value="" disabled>
                    Quelle est votre secteur ?
                  </option>
                  {dataTheme.map((element) => (
                    <option key={element.activity} value={element.activity}>
                      {element.activity}
                    </option>
                  ))}
                </select>
              </div>
              {props.thematicCompany == "Agriculture et Pêche" && (
                <>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">
                        Je n' ai pas un résultat négatif du diagnostic
                        chloredécone
                      </span>
                      <input
                        type="radio"
                        checked={props.chloreDecCertif == false}
                        onChange={() => {
                          props.setChloreDecCertif(false);
                        }}
                        name="radio-10"
                        className="radio checked:bg-neutral"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">
                        J' ai un résultat négatif du diagnostic chloredécone
                      </span>
                      <input
                        type="radio"
                        checked={props.chloreDecCertif == true}
                        onChange={() => {
                          props.setChloreDecCertif(true);
                        }}
                        name="radio-10"
                        className="radio checked:bg-success"
                      />
                    </label>
                  </div>
                </>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Mot de passe (ne mettez pas d'espaces)
                  </span>
                </label>
                <input
                  type="text"
                  maxLength="24"
                  value={props.password}
                  onChange={(e) => {
                    props.setPassword(e.target.value.replace(" ", ""));
                  }}
                  placeholder="Taper votre mot de passe, retenez le bien!"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Facebook (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Facebook"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Twitter (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Twitter"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien LinkedIn (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="LinkedIn"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Whatsapp (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Whatsapp"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Lien Instagram (facultatif)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Instagram"
                  className="input input-bordered w-[300px] lg:w-full"
                />
              </div>
              <button
                onClick={goToNextStepIsChart}
                className="btn btn-primary w-[200px] lg:w-full  m-[20px]"
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

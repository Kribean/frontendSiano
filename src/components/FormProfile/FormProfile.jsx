"use client";

import { useState } from "react";
import { modifyProfile, deleteProfile } from "@/services/api";
import { useRouter } from "next/navigation";

export default function FormProfile(props) {
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

  const router = useRouter();

  const deleteProfileAndGoToHome = () => {
    const info = localStorage.getItem("informationSiano");

    if (JSON.parse(info)) {
      deleteProfile(JSON.parse(info).token)
        .then((data) => {
          if (data.ok) {
            router.push("/");
          }
          throw new Error("account not modified");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const validateModification = () => {
    const info = localStorage.getItem("informationSiano");

    if (JSON.parse(info)) {
      const body = {
        companyName: props.companyName,
        nameLeader: props.name,
        firstNameLeader: props.firstname,
        phoneNumber: props.phoneNumber,
        postalCode: props.postalCode,
        adress: props.adress,
        description: props.description,
        chloreDecCertif: props.chloreDecCertif,
        haveAPhysicalSite: props.haveAPhysicalSite,
        thematicCompany: props.thematicCompany,
        socialNetworkFb: props.facebook,
        socialNetworkTwitter: props.twitter,
        socialNetworkLink: props.linkedIn,
        socialNetworkWhatsapp: props.whatsapp,
        socialNetworkInsta: props.instagram,
      };

      modifyProfile(body, JSON.parse(info).token)
        .then((data) => {
          if (data.ok) {
            setAbleModify(false);
          }
          throw new Error("account not modified");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const [ableModify, setAbleModify] = useState(false);

  const containsOnlyLetters = (input) => {
    const letterRegex = /^[A-Za-z]+$/;
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
    <div className="card flex-shrink-0 w-[380px] lg:w-full lg:max-w-xl shadow-2xl justify-center bg-base-100">
      <div className="card-body">
        <div className="form-control justify-center">
          <label className="label">
            <span className="label-text">Nom de l'entreprise</span>
          </label>
          <input
            type="text"
            disabled={!ableModify}
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
            <span className="label-text">Nom du chef d'entreprise</span>
          </label>
          <input
            type="text"
            disabled={!ableModify}
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
            <span className="label-text">Prénom du chef d'entreprise</span>
          </label>
          <input
            type="text"
            disabled={!ableModify}
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
            disabled={!ableModify}
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
            disabled={!ableModify}
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
                  Siano offre une opportunité unique aux entreprises qui joue le
                  jeux : ouvrez vos portes aux visiteurs ou créez des vidéos de
                  votre entreprise. En partageant ainsi la visibilité de votre
                  entreprise, vous boosterez votre visibilité sur notre
                  plateforme et renforcerez notre communauté.
                </p>
                <p className="text-bold text-sm text-neutral my-[5px]">
                  Seriez-vous intéressés à accueillir des visiteurs sur votre
                  lieu de travail ou à créer une vidéo présentant votre
                  entreprise pour une meilleure visibilité sur la plateforme
                  Siano ?
                </p>

                <label className="label cursor-pointer w-[100px]">
                  <span className="label-text">Non</span>
                  <input
                    type="radio"
                    disabled={!ableModify}
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
                    disabled={!ableModify}
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
            disabled={!ableModify}
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
            disabled={!ableModify}
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
            disabled
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
            disabled
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
            disabled={!ableModify}
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
                  Je n' ai pas un résultat négatif du diagnostic chloredécone
                </span>
                <input
                  type="radio"
                  disabled={!ableModify}
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
                  disabled={!ableModify}
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
            <span className="label-text">Lien Facebook (facultatif)</span>
          </label>
          <input
            type="text"
            disabled={!ableModify}
            value={props.facebook}
            onChange={(event) => props.setFacebook(event.target.value)}
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
            disabled={!ableModify}
            value={props.twitter}
            onChange={(event) => props.setTwitter(event.target.value)}
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
            disabled={!ableModify}
            value={props.linkedIn}
            onChange={(event) => props.setLinkedIn(event.target.value)}
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
            disabled={!ableModify}
            value={props.whatsapp}
            onChange={(event) => props.setWhatsapp(event.target.value)}
            placeholder="Whatsapp"
            className="input input-bordered w-[300px] lg:w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Lien Instagram (facultatif)</span>
          </label>
          <input
            type="text"
            disabled={!ableModify}
            placeholder="Instagram"
            value={props.instagram}
            onChange={(event) => props.setInstagram(event.target.value)}
            className="input input-bordered w-[300px] lg:w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          {ableModify ? (
            <button
              className="btn btn-primary m-2"
              onClick={validateModification}
            >
              Valider
            </button>
          ) : (
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                setAbleModify(true);
              }}
            >
              Modifier
            </button>
          )}
          <button className="btn btn-error" onClick={deleteProfileAndGoToHome}>
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function FormStep({ setGoToChart }) {
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

  const [selected, setSelected] = useState("");

  const handleChangeActivity = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200 text-neutral p-0 justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <div className="text-center lg:w-full w-[300px] break-words lg:text-left">
          <h1 className="text-lg lg:text-5xl font-bold">Inscription à Siano</h1>
          <p className="lg:py-6">
            Connectez-vous à Siano et découvrez un univers de possibilités pour
            stimuler la croissance de votre entreprise locale et contribuer à
            l'épanouissement économique des Antilles ! 💻🌱🏢
          </p>
        </div>
        <div className="card flex-shrink-0 w-[380px] lg:w-full lg:max-w-xl shadow-2xl justify-center bg-base-100">
          <div className="card-body">
            <div className="form-control justify-center">
              <label className="label">
                <span className="label-text">Nom de l'entreprise</span>
              </label>
              <input
                type="text"
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
                placeholder="Téléphone"
                className="input input-bordered w-[300px] lg:w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Code Postal</span>
              </label>
              <input
                type="text"
                placeholder="Code Postal"
                className="input input-bordered w-[300px] lg:w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                placeholder="Siren"
                className="input input-bordered w-[300px] lg:w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Activité</span>
              </label>
              <select
                value={selected}
                onChange={handleChangeActivity}
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="text"
                placeholder="Taper votre mot de passe, retenez le bien!"
                className="input input-bordered w-[300px] lg:w-full"
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">
                  Je n'ai une certification anti-chloredécone
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-neutral"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">
                  J'ai une certification anti-chloredécone
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-success"
                />
              </label>
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
                <span className="label-text">Lien Instagram (facultatif)</span>
              </label>
              <input
                type="text"
                placeholder="Instagram"
                className="input input-bordered w-[300px] lg:w-full"
              />
            </div>
            <button
              onClick={() => {
                setGoToChart(true);
              }}
              className="btn btn-primary w-[200px] lg:w-full  m-[20px]"
              href="/login"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

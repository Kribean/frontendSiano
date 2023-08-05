"use client"

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useState } from "react";
export default function LogIn() {
  const dataTheme = [
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
      activity: "Communication, Média et Multimédia",
    },
    {
      activity: "Construction, Bâtiment et Travaux publics",
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
      activity: "Santé",
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
    {
      activity: "Activité sportive",
    },
  ];

  const [selected, setSelected] = useState('');

  const handleChangeActivity = event => {
    setSelected(event.target.value);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Inscription à Siano</h1>
            <p className="py-6">
              Connectez-vous à Siano et découvrez un univers de possibilités
              pour stimuler la croissance de votre entreprise locale et
              contribuer à l'épanouissement économique des Antilles ! 💻🌱🏢
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom de l'entreprise</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom de l'entreprise"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom du chef d'entreprise</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom du chef d'entreprise"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Prénom du chef d'entreprise
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Prénom du chef d'entreprise"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Téléphone (10 chiffres)</span>
                </label>
                <input
                  type="text"
                  placeholder="Téléphone"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Code Postal</span>
                </label>
                <input
                  type="text"
                  placeholder="Code Postal"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Siren</span>
                </label>
                <input
                  type="text"
                  placeholder="Siren"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Activité</span>
                </label>
                <select value={selected} onChange={handleChangeActivity} className="select select-bordered">
                  <option value="" disabled>Quelle est votre secteur ?</option>
                  {dataTheme.map((element) => (
                    <option key={element.activity} value={element.activity}>
                      {element.activity}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Facebook (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Facebook"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Twitter (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Twitter"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien LinkedIn (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="LinkedIn"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lien Whatsapp (facultatif)</span>
                </label>
                <input
                  type="text"
                  placeholder="Whatsapp"
                  className="input input-bordered"
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
                  className="input input-bordered"
                />
              </div>
              <Link className="btn btn-primary" href="/login">
                {" "}
                Valider
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

"use client"
import { useState,useEffect } from "react"
export default function FeedbackCompany() {

  const [informationSiano,setInformationSiano]=useState()
  useEffect(()=>{
    const info = JSON.parse(localStorage.getItem("informationSiano"))
    if(info)
    {setInformationSiano(info)}
  },[])
  return (
    <div className="card w-full lg:min-w-[500px] bg-base-100 shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">Retour des clients</h2>

        <div className="stats stats-vertical shadow">
          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip lg:tooltip-right" data-tip="Evaluation globale (A+: excellent)">
                <button className="btn">Label</button>
              </div>
            </div>
           {informationSiano?.label=="" ?<p className="text-neutral text-md">😞 Votre entreprise n'affiche actuellement pas de label sur Siano. Cela peut être dû à une moyenne de notation ou au nombre d'avis insuffisant. Pour obtenir un label et augmenter votre visibilité, nous vous encourageons à solliciter vos clients pour qu'ils évaluent votre entreprise depuis notre application téléphone. Chaque avis compte pour renforcer votre présence. 🌟💬</p>
            :<div className="stat-value">A</div>}
          </div>

          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip" data-tip="vos clients contactés">
                <button className="btn">
                Nombre de clients
                </button>
                </div>
                </div>
                {informationSiano?.nbrOfCustomers==0?<p className="text-neutral text-md">😞 Vous n'avez pas encore utilisé notre rubrique "Recherche" pour entrer en contact avec de potentiels clients. Nous vous encourageons vivement à l'explorer pour établir de nouvelles connexions bénéfiques pour votre entreprise. 🤝🌐</p>
            :<div className="stat-value">{informationSiano?.nbrOfCustomers}</div>}
          </div>

          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip" data-tip="vos clients contactés">
                <button className="btn">
                Qualité produits
                </button>
                </div>
                </div>
               {!informationSiano?.globalDeliveryScore.mean ?<p className="text-neutral">😞 Votre entreprise n'a pas encore reçu d'avis, ce qui peut affecter sa visibilité. Nous vous invitons à solliciter vos clients à laisser des avis sur vos services, car le système Siano met en avant les entreprises ayant de bonnes évaluations, offrant ainsi une opportunité gratuite d'améliorer votre visibilité. 🌟👍</p>
            :<div className="stat-value">{informationSiano?.globalDeliveryScore.mean}/5</div>}
          </div>

          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip" data-tip="note des clients">
                <button className="btn">
                Qualité service
                </button>
                </div>
                </div>
              {!informationSiano?.globalQualityScore.mean  ?<p className="text-neutral">😞 Votre entreprise n'a pas encore reçu d'avis, ce qui peut affecter sa visibilité. Nous vous invitons à solliciter vos clients à laisser des avis sur vos services, car le système Siano met en avant les entreprises ayant de bonnes évaluations, offrant ainsi une opportunité gratuite d'améliorer votre visibilité. 🌟👍</p>
            :<div className="stat-value">{informationSiano?.globalQualityScore.mean}/5</div>}
          </div>

          <div className="stat">
            <div className="stat-title">
              <div className="lg:tooltip" data-tip="Investissement social">
                <button className="btn">Interraction avec la communauté</button>
              </div>
            </div>
           {!informationSiano?.globalRSEScore.mean ?<p className="text-neutral">😞 Votre entreprise n'a pas encore de note sur cette section. Pour rendre votre entreprise plus visible, nous vous encourageons à entreprendre des actions telles que la création de vidéos de votre entreprise, l'organisation de rencontres et de visites avec vos clients et visiteurs, ainsi que des initiatives visant à dynamiser le territoire. Si vous accomplissez ces actions, le système Siano vous offrira une visibilité accrue en faisant la publicité de votre entreprise gratuitement. N'oubliez pas de nous envoyer toutes vos actions entreprises par e-mail à caraibe.simulation@gmail.com ou de nous contacter pour plus d'informations. 🎥💼🌍</p>
           : <div className="stat-value">{informationSiano?.globalRSEScore.mean}/5</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

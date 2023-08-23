import { useState } from "react";
import ModalConfirmNotChart from "../ModalConfirmNotChart/ModalConfirmNotChart";

const ButtonStep = ({ number, setStep, handleOpenModal }) => {
  const goToNextStep = () => {
    setStep(number);
  };
  return (
    <div className="flex w-full flex-col lg:flex-row justify-center lg:justify-end">
      {number != 1 && number != 2 && (
        <button
          onClick={() => {
            setStep(number - 2);
          }}
          className="btn btn-outline btn-neutral m-[10px] lg:w-[100px] btn-sm"
        >
          Ritounen
        </button>
      )}
      <button
        onClick={() => {
          goToNextStep(number);
        }}
        className="btn btn-neutral m-[10px] lg:w-[100px] btn-sm"
      >
        I bon mem
      </button>
      <button
        onClick={() => handleOpenModal()}
        className="btn btn-neutral m-[10px] btn-sm"
      >
        Awa, man pa dako
      </button>
    </div>
  );
};
export default function ChartStep(props) {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMada, setIsMada] = useState(true);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex w-full flex-col justify-center m-[20px]">
{props.mistakeIsDone&&      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Oops! une erreur c'est produite, nous en sommes désolé. Si l'erreur persiste, contactez nous sur nos réseaux sociaux ou via notre email: caraibe.simulation@gmail.com</span>
      </div>}
      <div className="flex flex-row justify-end m-[20px]">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mx-[10px]">
              {isMada ? "Créole Martiniquais" : "Créole Guadeloupéen"}
            </span>
            <input
              type="checkbox"
              className="toggle"
              onChange={() => {
                setIsMada(!isMada);
              }}
              checked={isMada}
            />
          </label>
        </div>
      </div>
      {isModalOpen && (
        <ModalConfirmNotChart handleCloseModal={handleCloseModal} />
      )}
      <h1 className="text-xl lg:text-5xl font-bold m-[20px]">
        {" "}
        Éligibilité pou Siano - fòk ou li sa oblijatwa:
      </h1>
      <ol className="list-decimal hidden lg:steps">
        <li className="step step-primary"></li>
        <li
          className={!(step > 1 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 2 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 3 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 4 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 5 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 6 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 7 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 8 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 9 && step < 12) ? "step " : "step step-primary"}
        ></li>
        <li
          className={!(step > 10 && step < 12) ? "step " : "step step-primary"}
        ></li>
      </ol>
      {/*etre antillais */}
      {step == 1 && (
        <div className="flex flex-col m-[20px] text-neutral">
          <h2 className="text-lg lg:text-2xl font-bold">
            Mwen ka korespond a kritè ta la
          </h2>
          <ol className="list-decimal">
            <li>
              Mwen sé an antrepriz ki ka konprann konseps Siano. An efè, Siano
              sé an plateform ki fèt pou dinamizé ekosistèm Karayib/Gwiyanné.
              Kidonk Siano kay ban mwen kontak kliyan ki lé ni kontak épi domèn
              mwen an. Kidonk mwen ka konprann mwen kay sèvi kontak la épi respé
              ek atansion.
            </li>
            <li>
              Mwen sé an antrepriz ki ka sitiyé koy adan la Karaib oben la
              Gwiyàn.
            </li>
          </ol>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={2}
          />
        </div>
      )}

      {/*etre antillais */}
      {step == 2 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            Mwen ka korespond a kritè ta la
          </h2>
          <p>Mwen ni konèsans kilti la karaib/gwiyan épi lang kréyòl</p>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={3}
          />
        </div>
      )}

      {/*entreprise compatible */}
      {step == 3 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            Mwen ka korespond a kritè ta la
          </h2>
          <p>
            Antrepriz mwen pa ka fè lapròmòsyon oben pa asosye épi aktivité ki
            ni an lyannaj épi: seksyalité, dwòg, vyolans, rasism, oben
            deteryorasyon kilti antiyen/Giyanné.
          </p>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={4}
          />
        </div>
      )}

      {/*données */}
      {step == 4 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">Mwen dakò pou:</h2>
          <p>
            Mwen ba enfòmasyon asou nonb anplwaye ek stagyè man kay ni pandan
            lanné a. Mwen ka pèmèt Siano kontakté mwen pandan lanné-a pou ba yo
            enfòmasyon. Yo kay sèvi enfòmasyon man ba yo pou yo fè statistik
            oben pou yo fè pròmòsyon antrepriz asou teritwa a.
          </p>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={5}
          />
        </div>
      )}

      {/*Siano*/}
      {step == 5 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">Mwen dakò pou:</h2>
          <ol className="list-decimal">
            <li>
              Patisipé adan kòntribisyon pou édé Siano fonksioné lè yo bizwen(
              minimum dé 1 euro). An vrè di, mwen byen konsyan ki an platfòm
              gratis pé poté anlo ban mwen, mé mwen plenman konsyan ke mété
              platfòm la asou entènèt ka antrainé frè pou péyé.
            </li>
            <li>
              Fè kominikasyon asou antrepriz mwen an pou moun pé konnet ki moun
              mwen yé. Man kay fè sa swa pa on prézantasyon fizik oben pa on
              videyo. Mwen dakò tou ke Siano pé fè piblisité pou mwen:
              piblikasion tèks, vidéo asou antrepriz mwen an (Siano kay itilizé
              youtube, LinkedIn, Instagram...). Ekip Siano kay palé di sa épi
              mwen.
            </li>
            <li>
              Mété sèlman enfòmasyon valab asou kont mwen. Si mwen pa ka
              respèkté sa, ékip Siano pé ekskli mwen asou platfòm la.
            </li>
            <li>Aksepté désizyon ékip Siano.</li>
          </ol>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={6}
          />
        </div>
      )}

      {/*Droits et devoirs des entreprises*/}
      {step == 6 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            Les entreprises qui rejoignent la plateforme Siano s'engagent à :
          </h2>
          <ol className="list-decimal">
            <li>
              Utiliser les contacts clients uniquement à des fins
              professionnelles.
            </li>
            <li>Ne pas divulguer les contacts à des tiers.</li>
            <li>
              Lorsque contacté, un client{" "}
              <span className="font-bold text-lg lg:text-2xl">
                ne peut pas être
              </span>
              recontacter, à moins que le client manifeste son envie d'être
              recontacté.
            </li>
            <li>
              Pour la tranquilité du client, si le contact/client refuse le
              produit, je suis tenu et
              <span className="font-bold text-lg lg:text-2xl"> obligé</span> de
              ne plus recontacter le client
            </li>
            <li>
              L'entreprise s'engage à fournir des produits et un service de
              qualités
            </li>
            <li>L'entreprise accepte d'être noté par les clients</li>
            <li>
              L'entreprise s'engage à motiver les clients ayant acheté leur
              produit, de les noter
            </li>
          </ol>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={7}
          />
        </div>
      )}

      {/*Droits et devoirs des entreprises*/}
      {step == 7 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            Lorsque les clients ont noté l'entreprise, Siano donnera l'un des
            labels :
          </h2>
          <ol className="list-decimal">
            <li>
              <span className="font-bold text-lg lg:text-2xl">A+</span> :
              Entreprise fortement recommandée ayant reçu une moyenne supérieure
              à 4/5 et ayant reçu plus de 100 avis et démontrant une croissance
              en termes de personnel ou de stagiaires employés.
            </li>
            <li>
              <span className="font-bold text-lg lg:text-2xl">A</span> :
              Entreprise fortement recommandé ayant reçu une moyenne supérieure
              à 4/5 et ayant reçu plus de 51 avis.
            </li>
            <li>
              <span className="font-bold text-lg lg:text-2xl">B</span> :
              Entreprise bien vu par la communauté ayant reçu une moyenne
              supérieure à 3/5 et ayant reçu entre 11 et 50 avis.
            </li>
            <li>
              <span className="font-bold text-lg lg:text-2xl">C</span> :
              Entreprise prometteuse ayant reçu une moyenne supérieure à 2.5/5
              et ayant reçu entre 5 et 10 avis.
            </li>
          </ol>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={8}
          />
        </div>
      )}

      {/*Droits et devoirs des entreprises*/}
      {step == 8 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            Je suis d'accord sur ce point :
          </h2>
          <p>
            Si mon entreprise obtient le label (A+,A,B,C),{" "}
            <span className="font-bold text-lg lg:text-2xl">j'accepte</span> que
            Siano me fasse de la publicité gratuitement{" "}
          </p>

          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={9}
          />
        </div>
      )}

      {/*Droits et devoirs des entreprises*/}
      {step == 9 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            En cas de problème(s):
          </h2>
          <p>
            Si un manquement ou mauvais comportement survient, Siano se réserve
            le droit d'appliquer des actions permettant de revenir à un bon
            respect des conditions acceptées par l'entreprise. Siano peut donc
            si la situation l'impose, supprimer un compte.
          </p>

          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={10}
          />
        </div>
      )}

      {step == 10 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">Condition:</h2>
          <p>
            Siano est un projet non lucratif ayant pour but d'améliorer le
            contexte socio économique antillais. Les entreprises qui participent
            à Siano se doivent d'avoir des ambitions fortes de croissance. Ainsi
            les entreprises s'inscrivant à Siano se doivent dans leur
            prévisionnel de prévoir l'emploi de stagiaire ou d'employé locaux.
            Si cela n'est pas rendu possible du fait des réalités économiques
            entre autre, Siano se réverve le droit de rendre indisponible ses
            services.
          </p>
          <ButtonStep
            handleOpenModal={handleOpenModal}
            setStep={setStep}
            number={11}
          />
        </div>
      )}

      {step == 11 && (
        <div className="flex flex-col m-[20px]">
          <h2 className="text-lg lg:text-2xl font-bold">
            Dènyé étap la, mèsi dènyé étap la rivé! Kliké asou Validé pou fini.
          </h2>
          <button
            onClick={props.validateForm}
            className="btn btn-success w-[100px] btn-sm"
          >
            Validé
          </button>
        </div>
      )}
    </div>
  );
}

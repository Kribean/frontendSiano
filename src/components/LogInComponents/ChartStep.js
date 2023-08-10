import Link from "next/link";
import { useState } from "react";


const ButtonStep = ({number,setStep})=>{
    
    const goToNextStep = ()=>{
        setStep(number)
    }
    return(
        <div className="flex w-full flex-row justify-end">
        <button onClick={()=>{goToNextStep(number)}} className="btn btn-success m-[10px] w-[100px] btn-sm">Oui</button>
        <Link href="/" className="btn btn-error m-[10px] btn-sm">Je n'accepte pas les conditions</Link>
        </div>
    )
}
export default function ChartStep() {
    const [step,setStep] =useState (1);
  return (
    <div className="flex w-full flex-col justify-center m-[20px]">
      <h1 className="text-5xl font-bold m-[20px]"> Eligibilité à Siano</h1>
      <ul className=" hidden lg:steps">
        <li className="step step-primary"></li>
        <li className={!(step>1&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>2&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>3&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>4&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>5&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>6&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>7&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>8&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>9&&step<12)?"step ":"step step-primary"}></li>
        <li className={!(step>10&&step<12)?"step ":"step step-primary"}></li>
      </ul>
      {/*etre antillais */}
{ step==1&&     <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">Je correspond à un de ces critères?</h2>
        <p>
          Je suis née aux Antilles OU je suis mariée à un(e) Antillais(e) OU mon
          enfant à un parent antillais
        </p>
        <ButtonStep setStep={setStep} number={2}/>
      </div>}

      {/*etre antillais */}
{  step==2&&    <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">Je correspond à un de ces critères?</h2>
        <p>J'ai une connaissance des antilles et de la langue créole</p>
        <ButtonStep setStep={setStep} number={3}/>
      </div>}

      {/*entreprise compatible */}
{ step==3&&     <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">Je correspond à un de ces critères?</h2>
        <p>
          Mon entreprise ne promeut pas ou n'est pas associée à des activités
          liées à la sexualité, aux drogues, à la violence ou au racisme, à la
          détérioration de la culture antillaise
        </p>
        <ButtonStep setStep={setStep} number={4}/>
      </div>}

      {/*données */}
{ step==4&&     <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">Je suis d'accord pour:</h2>
        <p>
          Fournir des informations sur le nombre d'employés et de stagiaires au
          cours de l'année.
        </p>
        <ButtonStep setStep={setStep} number={5}/>
      </div>}

      {/*Siano*/}
{step==5&&      <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">Je suis d'accord pour:</h2>
        <p>Accepter les décisions de l'équipe Siano.</p>
        <ButtonStep setStep={setStep} number={6}/>
      </div>}

      {/*Droits et devoirs des entreprises*/}
{step==6&&      <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">
          Les entreprises qui rejoignent la plateforme Siano s'engagent à :
        </h2>
        <ul>
          <li>
            Utiliser les contacts clients uniquement à des fins
            professionnelles.
          </li>
          <li>Ne pas divulguer les contacts à des tiers.</li>
          <li>
            Lorsque contacté, un client <span className="font-bold text-2xl">ne peut pas être</span> 
            recontacter, à moins que le client manifeste son envie d'être recontacté.
          </li>
          <li>
            Pour la tranquilité du client, si le contact/client refuse le
            produit, je suis tenu et 
            <span className="font-bold text-2xl"> obligé</span> de ne plus
            recontacter le client
          </li>
          <li>
            L'entreprise s'engage à fournir des produits et un service de qualités
          </li>
          <li>
            L'entreprise accepte d'être noté par les clients
          </li>
          <li>
            L'entreprise s'engage à motiver les clients ayant acheté leur produit, de les noter
          </li>
        </ul>
        <ButtonStep setStep={setStep} number={7}/>
      </div>}

      {/*Droits et devoirs des entreprises*/}
{step==7&&      <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">
          Lorsque les clients ont noté l'entreprise, Siano donnera l'un des labels :
        </h2>
        <ul>
          <li>
          <span className="font-bold text-2xl">A+</span> : Entreprise fortement recommandée ayant reçu une moyenne supérieure à 4/5 et ayant reçu plus de 100 avis et démontrant une croissance en termes de personnel ou de stagiaires employés.
          </li>
          <li>
          <span className="font-bold text-2xl">A</span> : Entreprise fortement recommandé ayant reçu une moyenne supérieure à 4/5 et ayant reçu plus de 51 avis.</li>
          <li>
          <span className="font-bold text-2xl">B</span> : Entreprise bien vu par la communauté ayant reçu une moyenne supérieure à 3/5 et ayant reçu entre 11 et 50 avis.
          </li>
          <li>
          <span className="font-bold text-2xl">C</span> : Entreprise prometteuse ayant reçu une moyenne supérieure à 2.5/5 et ayant reçu entre 5 et 10 avis.
          </li>
        </ul>
        <ButtonStep setStep={setStep} number={8} />
      </div>}

            {/*Droits et devoirs des entreprises*/}
{step==8&&            <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">
         Je suis d'accord sur ce point :
        </h2>
        <p>Si mon entreprise obtient le label (A+,A,B,C), <span className="font-bold text-2xl">j'accepte</span> que Siano me fasse de la publicité gratuitement </p>

        <ButtonStep setStep={setStep} number={9}/>
      </div>}

                  {/*Droits et devoirs des entreprises*/}
{step==9&&                  <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">
        En cas de problème(s):
        </h2>
        <p>Si un manquement ou mauvais comportement survient, Siano se réserve le droit d'appliquer des actions permettant de revenir à un bon respect des conditions acceptées par l'entreprise. Siano peut donc si la situation l'impose, supprimer un compte.
 </p>

 <ButtonStep setStep={setStep} number={10}/>
      </div>}

{ step==10&&     <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">
        Condition:
        </h2>
        <p>Siano est un projet non lucratif ayant pour but d'améliorer le contexte socio économique antillais. Ainsi si mon entreprise grossit je souhaite prende des stagiaires ou des employés antillais dans le courant de la première ou deuxième année après mon inscription </p>
        <ButtonStep setStep={setStep} number={11}/>
      </div>}

{   step==11&&   <div className="flex flex-col m-[20px]">
        <h2 className="text-2xl font-bold">
        Dernière étape, merci d'être arrivée jusque là! Clique sur valider pour finir.
        </h2>
        <Link href={"/login"} className="btn btn-success w-[100px] btn-sm">Valider</Link>
      </div>}

    </div>
  );
}

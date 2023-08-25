"use client"

import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import FeedbackCompany from "@/components/FeedbackCompany/FeedbackCompany";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function CompanySession() {

const [informationSiano,setInformationSiano]=useState()
  useEffect(()=>{
    const info = JSON.parse(localStorage.getItem("informationSiano"))
    if(info)
    {setInformationSiano(info)}
  },[])
  return (
<>
{
  !informationSiano?.token?
  <main className="relative flex min-h-screen flex-col items-center justify-center  w-full text-neutral">
<h1 className=" text-lg text-bold lg:text-2xl text-neutral">Oops!</h1>
<p className="text-neutral text-md">"Pour accéder à votre compte Siano, veuillez vous reconnecter. Votre session a expiré. 😊🔒</p>
<Link href={'/login'} className="btn btn-error">Retour à la page d'acueil</Link>
  </main>
  
  :    <main className="relative flex min-h-screen flex-col items-center justify-between w-full text-neutral">
  <div className="w-full hidden lg:block">
    <Navbar />
  </div>
  <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
    <Navbar />
  </div>
  <Navbar2 />
  <div className="flex flex-col w-full">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <div className="card w-[90%] lg:w-96 bg-base-100 shadow-xl m-5 bg-primary">
          <Link href={"/company-calendar"} className="card-body w-full">
<div className="flex flex-row">
<div className="badge badge-accent h-[42px] text-center text-white m-[10px] text-[24px] badge-lg">+</div>
            <h2 className="card-title text-primary-content">
             Mes évènements
            </h2>
</div>
            <p className="text-primary-content">
              Visualiser ou créer des évènements que vous ferez pour le grand public. Foire, webinar,rencontre entreprise/client,etc... dites tout dans cette section
            </p>
          </Link>
        </div>

        <div className="card w-[90%] lg:w-96 bg-base-100 shadow-xl m-5 bg-secondary">
          <Link href="https://forms.gle/eB6BWqcJiRd9reEm6" target="_blank"  className="card-body">
            <h2 className="card-title text-secondary-content">
              La situation de mon entreprise et sa visibilité
            </h2>
            <p className="text-secondary-content">
              Nouveau employé, stagiaires, vente réussies, vidéos de votre entreprise? Dite le nous pour
              faire avancer le territoire en <span className="text-bold">Cliquant ici</span>
            </p>
          </Link>
        </div>
      </div>

      <FeedbackCompany />
    </div>

  </div>
  <Footer />
</main>
}
</>
  );
}

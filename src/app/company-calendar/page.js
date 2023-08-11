"use client";
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import FeedbackCompany from "@/components/FeedbackCompany/FeedbackCompany";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import ModalCalendarCompany from "@/components/ModalCalendarCompany/ModalCalendarCompany";
import CardEvent from "@/components/CardEvent/CardEvent";

export default function CompanyCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dataCalendar = [{date:"5/12/2023",title:"Foire aux légume",description:"vente de fruit et légume retrouver mon stand"},{date:"12/08/2023",title:"Journée de l'énergie",description:"découvrer les énergie solaire et chauffe eau"},{date:"30/11/2023",title:"Journée sportive",description:"venez découvrir notre randonnée "} ]
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
      {isModalOpen && <ModalCalendarCompany handleCloseModal={handleCloseModal} />}
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <Navbar2 />
      <h1 className="text-5xl font-bold">Evènements de mon entreprise</h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-row m-[20px]">
      <button onClick={()=>handleOpenModal()} className="btn btn-primary">Créer un  évènement +</button>
    </div>
      </div>
      <h2 className="card-title">Liste de mes évènements</h2>
      <div className="flex flex-wrap gap-2 w-full">
        {dataCalendar.map((element,index)=> <CardEvent key={index} date={element.date} title={element.title} description={element.description} isAdmin={true} />)}
      </div>
      <Footer />
    </main>
  );
}

"use client";
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import ModalCalendarCompany from "@/components/ModalCalendarCompany/ModalCalendarCompany";
import CardEvent from "@/components/CardEvent/CardEvent";
import { getAllEvents } from "@/services/api";
export default function CompanyCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataCalendar, setDataCalendar] = useState([]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    const info = localStorage.getItem("informationSiano");

    if(JSON.parse(info))
    {
      getAllEvents(JSON.parse(info).companyId)
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error("no event, error")
      })
      .then((data)=>setDataCalendar(data))
      .catch((error)=>{console.log("oops mistake on fetch")})
    }
    
  },[])

 return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full text-neutral">
      {isModalOpen && <ModalCalendarCompany setDataCalendar={setDataCalendar} handleCloseModal={handleCloseModal} />}
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
      <button onClick={()=>handleOpenModal()} className="btn btn-primary">Créer un  événement +</button>
    </div>
      </div>
      <h2 className="card-title">Liste de mes événements</h2>
     {dataCalendar?.length==0? <p className="text-neutral">Vous n'avez pas encore d'événements programmés</p> :<div className="flex flex-wrap gap-2 w-full">
        {dataCalendar?.map((element,index)=> <CardEvent key={index} 
        companyName={element.companyName}
        idEvent={element._id}
        title= {element.title}
        description={element.description}
        place={element.place}
        duration= {element.duration}
        startAt={element.startAt}
        price={element.price}
        categoryText={element?.category[0]}
        emailContact={element.emailContact}
        phoneContact={element.phoneContact} 
        setDataCalendar={setDataCalendar}
        isAdmin={true} />)}
      </div>}
      <Footer />
    </main>
  );
}

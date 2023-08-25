"use client";
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import ModalJobCompany from "@/components/ModalJobCompany/ModalJobCompany";
import CardJob from "@/components/CardJob/CardJob";
import { getAllJobs } from "@/services/api";


export default function JobOfferCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataJob, setDataJob] = useState([]);
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
      getAllJobs(JSON.parse(info).companyId)
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error("no job, error")
      })
      .then((data)=>setDataJob(data))
      .catch((error)=>{console.log("oops mistake on fetch")})
    }
    
  },[])

 return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full text-neutral">
      {isModalOpen && <ModalJobCompany setDataJob={setDataJob} handleCloseModal={handleCloseModal} />}
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <Navbar2 />
      <h1 className="text-5xl font-bold">Emploi proposé de mon entreprise</h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-row m-[20px]">
      <button onClick={()=>handleOpenModal()} className="btn btn-primary">Créer une offre +</button>
    </div>
      </div>
      <h2 className="card-title">Liste de mes offres</h2>
     {dataJob?.length==0? <p className="text-neutral">Vous n'avez pas encore d'offres proposées</p> :<div className="flex flex-wrap gap-2 w-full">
        {dataJob?.map((element,index)=> <CardJob key={index} 
        companyName={element.companyName}
        idJob={element._id}
        title= {element.title}
        description={element.description}
        createdAt={element.createdAt}
        place={element.place}
        price={element.price}
        category={element.category}
        emailContact={element.emailContact}
        phoneContact={element.phoneContact}
        setDataJob={setDataJob} 
        isAdmin={true} />)}
      </div>}
      <Footer />
    </main>
  );
}

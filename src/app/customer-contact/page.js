"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomerBar from "@/components/CustomerBar/CustomerBar";
import CardCustomer from "@/components/CardCustomer/CardCustomer";
import Navbar2 from "@/components/Navbar2/Navbar2";
import { useEffect, useState } from "react";
import ModalCustomer from "@/components/ModalCustomer/ModalCustomer";
import { getMyConsumers } from "@/services/api";

export default function CustomerContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataMyClient,setDataMyClient] = useState([]);
  const [listOfContact,setListOfContact] = useState([]);

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
    getMyConsumers(JSON.parse(info).token)
    .then((data)=>{
  if(data.ok)
  {
    return data.json();
  }
  throw new Error("error occur when returning clients")
    })
    .then((data)=>{ setDataMyClient(data.consumers);setListOfContact(data.listOfContact) })
    .catch((error)=>{console.log("problem to be checked, tell it to the owner of the website")})
  }


},[])

  return (
    <main className="flex relative min-h-screen flex-col w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <Navbar2 />
      <CustomerBar handleOpenModal={handleOpenModal} />
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 m-[20px] text-neutral">
        {dataMyClient.map((element,index) => {
          return (
            <CardCustomer 
            key={index} 
            name={element.userName} 
            email={element.email}
            phoneNumber={element.phoneNumber}
            adress={element.adress}
            idCustomer={element._id} />
          );
        })}
      </div>
      <Footer />
      {isModalOpen && <ModalCustomer listOfContact={listOfContact}  handleCloseModal={handleCloseModal} setDataMyClient={setDataMyClient} setListOfContact={setListOfContact} />}
    </main>
  );
}

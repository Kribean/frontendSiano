"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomerBar from "@/components/CustomerBar/CustomerBar";
import CardCustomer from "@/components/CardCustomer/CardCustomer";
import Navbar2 from "@/components/Navbar2/Navbar2";
import { useState } from "react";
import ModalCustomer from "@/components/ModalCustomer/ModalCustomer";

export default function CustomerContact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
const data=[{name:"Jhon"},
{name:"Eva"},
{name:"Zaz"}]
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Navbar2 />
    <CustomerBar handleOpenModal={handleOpenModal}/>
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 m-[20px]">
{data.map((element)=>{
   return <CardCustomer 
   name={element.name}
   idCustomer={element.idCustomer}/>;
})}
</div>
      <Footer/>
      {isModalOpen&& <ModalCustomer handleCloseModal={handleCloseModal} />}
    </main>
  );
}

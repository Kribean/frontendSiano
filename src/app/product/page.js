"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardProduct from "@/components/CardProduct/CardProduct";
import ProductBar from "@/components/ProductBar/ProductBar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import { useState } from "react";
import ModalProduct from "@/components/ModalProduct/ModalProduct";

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = [
    {
      name: "panier de fruit",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip",
      productIsAService: false,
      quantity: 20,
      idCompany: "sf5465s4f",
      price: 20,
      createdAt: "10/02/2023",
    },
    {
      name: "panier de fruit",
      description: "dedans des mangues et des mangos",
      productIsAService: false,
      quantity: 20,
      idCompany: "sf5465s4f",
      price: 20,
      createdAt: "10/02/2023",
    },
    {
      name: "panier de fruit",
      description: "dedans des mangues et des mangos",
      productIsAService: false,
      quantity: 20,
      idCompany: "sf5465s4f",
      price: 20,
      createdAt: "10/02/2023",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex relative min-h-screen flex-col w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <Navbar2 />
      <ProductBar handleOpenModal={handleOpenModal} />
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 m-[20px]">
        {data.map((element,index) => {
          return (
            <CardProduct
              description={element.description}
              name={element.name}
              productIsAService={element.productIsAService}
              quantity={element.quantity}
              idCompany={element.idCompany}
              price={element.price}
              createdAt={element.createdAt}
              key={index}
            />
          );
        })}
      </div>
      <Footer />

      {isModalOpen && <ModalProduct handleCloseModal={handleCloseModal} />}
    </main>
  );
}

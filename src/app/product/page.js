"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardProduct from "@/components/CardProduct/CardProduct";
import ProductBar from "@/components/ProductBar/ProductBar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import { useEffect, useState } from "react";
import ModalProduct from "@/components/ModalProduct/ModalProduct";
import { getMyProducts } from "@/services/api";


export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products,setProducts] = useState([]);
  const [description,setDescription] = useState("");
  const [nom,setNom] = useState("");
  const [productIsAService,setProductIsAService] = useState(false);
  const [quantity,setQuantity] = useState(0);
  const [price,setPrice] = useState(0);


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
      getMyProducts(JSON.parse(info).token)
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error("cannot get product")
      })
      .then((data)=>{setProducts(data)})
      .catch((error)=>{console.log("a problem occured")})
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
      <ProductBar handleOpenModal={handleOpenModal} />
      <div className=" flex flex-wrap gap-1 min-h-screen bg-base-200 m-[20px]">
        {products.map((element,index) => {
          return (
            <CardProduct
              description={element.description}
              name={element.name}
              productIsAService={element.productIsAService}
              quantity={element.quantity}
              idCompany={element.idCompany}
              idProduct={element._id}
              price={element.price}
              setProducts={setProducts}
              createdAt={element.createdAt}
              key={index}
            />
          );
        })}
      </div>
      <Footer />

      {isModalOpen && <ModalProduct
       setProducts={setProducts}
        handleCloseModal={handleCloseModal}
        description={description}
        setDescription={setDescription}
        nom={nom}
        setNom={setNom}
        productIsAService={productIsAService}
        setProductIsAService={setProductIsAService}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setPrice={setPrice} />}
    </main>
  );
}

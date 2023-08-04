import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardProduct from "@/components/CardProduct/CardProduct";
import ProductBar from "@/components/ProductBar/ProductBar";
import Navbar2 from "@/components/Navbar2/Navbar2";

export default function Product() {
const data=[{name:"panier de fruit",description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip"
,productIsAService:false,quantity:20,idCompany:"sf5465s4f",price:20,createdAt:"10/02/2023"},
{name:"panier de fruit",description:"dedans des mangues et des mangos",productIsAService:false,quantity:20,idCompany:"sf5465s4f",price:20,createdAt:"10/02/2023"},
{name:"panier de fruit",description:"dedans des mangues et des mangos",productIsAService:false,quantity:20,idCompany:"sf5465s4f",price:20,createdAt:"10/02/2023"}]
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Navbar2 />
    <ProductBar/>
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 m-[20px]">
{data.map((element)=>{
   return <CardProduct 
   description={element.description}
   name={element.name}
   productIsAService={element.productIsAService}
   quantity={element.quantity}
   idCompany={element.idCompany}
   price={element.price}
   createdAt={element.createdAt}/>;
})}
</div>
      <Footer/>
    </main>
  );
}

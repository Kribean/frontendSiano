import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomerBar from "@/components/CustomerBar/CustomerBar";
import CardCustomer from "@/components/CardCustomer/CardCustomer";
import Navbar2 from "@/components/Navbar2/Navbar2";

export default function CustomerContact() {
const data=[{name:"Jhon"},
{name:"Eva"},
{name:"Zaz"}]
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Navbar2 />
    <CustomerBar/>
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 m-[20px]">
{data.map((element)=>{
   return <CardCustomer 
   name={element.name}
   idCustomer={element.idCustomer}/>;
})}
</div>
      <Footer/>
    </main>
  );
}

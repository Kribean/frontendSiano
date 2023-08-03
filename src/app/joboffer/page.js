import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardJobOffer from "@/components/CardJobOffer/CardJobOffer";
import Link from "next/link";

export default function JobOffer() {
  const data=[{title:"développeur",description:"développeur en C++", contact:"06457 6545 544"},
  {title:"développeur",description:"développeur en Python", contact:"06457 6545 544"},
  {title:"développeur",description:"développeur en JS", contact:"06457 6545 544"},
  {title:"développeur",description:"développeur en C++", contact:"06457 6545 544"},
  {title:"développeur",description:"développeur en Python", contact:"06457 6545 544"},
  {title:"développeur",description:"développeur en JS", contact:"06457 6545 544"}]
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200">
{data.map((element)=>{
   return <CardJobOffer title={element.title} description={element.description} contact={element.contact}/>;
})}
</div>
      <Footer/>
    </main>
  );
}

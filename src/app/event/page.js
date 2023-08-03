import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardEvent from "@/components/CardEvent/CardEvent";

export default function Event() {
  const data=[{title:"Rassemblement pour la découverte de la faune",description:"l'entreprise Kfé vous présentera les merveilles de la forêt vatable", date:"10 Octobre 2023"},
  {title:"Rassemblement pour la découverte de la faune",description:"l'entreprise Kfé vous présentera les merveilles de la forêt vatable", date:"10 Novembre 2023"},
  {title:"Rassemblement pour la découverte de la faune",description:"l'entreprise Kfé vous présentera les merveilles de la forêt vatable", date:"10 Décembre 2023"},
  {title:"Rassemblement pour la découverte de la faune",description:"l'entreprise Kfé vous présentera les merveilles de la forêt vatable", date:"10 Octobre 2023"},
  {title:"Rassemblement pour la découverte de la faune",description:"l'entreprise Kfé vous présentera les merveilles de la forêt vatable", date:"10 Octobre 2023"}]
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200">
{data.map((element)=>{
   return <CardEvent title={element.title} description={element.description} date={element.date}/>;
})}
</div>
      <Footer/>
    </main>
  );
}

'use client'

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardEvent from "@/components/CardEvent/CardEvent";
import { useState,useEffect } from "react";
import { getAllEvents } from "@/services/api";

export default function Event() {
  const [isActual,setIsActual] = useState(false);
  const [dataCalendar, setDataCalendar] = useState([]);
  const [dataCalendarModified, setDataCalendarModified] = useState([]);

  useEffect(()=>{
    const info = localStorage.getItem("informationSiano");

      getAllEvents("")
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error("no event, error")
      })
      .then((data)=>{setDataCalendar(data);setDataCalendarModified(data)})
      .catch((error)=>{console.log("oops mistake on fetch")})
    
  },[])

  const getOnlyEventofToday = ()=>{
    
    if(!isActual)
    {
      const dataToday = dataCalendar.filter((element)=>{  const today = new Date().toISOString().split('T')[0]; 
      const  elementDay = new Date(element.startAt).toISOString().split('T')[0];
      return elementDay === today;});

      setDataCalendarModified(dataToday )
    }else{
      setDataCalendarModified(dataCalendar )
    }
    setIsActual(!isActual)
  }
  return (
    <main className="flex relative min-h-screen flex-col w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      <div className="form-control">
          <label className="label cursor-pointer">
<div className="flex flex-row jsutify-end m-[20px]">
<span className="label-text font-bold mx-[10px]">{isActual?"Evènements du jour":"Tous les évènements"}</span>
            <input type="checkbox" className="toggle" onChange={getOnlyEventofToday} checked={isActual} />
</div>
          </label>
        </div>
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 text-neutral m-[20px]">
      {dataCalendarModified?.length==0? <p className="text-neutral">Il n'y a pas encore d'évènements 🙂</p> :<div className="flex flex-wrap gap-2 w-full">
        {dataCalendarModified?.map((element,index)=> <CardEvent key={index} 
        companyName={element.companyName}
        title= {element.title}
        description={element.description}
        place={element.place}
        duration= {element.duration}
        startAt={element.startAt}
        price={element.price}
        categoryText={element?.category[0]}
        emailContact={element.emailContact}
        phoneContact={element.phoneContact} 
        isAdmin={false} />)}
      </div>}
      </div>
      <Footer />
    </main>
  );
}

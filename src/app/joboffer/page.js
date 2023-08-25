'use client'

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardJob from "@/components/CardJob/CardJob";
import { useState,useEffect } from "react";
import { getAllJobs } from "@/services/api";

export default function JobOffer() {

  const [dataJob, setDataJob] = useState([]);

  useEffect(()=>{
    const info = localStorage.getItem("informationSiano");

    getAllJobs("")
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error("no event, error")
      })
      .then((data)=>{setDataJob(data)})
      .catch((error)=>{console.log("oops mistake on fetch")})
    
  },[])


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
          </label>
        </div>
      <div className=" flex flex-wrap gap-4 min-h-screen bg-base-200 text-neutral m-[20px]">
      {dataJob?.length==0? <p className="text-neutral">Il n'y a pas encore d'évènements 🙂</p> :<div className="flex flex-wrap gap-2 w-full">
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
        isAdmin={false} />)}
      </div>}
      </div>
      <Footer />
    </main>
  );
}

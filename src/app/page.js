"use client"

import HomeBaner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/Navbar/Navbar";
import CardCompany from "@/components/CardCompany/CardCompany";
import StatComponent from "@/components/StatComponent/StatComponent";
import Notification from "@/components/Notification/Notification";
import Footer from "@/components/Footer/Footer";
import { getTenCompanies,getTenUpgradeCompanies,getNotification,getFigure } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {

   const [tenCompanies,setTenCompanies] =useState([]);
   const [tenUpgradeCompanies,setTenUpgradeCompanies] =useState([]);
   const [notification,setNotification] =useState();
   const [statistic,setStatistic] =useState([]);

   useEffect(()=>{

      getTenCompanies()
        .then(response => {    if (!response.ok) {
          throw new Error('Erreur lors de l\'appel API');
        }
        return response.json();})
        .then(data => {
          setTenCompanies(data);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite :', error);
        });

        getTenUpgradeCompanies()
        .then(response => {    if (!response.ok) {
          throw new Error('Erreur lors de l\'appel API');
        }
        return response.json();})
        .then(data => {
          setTenUpgradeCompanies(data);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite :', error);
        });

        getNotification()
        .then(response => {    if (!response.ok) {
          throw new Error('Erreur lors de l\'appel API');
        }
        return response.json();})
        .then(data => {
          setNotification(data[0]);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite :', error);
        });

        getFigure()
        .then(response => {    if (!response.ok) {
          throw new Error('Erreur lors de l\'appel API');
        }
        return response.json();})
        .then(data => {
          setStatistic(data);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite :', error);
        });


   },[])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
<Notification notification={notification}/>
      <HomeBaner />

      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-lg lg:text-2xl ">
          Les meilleurs entreprises locales
        </h2>
        <div className="flex flex-wrap gap-4  p-[20px]">
        {tenUpgradeCompanies.map((element,index)=><CardCompany key={index} company={element} />)}
        </div>
      </div>
      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-lg lg:text-2xl ">Les entreprises locales</h2>
        <div className="flex flex-wrap gap-4  p-[20px]">
          {tenCompanies.map((element,index)=><CardCompany key={index} company={element} />)}
        </div>
      </div>

      <div className="flex flex-col w-full justify-start">
        <h2 className="font-bold text-lg lg:text-2xl ">Siano en quelques chiffres</h2>
        <div className="flex">
          <StatComponent statistic={statistic} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

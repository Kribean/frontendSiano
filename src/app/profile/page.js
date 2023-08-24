"use client"

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Navbar2 from "@/components/Navbar2/Navbar2";
import FormProfile from "@/components/FormProfile/FormProfile";
import { useEffect, useState } from "react";
import { getProfile } from "@/services/api";

export default function Profile() {

  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [adress, setAdress] = useState('');
  const [description, setDescription] = useState('');
  const [chloreDecCertif, setChloreDecCertif] = useState(false);
  const [haveAPhysicalSite, setHaveAPhysicalSite] = useState(false);
  const [thematicCompany, setThematicCompany] = useState('');
  const [email, setEmail] = useState('');
  const [siren, setSiren] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');

  
  useEffect(()=>{

    const info = localStorage.getItem("informationSiano");

    if(JSON.parse(info))
    {
      getProfile(JSON.parse(info).companyId,JSON.parse(info).token)
      .then((data)=>{
          if(data.ok)
          {
              return data.json()
          }
          throw new Error ('profile not covered') 
      })
      .then((data)=>{
       
        setCompanyName(data[0].companyName)
        setName(data[0].nameLeader)
        setFirstname(data[0].firstNameLeader)
        setPhoneNumber(data[0].phoneNumber)
        setPostalCode(data[0].postalCode)
        setAdress(data[0].adress)
        setDescription(data[0].description)
        setChloreDecCertif(data[0].chloreDecCertif)
        setHaveAPhysicalSite(data[0].haveAPhysicalSite)
        setThematicCompany(data[0].thematicCompany)
        setEmail(data[0].email)
        setSiren(data[0].siren)
        setFacebook(data[0].socialNetworkFb)
        setTwitter(data[0].socialNetworkTwitter)
        setLinkedIn(data[0].socialNetworkLink)
        setWhatsapp(data[0].socialNetworkWhatsapp)
        setInstagram(data[0].socialNetworkInsta)
        
      })
      .catch((error)=>{console.log(error)})
    }


},[])
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0 text-neutral">
        <Navbar />
      </div>
      <Navbar2 />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-xl lg:text-5xl font-bold">Mon profil</h1>
            <p className="py-6">
              Bel bonjou! Nou ka espéré projè ta la ka édé'w! Si ou ni bagay pou
              di nou, pa ézité krié nou an lè rézo nou an 💻🌱🏢
            </p>
          </div>
          <FormProfile
            companyName={companyName}
            setCompanyName={setCompanyName}
            name={name}
            setName={setName}
            firstname={firstname}
            setFirstname={setFirstname}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
            email={email}
            setEmail={setEmail}
            siren={siren}
            setSiren={setSiren}
            facebook={facebook}
            setFacebook={setFacebook}
            twitter={twitter}
            setTwitter={setTwitter}
            linkedIn={linkedIn}
            setLinkedIn={setLinkedIn}
            whatsapp={whatsapp}
            setWhatsapp={setWhatsapp}
            instagram={instagram}
            setInstagram={setInstagram}
            adress={adress}
            description={description}
            chloreDecCertif={chloreDecCertif}
            haveAPhysicalSite={haveAPhysicalSite}
            thematicCompany={thematicCompany}
            setAdress={setAdress}
            setDescription={setDescription}
            setChloreDecCertif={setChloreDecCertif}
            setHaveAPhysicalSite={setHaveAPhysicalSite}
            setThematicCompany={setThematicCompany}
          />

        </div>
      </div>

      <Footer />
    </main>
  );
}

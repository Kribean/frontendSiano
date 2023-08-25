"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FormStep from "@/components/LogInComponents/FormStep";
import ChartStep from "@/components/LogInComponents/ChartStep";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createAccount } from "@/services/api";

export default function LogIn() {
  const router = useRouter();
  const [goToChart, setGoToChart] = useState(false);

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
  const [password, setPassword] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');
  const [mistakeIsDone,setMistakeIsDone] = useState(false)

  const validateForm = ()=>{
    const body={companyName,
      name,
      firstname,
      phoneNumber,
      postalCode,
      adress,
      description,
      chloreDecCertif,
      haveAPhysicalSite,
      thematicCompany,
    email,siren,password,facebook,twitter,linkedin,whatsapp,instagram,conventionValidated:true};
    createAccount(body)
    .then((data)=>{
      if(data.ok)
      {
        return router.push('/login')
      }
      setMistakeIsDone(true);
      throw new Error(" A mistake has been done");
    })
    .catch((error)=>{
      setMistakeIsDone(true);
      console.log(error)})
    
  }
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full text-neutral">
      <div className="w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full block lg:hidden fixed bg-light z-[100] bottom-0">
        <Navbar />
      </div>
      {goToChart ? 
      <ChartStep setGoToChart={setGoToChart} validateForm={validateForm} mistakeIsDone={mistakeIsDone} /> :
            <FormStep
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
            password={password}
            setPassword={setPassword}
            facebook={facebook}
            setFacebook={setFacebook}
            twitter={twitter}
            setTwitter={setTwitter}
            linkedin={linkedin}
            setLinkedIn={setLinkedIn}
            whatsapp={whatsapp}
            setWhatsapp={setWhatsapp}
            instagram={instagram}
            setInstagram={setInstagram}
            setGoToChart={setGoToChart}
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
          />}
      <Footer />
    </main>
  );
}

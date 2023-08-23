"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logToAccount } from "@/services/api";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [mistakeIsDone,setMistakeIsDone] = useState(false)

  const goToMySession =()=>{
const body={password,email}
    logToAccount(body)
    .then((data)=>{
      if(data.ok)
      {
        setMistakeIsDone(false);
        return data.json()

      }
      throw new Error("cannot log in")
    })
    .then((data)=>{
      localStorage.setItem('informationSiano',JSON.stringify(data))
      return router.push("/company-session")})
    .catch((error)=>{setMistakeIsDone(true);console.log(error)})
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full text-neutral">
      <Navbar />
      {mistakeIsDone&&<div className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! Task failed successfully.</span>
</div>}
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-xl lg:text-5xl font-bold">Se connecter</h1>
      <p className="py-6">Bienvenue sur notre page de connexion Siano - Un pont virtuel pour relier les entreprises locales et la communauté des Antilles vers un développement économique solide ! 🌴🚀💼</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="input input-bordered" />
          <label className="label">
            <p className="text-neutral">Mot de passe perdu? contactez nous</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={goToMySession} className="btn btn-primary">Se connecter</button>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </main>
  );
}

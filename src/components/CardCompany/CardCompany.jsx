"use client";
import Image from "next/image";
import { useState } from "react";

export default function CardCompany({company}) {

  const [seeText,setSeeText]=useState(false);

  return (
    <div className="card h-fit w-full lg:w-96 bg-base-100 shadow-xl text-sm lg:not-italic">
      <figure className="w-full h-[100px] relative">
        <Image
          src="/caribean-tribe.png"
          alt="illustration caribéenne"
          className="w-full"
          width={500}
          height={50}
          style={{objectFit: "cover"}}
        />
                <div className="absolute flex flex-col top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                {company.label=="A+"&&<div className="badge badge-success">Excellente entreprise</div>}
                {company.label=="A"&&<div className="badge badge-success">Entreprise fortement recommandée</div>}
                {company.label=="B"&&<div className="badge badge-info">Entreprise bien vue</div>}
                {company.label=="C"&&<div className="badge badge-secondary">Entreprise prometteuse</div>}
          <h2 className="text-white text-lg lg:text-2xl font-bold">{company.companyName}</h2>
        </div>
      </figure>
      <div className="card-body h-fit ">
        <h3 className="card-title truncate text-sm lg:not-italic">
            Produit:
        </h3>
        <div className="badge h-fit badge-info"><span className="font-bold m-2">{company?.thematicCompany} </span> </div>
        {company.listOfProduct.map((element,index)=>{return <div key={index} className="badge badge-neutral">{element.name}</div>})}
       <div className={`${seeText?"h-fit":"h-[72px]"} `}>
<div className="flex flex-row justify-center content-center place-items-center">
<label className="swap swap-flip font-bold text-2xl mx-4 ">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" value={seeText} onChange={(event)=>{setSeeText(!seeText);event.stopPropagation();}} />
  
  <div className="swap-on">-</div>
  <div className="swap-off">+</div>
</label>
       <p className="font-bold">Description:</p>
</div>
       <p className={`text-neutral text-sm lg:not-italic break-words ${seeText?"":"line-clamp-2  text-ellipsis overflow-hidden ..."} `}> {company.description}</p>
       </div>
       <p  className="text-neutral" ><span className="font-bold">Adresse:</span> {company.adress}</p>
       <p  className="text-neutral" ><span className="font-bold">Code postal:</span> {company.postalCode}</p>
                  <p  className="text-neutral" ><span className="font-bold">Téléphone:</span> {company.phoneNumber}</p>
                  <button  className="btn btn-neutral text-sm break-all" ><span className="font-bold"></span> {company.email}</button>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}

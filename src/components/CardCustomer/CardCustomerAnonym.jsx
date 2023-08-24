"use client"
import Image from "next/image";
import { AddAndgetMyCustomers,getMyConsumers } from "@/services/api";
import { useState } from "react";
export default function CardCustomerAnonym(props) {
  const [allowAdd, setAllowAdd] = useState(true)

  const addContact = ()=>{
const info = localStorage.getItem('informationSiano')

if(JSON.parse(info))
{
  AddAndgetMyCustomers(props.idCustomer, JSON.parse(info).token)
  .then((data)=>{
    if(data.ok)
    {
      return data.json()
    }
    throw new Error ("a problem occurs on returning customers")
  })
  .then((data)=>{
    setAllowAdd(false)
    getMyConsumers(JSON.parse(info).token)
    .then((data)=>{
      if(data.ok)
      {
        return data.json();
      }
      throw new Error ("cannot reload clients")
    })
    .then((data)=>{props.setDataMyClient(data.consumers);
      props.setListOfContact(data.listOfContact);
    props.setDataCustomer(props.dataCustomer.filter((element)=>element._id!=props.idCustomer))})
  })
  .catch((error)=>console.log(error))
}


  }

  return (
    <div className="card w-full lg:w-96 h-[250px] bg-neutral text-neutral-content shadow-xl flex-row">
      <div className="flex flex-col p-2 justify-between">
        <Image
          src="BlackWM.svg"
          width={100}
          height={100}
          alt="illustration siano"
        />
        {allowAdd&&<button onClick={addContact} className="btn btn-info">Ajouter et voir le contact</button>}
      </div>
      <div className="flex flex-col justify-between p-4 ">
        <h2 className="text-lg font-bold">{props.name}</h2>
        <div >
          <p>Téléphone : <span className="blur-sm">4586766</span></p>
          <p>Mail: <span className="blur-sm">jhon@doe</span></p>
          <p>Contact: <span className="blur-sm">1 rue du danmyétè</span></p>
        </div>
      </div>
    </div>
  );
}

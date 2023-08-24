"use client"
import CardCustomerAnonym from "../CardCustomer/CardCustomerAnonym"
import { useEffect,useState } from "react";
import { getAllCustomers } from "@/services/api";


export default function ModalCustomer(props){
  const [dataCustomer, setDataCustomer] = useState([]);
  useEffect(()=>{
    const info = localStorage.getItem('informationSiano');
    if(JSON.parse(info))
    {
      getAllCustomers(JSON.parse(info).thematicCompany,JSON.parse(info).token)
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error ('something wrong hapen')
      })
      .then((data)=>{setDataCustomer(data.filter((element)=>{return !props.listOfContact?.includes(element._id)}))})
      .catch((error)=>{console.log("a mistake happen: ",error)})
    }
    },[])


    return(
        <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Trouver des clients</h3>


<div className=" flex flex-wrap gap-2 m-4 text-neutral">
        {dataCustomer.map((element,index) => {
  return (
    <CardCustomerAnonym key={index} name={element.userName} idCustomer={element._id} setDataMyClient={props.setDataMyClient} setListOfContact={props.setListOfContact} dataCustomer={dataCustomer} setDataCustomer={setDataCustomer} />
  );
        })}
        {dataCustomer.length==0&&<p className="text-bold text-neutral">Oops! nous n'avons plus ou pas encore de nouveau contact à vous proposer! Aidez nous à avoir d'autre contact en demandant à tous vos proches d'ajouter l'application téléphone Siano disponible sur Google Play Store</p>}
      </div>


<div className="flex flex-row gap-4 justify-end m-5">
            <button className="btn btn-error" onClick={props.handleCloseModal}>Fermer</button>
</div>
          </div>
        </div>
        </>
    )
}
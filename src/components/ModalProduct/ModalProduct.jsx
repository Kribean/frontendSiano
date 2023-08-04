"use client"
import { useState } from "react"
export default function ModalProduct(props){

    const [isAService,setIsAService] = useState(false);

    return(
        <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Editer produit</h3>

            <div className="form-control">
          <label className="label">
            <span className="label-text">Nom du produit ou  du service</span>
          </label>
          <input type="text" placeholder="Taper le nom" className="input input-bordered"/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea placeholder="Description obligatoire" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Prix en euros</span>
          </label>
          <input className="input input-bordered w-[100px]" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Vendez-vous un service?</span>
          </label>
          <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">{isAService?"Oui":"Non"}</span> 
    <input type="checkbox"  className="toggle" onChange={()=>setIsAService(!isAService)} checked={isAService} />
  </label>
</div>
        </div>

       {!isAService && <div className="form-control">
          <label className="label">
            <span className="label-text">Quantité disponible</span>
          </label>
          <input type="number" className="input input-bordered w-[100px]" />
        </div>}
<div className="flex flex-row gap-4 justify-end m-5">

            <button className="btn btn-primary" onClick={()=>{}}>Créer</button>
            <button className="btn btn-error" onClick={props.handleCloseModal}>Fermer</button>
</div>
          </div>
        </div>
        </>
    )
}
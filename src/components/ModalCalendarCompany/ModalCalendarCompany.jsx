"use client"
import CardCustomerAnonym from "../CardCustomer/CardCustomerAnonym"
import DatePicker  from  "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function ModalCalendarCompany(props){
  const [startDate, setStartDate] = useState(new Date());

    return(
        <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="modal-box">
          <div className="flex flex-col w-full">
        <h2>Créer évènement</h2>
        <DatePicker className="input input-bordered" dateFormat="dd/MM/yyyy" locale="fr" selected={startDate} onChange={(date) => {console.log(date,"opoioj");setStartDate(date)}} />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Durée de l'évènement (en heure)</span>
          </label>
          <input type="text" placeholder="Durée de l'évènement" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Titre</span>
          </label>
          <input type="text" placeholder="titre" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea type="text" placeholder="description" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Catégorie</span>
          </label>
          <input type="text" placeholder="Catégorie" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Prix en euro</span>
          </label>
          <input type="text" placeholder="prix en euro" className="input input-bordered" />
        </div>

        <div className="flex flex-row gap-4 justify-end m-5">
        <button className="btn btn-success" onClick={()=>{}}>Créer</button>
            <button className="btn btn-error" onClick={props.handleCloseModal}>Fermer</button>
</div>
          </div>
        </div>
        </>
    )
}
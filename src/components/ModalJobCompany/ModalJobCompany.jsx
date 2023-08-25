"use client"

import DatePicker  from  "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
import { useState } from "react";
import { createJob } from "@/services/api";
import "react-datepicker/dist/react-datepicker.css";

export default function ModalJobCompany(props){
  

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
   const [place,setPlace] = useState("");


  const allowedCharacters = /^[A-Za-z0-9\s]*$/; // Caractères alphanumériques et espaces autorisés

const sanitizeInput=(inputValue)=> {
  return inputValue.replace(/[^A-Za-z0-9\s]/g, ''); // Remplacer les caractères non autorisés par une chaîne vide
}

const handlePlaceChange = (event) => {
  const newValue = event.target.value;

  if (allowedCharacters.test(newValue)) {
    setPlace(newValue);
  } else {
    // Si des caractères non autorisés sont saisis, ignorez-les
    setPlace(sanitizeInput(newValue));
  }
};

const allowedCharactersNi = /^[A-Za-z0-9\s.,!?'"()&@$%#*-]*$/;
const handleDescriptionOrTitleChange = (event,funcSet) => {
  const userInput = event.target.value;

  // Vérifier si les caractères saisis sont autorisés
  if (allowedCharactersNi.test(userInput)) {
    funcSet(userInput);
  }}

  const createJobAndClose = ()=>{

if(title.length>3&&description.length>5&&place.length>3)
{
const info = localStorage.getItem("informationSiano");

if(JSON.parse(info))
{
  const body = {title,description,place,
  emailContact:JSON.parse(info).email,
  phoneContact:JSON.parse(info).phoneNumber,
  category:JSON.parse(info).thematicCompany,
  companyName:JSON.parse(info).companyName
}

createJob(body,JSON.parse(info).token)
.then((data)=>{
  if(data.ok)
  {
    return data.json()
  }
})
.then((data)=>{
  props.setDataJob(data);
  props.handleCloseModal()

})
}


}
  }
    return(
        <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="modal-box">
          <div className="flex flex-col w-full">
        <h2>Créer une offre d'emploi</h2>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Où à lieu l'évènement? (ne mettez pas d'accent ou de virgule)</span>
          </label>
          <input type="text" value={place} onChange={handlePlaceChange} placeholder="Lieu de travail" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Titre (ne mettez pas d'accent ou de virgule)</span>
          </label>
          <input type="text" value={title} onChange={(event)=>{handleDescriptionOrTitleChange(event,setTitle)}} placeholder="titre" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description (ne mettez pas de caractères spéciaux)</span>
          </label>
          <textarea type="text" value={description} onChange={(event)=>{handleDescriptionOrTitleChange(event,setDescription)}} rows={3} maxLength={255} placeholder="description" className="input input-bordered" />
        </div>

        <div className="flex flex-row gap-4 justify-end m-5">
        <button className="btn btn-success" onClick={createJobAndClose}>Créer</button>
            <button className="btn btn-error" onClick={props.handleCloseModal}>Fermer</button>
</div>
          </div>
        </div>
        </>
    )
}
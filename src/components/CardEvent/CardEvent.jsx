import Image from "next/image";
import { deleteEvent } from "@/services/api";
export default function CardEvent(props) {
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  }

  const deleteCardEvent = ()=>{
    const info = localStorage.getItem("informationSiano")

    if(JSON.parse(info))
    {
      deleteEvent (props.idEvent,JSON.parse(info).token)
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error ("something bad happen")
      })
      .then((data)=>{props.setDataCalendar(data)})
      .catch((error)=>{console.log("should look at event")})

    }
  }
  return (
    <div className="card w-full lg:w-96 bg-base-100 h-fit shadow-xl">
      <figure className="w-full h-[100px] relative">
        <Image
          src="/mq-landscape.png"
          alt="illustration caribéenne"
          className="w-full"
          width={500}
          height={50}
          style={{objectFit: "cover"}}
        />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{formatDate(props.startAt)}</h2>
        </div>
      </figure>
      <div className="card-body text-neutral ">
        <h3 className="card-title truncate">
           Titre: {props.title}
        </h3>
        <p> <span className="card-title">Entreprise:</span> {props.companyName}</p>
        <p><span className="card-title">Catégorie:</span> {props.categoryText}</p>
        <p><span className="card-title">Durée de l'événement (en heure):</span> 2 h</p>
        <p><span className="card-title">Prix:</span> {props.price} euro</p>
        <p className="break-all text-neutral">
       <span className="card-title">Lieu:</span> {props.place}</p>
       <p className="break-all text-neutral">
       <span className="card-title">Description:</span> {props.description}</p>
       <h3 className="card-title">Nous contacter</h3>
       <p className="text-neutral text-lg">Email: {props.emailContact}</p>
       <p className="text-neutral text-lg">Téléphone: {props.phoneContact}</p>
      </div>

      {props.isAdmin&&<button onClick={deleteCardEvent} className="btn btn-error w-[100px] m-[10px]">Supprimer</button>}
    </div>
  );
}

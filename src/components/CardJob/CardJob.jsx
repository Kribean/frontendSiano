import Image from "next/image";
import { deleteJob } from "@/services/api";

export default function CardJob(props) {

  const deleteCardJob = ()=>{
    const info = localStorage.getItem("informationSiano")

    if(JSON.parse(info))
    {
      deleteJob (props.idJob,JSON.parse(info).token)
      .then((data)=>{
        if(data.ok)
        {
          return data.json()
        }
        throw new Error ("something bad happen")
      })
      .then((data)=>{props.setDataJob(data)})
      .catch((error)=>{console.log("should look at event")})

    }
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
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
          <h2 className="text-white text-2xl break-all font-bold">Titre: {props.title}</h2>
        </div>
      </figure>
      <div className="card-body text-neutral ">
        <h3 className="card-title truncate">
        <span className="card-title">Entreprise:</span> {props.companyName}
        </h3>
        <p><span className="card-title">Offre déposée le:</span> {formatDate(props.createdAt)}</p>
        <p><span className="card-title">Catégorie:</span> {props.category}</p>
        <p><span className="card-title">Lieu:</span> {props.place}</p>
       <p className="break-all text-neutral">
       <span className="card-title">Description:</span> {props.description}</p>
       <h3 className="card-title">Nous contacter</h3>
       <p className="text-neutral text-lg">Email: {props.emailContact}</p>
       <p className="text-neutral text-lg">Téléphone: {props.phoneContact}</p>
      </div>

      {props.isAdmin&&<button className="btn btn-error w-[100px] m-[10px]" onClick={deleteCardJob}>Supprimer</button>}
    </div>
  );
}

import Image from "next/image";

export default function CardEvent(props) {
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
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
          <h2 className="text-white text-2xl font-bold">{props.date}</h2>
        </div>
      </figure>
      <div className="card-body ">
        <h3 className="card-title truncate">
           Titre: {props.title}
        </h3>
        <p> <span className="card-title">Entreprise:</span> Koulirou</p>
        <p><span className="card-title">Catégorie:</span> agriculture</p>
        <p><span className="card-title">Durée de l'évènement (en heure):</span> 2 h</p>
        <p><span className="card-title">Prix:</span> 5 euro</p>
       <p className="break-all">
       <span className="card-title">Description:</span> {props.description}</p>
      </div>

      {props.isAdmin&&<button className="btn btn-error w-[100px] m-[10px]">Supprimer</button>}
    </div>
  );
}

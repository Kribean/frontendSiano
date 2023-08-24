import Image from "next/image";

export default function CardCustomer(props) {
  return (
    <div className="card w-full lg:w-96 h-[250px] bg-warning text-warning-content shadow-xl flex-row">
      <div className="flex flex-col p-2 justify-start">
        <Image
          src="BlackWM.svg"
          width={100}
          height={100}
          alt="illustration siano"
        />
      </div>
      <div className="flex flex-col justify-between p-4">
        <h2 className="text-lg font-bold">{props.name}</h2>

        <p>Téléphone : {props.phoneNumber}</p>
        <p>Mail: {props.email==""?"non renseigné":props.email}</p>
        <p>Adresse: {props.adress==""?"non renseigné":props.adress}</p>
      </div>
    </div>
  );
}

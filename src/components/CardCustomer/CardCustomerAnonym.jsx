import Image from "next/image";

export default function CardCustomerAnonym(props) {
  return (
    <div className="card w-full lg:w-96 h-[250px] bg-primary text-primary-content shadow-xl flex-row">
      <div className="flex flex-col p-2 justify-start">
        <Image
          src="BlackWM.svg"
          width={100}
          height={100}
          alt="illustration siano"
        />
      </div>
      <div className="flex flex-col justify-between p-4 ">
        <h2 className="text-lg font-bold">{props.name}</h2>
        <div className="blur-sm">
          <p>Téléphone : 4586766</p>
          <p>Mail: jhon@doe</p>
          <p>Adresse: 1 rue du danmyétè</p>
        </div>
      </div>
    </div>
  );
}

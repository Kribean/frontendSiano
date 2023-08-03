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
      <div className="card-body h-[150px]">
        <h3 className="card-title truncate">
            Titre: {props.title}
        </h3>
       <p className="break-all">
        Description: {props.description}</p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function CardCompany(props) {
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure className="w-full h-[100px] relative">
        <Image
          src="/caribean-tribe.png"
          alt="illustration caribéenne"
          className="w-full"
          width={500}
          height={50}
          style={{objectFit: "cover"}}
        />
                <div className="absolute flex flex-col top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                <div className="badge badge-success">fortement recommendée</div>
          <h2 className="text-white text-2xl font-bold">{props.companyTitle}</h2>
        </div>
      </figure>
      <div className="card-body ">
        <h3 className="card-title truncate">
            Produit: {props.companyProducts}
        </h3>
       <p className="truncate break-all text-ellipsis overflow-hidde">Description entreprise ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff dddddddddddddddddddddddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff dddddddddddddddddddddddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff dddddddddddddddddddddddddddddddddddddddddddddddd</p>
       <button  className="btn btn-outline btn-info" >Adresse: 5 Rue Bertrand Panouse, 31170 Tournefeuille</button>
                  <button  className="btn btn-outline btn-info" >Téléphone: 0656585</button>
                  <button  className="btn btn-outline btn-info" >Mail: ramael.bruno@gmail.com</button>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

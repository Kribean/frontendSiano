import Image from "next/image";

export default function CardCustomer(props) {
  return (
    <div className="card w-full lg:w-96 h-[250px] bg-base-100 shadow-xl">

          <h2 className="text-md font-bold">{props.name}</h2>


        <h3 className="card-title truncate">
           Contact : 4586766876878
        </h3>
        <button className="btn btn-primary blur-sm"><p className="">4586766876878</p></button>
      <button className="btn btn-primary m-5">Contacter</button>
    </div>
  );
}

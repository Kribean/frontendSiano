import Image from "next/image";
import Link from "next/link";

export default function ProductBar(props) {
  return (
    <div className="flex flex-row m-[20px]">
      <button onClick={props.handleOpenModal} className="btn btn-primary">Créer produit</button>
    </div>
  );
}

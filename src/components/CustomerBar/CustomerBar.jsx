import Image from "next/image";
import Link from "next/link";

export default function CustomerBar(props) {
  return (
    <div className="flex flex-row m-[20px]">
      <button onClick={props.handleOpenModal} className="btn btn-primary">Rechercher un contact</button>
    </div>
  );
}

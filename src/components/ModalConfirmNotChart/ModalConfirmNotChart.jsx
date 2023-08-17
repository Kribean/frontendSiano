import Link from "next/link";


export default function ModalConfirmNotChart(props)
{
    return(
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Es ou lé kontinué? </h3>
    <p className="py-4">Ou kay fèmen charte la. Es ou sur sa ou ka fè?</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <Link href="/" className="btn btn-error">Wi, man sur</Link>
      <button className="btn btn-neutral" onClick={props.handleCloseModal}>Non, man pa sur</button>
    </div>
</div>
</div>
</>
    )
}
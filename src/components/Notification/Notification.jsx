import Link from "next/link";

export default function Notification({notification}){

    return(
      <div className={`alert ${notification?.typeOfNotification === 'info' ? 'alert-info' : ''} ${notification?.typeOfNotification === 'error' ? 'alert-error' : ''} ${notification?.typeOfNotification === 'success' ? 'alert-success' : ''}`}>
{notification?.typeOfNotification=='info'&&        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>}
        {notification?.typeOfNotification=="success"&&<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        {notification?.typeOfNotification=="error"&&<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        <h2 className="text-neutral text-bold">{notification?.title}</h2>
        <span>
          {notification?.description}
        </span>
        {notification?.appearUrl&& <Link href={notification?.url} target="_blank" className="btn btn-neutral w-[100px]">Cliquer</Link>}
      </div>
    )
}
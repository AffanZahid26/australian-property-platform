import Link from "next/link";

/** Expanding JT → JT ALLEN logo (matches live mainlogo clip) */
export function MainLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mainlogo w-[40px] overflow-hidden hover:w-[150px] transition-all duration-300 ${className}`}
    >
      <Link href="/" className="w-[150px] block" title="JTAllen Logo">
        <svg
          className="w-[150px]"
          width="215"
          height="30"
          viewBox="0 0 215 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="JT Allen"
        >
          <g className="mainlogo--jt">
            <path
              className="mainlogo--j"
              d="M27.413 0V17.6085C27.413 21.7378 24.2642 24.468 19.4994 24.468C16.036 24.468 12.8871 22.9473 10.9964 20.5713V26.9621C13.4366 28.8729 17.1748 30 20.8767 30C28.5121 30 33.6312 25.402 33.6312 18.428V0H27.413Z"
              fill="#FFFFFF"
            />
            <path
              className="mainlogo--t"
              d="M26.5682 0V5.29938H37.6705V29.61H43.8886V5.29938H54.9512V0H26.5682Z"
              fill="#FFFFFF"
            />
          </g>
          <g className="mainlogo--allen">
            <path
              d="M81.4795 0H76.0097L62.0333 29.0267V29.61H68.6853L71.404 23.5341H86.0853L88.8003 29.61H95.4523V29.0267L81.4795 0ZM73.7647 18.2347L78.7645 7.01336L83.7246 18.2347H73.7647Z"
              fill="#FFFFFF"
            />
            <path d="M99.3929 0V29.61H123.6V24.3142H105.611V0H99.3929Z" fill="#FFFFFF" />
            <path d="M127.537 0V29.61H151.745V24.3142H133.755V0H127.537Z" fill="#FFFFFF" />
            <path
              d="M155.682 0V29.61H181.462V24.3142H161.9V17.104H179.849V11.8082H161.9V5.29938H181.462V0H155.682Z"
              fill="#FFFFFF"
            />
            <path
              d="M208.937 0V20.532L192.25 0H186.187V29.61H192.25V9.07801L208.937 29.61H215V0H208.937Z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}

/** Compact JT mark for mobile header */
export function MobileLogo() {
  return (
    <Link href="/" className="logo top-[10px] absolute z-[1] w-[60px]" title="JTAllen Logo">
      <svg width="55" height="30" viewBox="10 0 45 30" fill="none" aria-label="JT Allen">
        <path
          d="M27.413 0V17.6085C27.413 21.7378 24.2642 24.468 19.4994 24.468C16.036 24.468 12.8871 22.9473 10.9964 20.5713V26.9621C13.4366 28.8729 17.1748 30 20.8767 30C28.5121 30 33.6312 25.402 33.6312 18.428V0H27.413Z"
          fill="#FFFFFF"
        />
        <path
          d="M26.5682 0V5.29938H37.6705V29.61H43.8886V5.29938H54.9512V0H26.5682Z"
          fill="#FFFFFF"
        />
      </svg>
    </Link>
  );
}

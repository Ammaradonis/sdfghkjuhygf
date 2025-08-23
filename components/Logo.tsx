export default function Logo(props:{className?:string}){
  return (
    <div className={props.className} aria-label="3rd Street Boxing Gym - Home">
      <svg viewBox="0 0 300 60" role="img" aria-label="3rd Street Boxing Gym | Dogpatch's Fight Factory Since 2005">
        <title>3rd Street Boxing Gym | Dogpatch's Fight Factory Since 2005</title>
        <g fill="currentColor">
          <path d="M20 45c-4 0-7-3-7-7V22c0-4 3-7 7-7h10c6 0 11 5 11 11v8c0 6-5 11-11 11H20z"/>
          <rect x="38" y="12" width="230" height="6" rx="3"/>
          <rect x="38" y="26" width="230" height="6" rx="3"/>
          <rect x="38" y="40" width="230" height="6" rx="3"/>
        </g>
      </svg>
    </div>
  )
}

import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function TwitterFolowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo':'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following':
  'tw-followCard-button'

  const handeClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>

        <img
        className='tw-followCard-avatar'
         alt="El avatar de midudev" src={`https://unavatar.io/${userName}`} />

        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>

      </header>

      <aside>
        <button className={buttonClassName} onClick={handeClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
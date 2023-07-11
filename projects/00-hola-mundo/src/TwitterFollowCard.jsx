import { useState } from "react";

export function TwitterFollowCard({ name, userName, formatUserName }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [hover, setHover] = useState(false);

  const text = isFollowing && hover ? 'Dejar de seguir' : isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/instagram/${userName}`} alt={`Profile image of ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {text}
        </button>
      </aside>
    </article>
  )
}
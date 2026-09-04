import React from 'react'

const Card = ({ number, bgColor, text, tagText, tagBg, bgImage }) => {
  return (
    <div 
      className="card-item" 
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: bgImage 
          ? `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%), url("${bgImage}")` 
          : `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)`
      }}
    >
      <div className="card-top">
        <div className="card-badge">{number}</div>
      </div>
      <div className="card-bottom">
        <p className="card-text">{text}</p>
        <div className="card-tag-wrapper">
          <span className="card-tag" style={{ backgroundColor: tagBg }}>
            {tagText}
            {number === 1 && <i className="ri-arrow-right-line" style={{ fontSize: '1.1rem', marginLeft: '0.2rem' }}></i>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card

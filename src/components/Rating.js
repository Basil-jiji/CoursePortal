import React from 'react'

const Rating = ({ value, color, text }) => {
  return (
    <>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </>
  )
}

Rating.defaultProps = {
  color: '#f8e825'
}

export default Rating

import PropTypes from 'prop-types'

export function Photo({imgSrc, title}){
 return (
     <div className="photo">
         <img src={imgSrc} alt='Photo' />
         <strong>{title}</strong>
     </div>
 )
}
Photo.prototype = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
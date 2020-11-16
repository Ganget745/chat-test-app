import React from 'react'
import PropTypes from 'prop-types'
import chek from '../../assets/chek.svg'
import noreaded from '../../assets/noreaded.svg'

const IconReaded = ({ isMe, isReaded }) =>
  isMe &&
  (isReaded ? (
    <img className="message__icon-readed" src={chek} alt="Readed icon" />
  ) : (
    <img
      className="message__icon-readed message__icon-readed--no"
      src={noreaded}
      alt="No Readed icon"
    />
  ))

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
}

export default IconReaded

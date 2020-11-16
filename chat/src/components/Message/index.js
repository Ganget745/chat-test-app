import React from 'react'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import chek from '../../assets/chek.svg'
import noreaded from '../../assets/noreaded.svg'

import './Message.scss'

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => (
  <div
    className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--image': attachments && attachments.length === 1
    })}
  >
    <div className="message__content">
      {isMe &&
        (isReaded ? (
          <img className="message__icon-readed" src={chek} alt="Readed icon" />
        ) : (
          <img
            className="message__icon-readed message__icon-readed--no"
            src={noreaded}
            alt="No Readed icon"
          />
        ))}

      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__info">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        {date && (
          <span className="message__date">
            {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
          </span>
        )}
      </div>
    </div>
  </div>
)

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool
}

export default Message

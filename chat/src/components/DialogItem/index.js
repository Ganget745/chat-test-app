import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'


import { IconReaded } from '../'

import './DialogItem.scss'

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm')
  } else {
    return format(created_at, 'DD.MM.YYYY')
  }
}

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img
        src="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
        alt=""
      />
    )
  } else {
    // make avatar
  }
}

const DialogItem = ({ user, unreaded, created_at, text, isMe }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar">{getAvatar(user.avatar)}</div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">{unreaded > 99 ? '+99' : unreaded}</div>
        )}
      </div>
    </div>
  </div>
)

export default DialogItem

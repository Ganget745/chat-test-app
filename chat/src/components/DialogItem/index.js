import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'

import { IconReaded, Avatar } from '../'


const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm')
  } else {
    return format(created_at, 'DD.MM.YYYY')
  }
}


const DialogItem = ({ user, unread, created_at, text, isMe }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar"><Avatar user={user} /></div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unread > 0 && (
          <div className="dialogs__item-info-bottom-count">{unread > 99 ? '+99' : unread}</div>
        )}
      </div>
    </div>
  </div>
)

export default DialogItem

import React from 'react'
import classNames from 'classnames'
import { Time, IconReaded } from '../'

import './DialogItem.scss'

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

const DialogItem = ({ user, message, unreaded }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      {getAvatar(
        'https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy'
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>South Side</b>
        <span>
          {/* <Time date={new Date()} /> */}
          13:05
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>Я делаю чат и очень сильно заебался во всем этом ковыряться</p>
        <IconReaded isMe={true} isReaded={true} />
      {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 99 ? "+99" : unreaded}</div>}
      </div>
    </div>
  </div>
)

export default DialogItem

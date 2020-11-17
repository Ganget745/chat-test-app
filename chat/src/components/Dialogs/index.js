import React from 'react'

import { DialogItem } from '../'

import './Dialogs.scss'

const Dialogs = ({ items }) => (
  <div className="dialogs">
    {items.map((item) => (
      <DialogItem
        user={item.user}
        message={item.lastMessage}
        unreaded={0}
      />
    ))}
  </div>
)

export default Dialogs

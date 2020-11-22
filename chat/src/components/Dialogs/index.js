import React from 'react'
import { Input, Empty } from 'antd'
import orderBy from 'lodash/orderBy'

import { DialogItem } from '../'

import './Dialogs.scss'

const { Search } = Input

const Dialogs = ({ items, userId, onSearch, inputValue }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Search
        placeholder="Search contacts"
        allowClear
        onChange={(e) => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Nothing found" />
    )}
  </div>
)

export default Dialogs

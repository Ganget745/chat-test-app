import React from 'react'
import { Button } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Messages, Status, ChatInput } from '../../components'
import { Dialogs } from '../../containers'

import './Home.scss'

// const { Search } = Input

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <Button type="link" shape="circle" icon={<TeamOutlined />} />
              <span>Dialogs list</span>
            </div>
            <Button type="link" shape="circle" icon={<FormOutlined />} />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs userId={0} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Vladyslav Hrechanyi</b>
              <div className="chat__dialog-header-status">
                <Status online />
              </div>
            </div>
            <Button type="link" shape="circle" icon={<EllipsisOutlined />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

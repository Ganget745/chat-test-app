import React from 'react'

import { Message }  from '../../components'

import './Home.scss'

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
        text="whats up nigga пошли бухать оатыатыштпаышта"
        date="Sun Nov 15 2020 14:05:31"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
          }
        ]}
      />
      <Message
        avatar="https://c.tcdn.co/d9f/7bc/d9f7bc14-f229-11e5-aabf-040157cdaf01/channel128.png"
        text="Hello World"
        date="Sun Nov 15 2020 14:10:31"
        isMe={true}
        isReaded={false}
      />
    </section>
  )
}

export default Home

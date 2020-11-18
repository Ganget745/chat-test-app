import React from 'react'
import { Dialogs, Message } from '../../components'

import './Home.scss'

const Home = () => {
  return (
    <section className="home">
      <Dialogs
        userId={0}
        items={[
          {
            _id: 'ba2e3dd3d9f85243r4c6c6dcd21bb94041a',
            text: 'Го за шишками бро',
            created_at: 'Tue Nov 16 2020 02:35:34',
            user: {
              _id: 'ba2e3dd3d9123528c6c6dcd21bb94041a',
              fullname: 'Vladyslav Hrechanyi',
              avatar: null
            }
          },
          {
            _id: 'ba2e3dd3d9f8528c6ccsf3cd21bb94041a',
            text: 'Го за феном бро',
            created_at: 'Tue Nov 17 2020 12:35:34',
            user: {
              _id: 'ba2e3dd3d9f8531238c6c6dcd21bb94041a',
              fullname: 'Narko Pump',
              avatar:
                'https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy'
            }
          }
        ]}
      />
      <Message
        avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
        date="Sun Nov 15 2020 14:05:31"
        audio="https://proxy.notificationsounds.com/notification-sounds/deduction-588/download/file-sounds-1135-deduction.mp3"
      />

      {/* <Message
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
      <Message
        avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
          }
        ]}
      />
      <Message
        avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
        isTyping
      /> */}
    </section>
  )
}

export default Home

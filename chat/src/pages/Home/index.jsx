import React from 'react'
import { Input } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Dialogs, Message, Status } from '../../components'

import './Home.scss'

const { Search } = Input

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Dialogs list</span>
            </div>
            <FormOutlined />
          </div>

          <div className="chat__sidebar-search">
            <Search placeholder="Search contacts" allowClear onSearch="" />
          </div>

          <div className="chat__sidebar-dialogs">
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
                },
                {
                  _id: '5fb56177439c52b547b21173',
                  text:
                    'Proident voluptate exercitation ut fugiat mollit occaecat sit sint et nulla occaecat. Sunt laboris quis anim quis nostrud ea nostrud in consequat pariatur qui. Qui in mollit pariatur incididunt dolore laboris quis laboris reprehenderit cillum sit.',
                  created_at: 'Sun Mar 11 1979 15:11:45 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb56177cbc7a76c48ca0b19',
                    fullname: 'Herman Crosby',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177c1323bbcdd7bac6e',
                  text:
                    'Lorem esse eiusmod eu non ipsum occaecat ipsum veniam laboris duis minim quis ipsum do. Aute irure ut proident nulla nulla adipisicing minim veniam est in magna. Ullamco commodo consequat aliqua exercitation proident anim pariatur veniam.',
                  created_at: 'Fri Jul 24 1981 18:09:28 GMT+0400 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb56177c09dd4824161bb95',
                    fullname: 'Lizzie Rose',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177fed8377606588103',
                  text:
                    'Irure consequat exercitation Lorem magna aute deserunt amet occaecat enim eu consequat. Nulla ipsum sit proident reprehenderit Lorem. Ut ea aute adipisicing nisi officia excepteur.',
                  created_at: 'Thu Nov 05 1992 02:10:46 GMT+0200 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb5617766905ef334110e35',
                    fullname: 'Juarez Kramer',
                    avatar: null
                  }
                },
                {
                  _id: '5fb5617746de868123369c11',
                  text:
                    'Cillum occaecat eiusmod occaecat nisi cupidatat occaecat do. Sit qui reprehenderit anim non nulla tempor eiusmod aliqua anim. Do minim adipisicing sint dolore.',
                  created_at: 'Tue Mar 01 1983 06:37:20 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb5617756605b1729ac3261',
                    fullname: 'Blanchard Yang',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177fff72fa6e12f9d53',
                  text:
                    'Ullamco dolor non veniam et Lorem ad non. Id consequat cupidatat sit dolor id est sunt fugiat. Quis ad magna eu cillum.',
                  created_at: 'Sun Sep 23 2012 19:34:56 GMT+0300 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb5617765159f92a141165a',
                    fullname: 'Kirby Goodwin',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177f4bdede6598d1e88',
                  text:
                    'Ex proident culpa veniam duis nostrud nisi id incididunt occaecat commodo ut culpa pariatur. Id magna laborum magna exercitation non occaecat. Laboris eu consectetur commodo incididunt pariatur excepteur ipsum occaecat et ea.',
                  created_at: 'Thu Dec 11 2014 21:26:54 GMT+0200 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb561773069d8a45bbea9be',
                    fullname: 'Clemons Bonner',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177c75a67644ee9ece6',
                  text:
                    'Ex et ad commodo reprehenderit aliqua cupidatat. Fugiat veniam est sint excepteur commodo irure. Veniam mollit et anim pariatur ut consequat cillum aute deserunt.',
                  created_at: 'Tue Nov 22 1983 17:46:44 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb5617776470007f5a913c2',
                    fullname: 'Wall Franco',
                    avatar: null
                  }
                },
                {
                  _id: '5fb5617771b4cadc86aec5b6',
                  text:
                    'Magna dolor id est mollit consequat dolor do id anim aliqua est amet fugiat. Veniam sint incididunt cupidatat laborum duis velit reprehenderit exercitation sit elit mollit duis. Cupidatat commodo dolor do amet quis anim anim non sunt.',
                  created_at: 'Sun Jan 25 2015 22:03:14 GMT+0200 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb561779e0bc98eccf65502',
                    fullname: 'Shauna Gonzales',
                    avatar: null
                  }
                },
                {
                  _id: '5fb5617750dc424ab4059194',
                  text:
                    'Qui duis sit officia do qui labore est esse. Nulla velit ex occaecat officia sunt exercitation minim cillum reprehenderit amet exercitation aute deserunt minim. Non ex sint consequat ullamco fugiat tempor Lorem eiusmod aute.',
                  created_at: 'Wed Jan 22 2003 09:45:45 GMT+0200 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb561778c9062931c0092d5',
                    fullname: 'Carissa Phillips',
                    avatar: null
                  }
                },
                {
                  _id: '5fb5617726d313cc5aca6ae0',
                  text:
                    'Elit magna labore tempor consectetur anim duis dolor est ullamco. Occaecat sunt labore est nulla cillum consequat. Adipisicing dolore nisi magna magna eiusmod sit duis aliquip sint.',
                  created_at: 'Mon Nov 21 1977 20:03:53 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb561774322bc5c016a5e6d',
                    fullname: 'Eunice Beck',
                    avatar: null
                  }
                }
              ]}
            />
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
            <EllipsisOutlined style={{ fontSize: '22px' }} />
          </div>
          <div className="chat__dialog-messages">
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              date="Sun Nov 15 2020 14:05:31"
              audio="https://proxy.notificationsounds.com/notification-sounds/deduction-588/download/file-sounds-1135-deduction.mp3"
            />
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
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
            <Message
              avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
              text="whats up nigga пошли бухать оатыатыштпаышта"
              date="Sun Nov 15 2020 14:05:31"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

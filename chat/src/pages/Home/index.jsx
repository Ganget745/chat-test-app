import React from 'react'
import { Input } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Dialogs, Message } from '../../components'

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
                },
                {
                  _id: '5fb56177d36c82b0fb506f28',
                  text:
                    'Velit ea magna in enim eiusmod aliqua quis. Ea laborum reprehenderit enim velit magna non exercitation consectetur. Laborum ex aliqua magna officia mollit est ipsum aliquip ipsum aute excepteur minim in.',
                  created_at: 'Thu Mar 26 1981 19:14:27 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb561774219d6cd9c45b9e0',
                    fullname: 'Mcgowan Mckay',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177d70314c199507c36',
                  text:
                    'Ex mollit est amet nisi ex nostrud elit eiusmod id cupidatat culpa occaecat et sit. Aliqua id aliqua velit qui. Irure id ea sit eiusmod sunt.',
                  created_at: 'Mon Oct 16 2017 12:15:42 GMT+0300 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb561776350717c11e9364c',
                    fullname: 'Leon Merrill',
                    avatar: null
                  }
                },
                {
                  _id: '5fb561777d735b3e2cd36f00',
                  text:
                    'Id nulla esse pariatur deserunt. Ad mollit non sunt et est. Dolore sint culpa pariatur tempor enim duis aliquip voluptate magna occaecat incididunt reprehenderit cillum.',
                  created_at: 'Fri May 12 2017 01:10:28 GMT+0300 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb5617795a1bc43d7a44c03',
                    fullname: 'England Romero',
                    avatar: null
                  }
                },
                {
                  _id: '5fb561774c7ce87305841894',
                  text:
                    'Dolor non nulla laboris officia voluptate ea consectetur voluptate nostrud sunt duis laboris Lorem. Fugiat mollit id consequat pariatur cupidatat amet nulla magna consectetur proident deserunt aliqua. Fugiat adipisicing aute enim incididunt exercitation.',
                  created_at: 'Mon Jun 22 2009 18:39:02 GMT+0300 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb561772eb910409d14f7d6',
                    fullname: 'Johnnie Glass',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177e5276e7350d5552c',
                  text:
                    'Pariatur fugiat irure nulla nulla Lorem labore anim labore excepteur ad culpa. Laborum eu sit aute consectetur adipisicing et esse. Consectetur labore adipisicing cupidatat voluptate sint ea culpa.',
                  created_at: 'Sat Oct 17 2020 19:48:58 GMT+0300 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb56177459ef68c4f2b48bb',
                    fullname: 'Moss Berg',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177071c8ae4aa216efb',
                  text:
                    'Eiusmod consequat sunt veniam dolore eu sint non amet. In qui labore voluptate magna sunt quis excepteur excepteur. Nulla nulla officia eiusmod dolore sunt sunt irure labore.',
                  created_at: 'Thu Apr 28 1977 16:27:56 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb5617784e9ca1849d8ac70',
                    fullname: 'Mayer Hinton',
                    avatar: null
                  }
                },
                {
                  _id: '5fb5617781de063eea18d0ff',
                  text:
                    'Et officia ipsum nostrud labore qui aute cupidatat eiusmod Lorem sint voluptate anim deserunt. Reprehenderit non fugiat magna eu do excepteur sint non adipisicing ut. Deserunt ipsum laboris aute do deserunt.',
                  created_at: 'Fri Nov 21 1980 00:12:21 GMT+0300 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb561778e12c0e7c1c7c6ec',
                    fullname: 'Angelia Gomez',
                    avatar: null
                  }
                },
                {
                  _id: '5fb561776485270233f1ef10',
                  text:
                    'Sunt aute do ea proident. Reprehenderit nostrud mollit cupidatat ea id laboris anim exercitation quis. Deserunt nisi ea amet ex eu amet ut minim culpa cupidatat occaecat.',
                  created_at: 'Wed Sep 26 1984 00:28:41 GMT+0400 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb56177017feddb6b55893f',
                    fullname: 'Lydia Noel',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177755b39914b464bec',
                  text:
                    'Incididunt amet sint amet enim. Nulla elit magna occaecat ut anim fugiat tempor laboris sint tempor laboris pariatur exercitation aliqua. Consequat officia tempor nisi consequat voluptate in et proident quis.',
                  created_at: 'Thu Feb 03 1994 02:05:46 GMT+0200 (Eastern European Standard Time)',
                  user: {
                    _id: '5fb56177a939aae47a301c3e',
                    fullname: 'Wiley Fry',
                    avatar: null
                  }
                },
                {
                  _id: '5fb56177b3a6fb976d7c115b',
                  text:
                    'Ullamco veniam aliquip exercitation dolore veniam. Ipsum quis nisi ea cupidatat do cillum aliquip sint minim. Duis reprehenderit labore ut est.',
                  created_at: 'Sat Jun 27 1987 11:32:32 GMT+0400 (Eastern European Summer Time)',
                  user: {
                    _id: '5fb56177c782f6e13fe9c5b4',
                    fullname: 'Shana Hayden',
                    avatar: null
                  }
                }
              ]}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Vladyslav Hrechanyi</b>
              <div className="chat__dialog-header-status">
                <div className="status status--online">online</div>
              </div>
            </div>
            <EllipsisOutlined />
          </div>
        </div>
      </div>

      {/* <Message
        avatar="https://ixbt.online/live/images/06/40/71/2018/08/18/avatar.jpg?w=48&h=48&resize=entropy"
        date="Sun Nov 15 2020 14:05:31"
        audio="https://proxy.notificationsounds.com/notification-sounds/deduction-588/download/file-sounds-1135-deduction.mp3"
      /> */}

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

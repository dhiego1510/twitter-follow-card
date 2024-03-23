import './App.css'
import { TwitterFolowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'LuisitoComunica',
    name: 'Luisito El Pillo',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'NickyJamPR',
    name: 'Nicky Jam',
    isFollowing: false
  },
  {
    userName: 'Diego_Ca',
    name: 'Diego Castro',
    isFollowing: false
  },
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing} = user          
          return (
            <TwitterFolowCard
              userName={userName}
              initialIsFollowing={isFollowing}
              key={userName}
              >
                {name}
              </TwitterFolowCard>
          )
        })
      }
    </section>
  )
}
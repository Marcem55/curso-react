import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const addAt = (userName) => {
    return `@${userName}`;
  }

  const users = [
    {
      name: 'Marcelo Malacalza',
      userName: 'marce.malacalza',
      isFollowing: true,
      id: crypto.randomUUID()
    },
    {
      name: 'Emiliano Martinez',
      userName: 'dibumartinez',
      isFollowing: false,
      id: crypto.randomUUID()
    },
    {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: true,
      id: crypto.randomUUID()
    },
    {
      name: 'Lionel Messi',
      userName: 'leomessi',
      isFollowing: false,
      id: crypto.randomUUID()
    }
  ]

  return (
    <section className='App'>
      {
        users.map((user) => {
          return <TwitterFollowCard key={user.id} formatUserName={addAt} name={user.name} userName={user.userName} isFollowing={user.isFollowing} />
        }
        )
      }
    </section>
  );
}
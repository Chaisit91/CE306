import React from 'react';
import UserProfileCard from './Components/UserProfileCard';
import type { UserData } from './Components/UserProfileCard';

const App: React.FC = () => {
  const users: UserData[] = [
    {
      id: 'user1',
      name: 'moss winter',
      email: 'moss@example.com',
      online: false,
      avatarUrl: 'https://www.kroobannok.com/news_pic/p89788911103.jpg',
      skills: [
        { skillName: 'React', level: 'Advanced' },
        { skillName: 'TypeScript', level: 'Intermediate' },
        
      ],
    },
    {
      id: 'user2',
      name: 'bass winter',
      email: 'winter@example.com',
      online: false,
      avatarUrl: 'https://after163.wordpress.com/wp-content/uploads/2016/02/wp-14563979281181.png',
      skills: [
        { skillName: 'Project Management', level: 'Advanced' },
        { skillName: 'CSS', level: 'Advanced' },
        { skillName: 'Construction', level: 'Beginner' },
      ],
    },
    {
      id: 'user3',
      name: 'pee winter',
      email: 'pee@example.com',
      online: true,
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFd-SrU0pZQqd45H2BEUtMPSpFoeC6QkOBg&s',
      skills: [
        { skillName: 'Vue.js' },
        { skillName: 'Project Management', level: 'Advanced' },
        { skillName: 'Node.js', level: 'Intermediate' },
        { skillName: 'Construction', level: 'Beginner' },
      ],
    },
  ];

  const handleViewDetails = (userId: string) => {
    alert(`Viewing details for user ID: ${userId}`);
  };

  return (
    <div
      style={{
        backgroundColor: '#d4dde6ff',
        height: '100vh',
        width: '100vw',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ margin: '0 0 32px', color: '#333' }}>User Profile Cards</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          flexWrap: 'nowrap',
          maxWidth: 1100,
          width: '100%',
        }}
      >
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default App;
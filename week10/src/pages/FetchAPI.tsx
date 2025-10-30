import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const FetchAPI: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await fetch('http://jsonplaceholder.typicode.com/user/1')
          .then(response => response.json())
          .then(data => {
            setUser(data);
          })
          .catch(error => {
            console.error('Errpe fetching data:', error);
          });
      } catch (error) {
        console.error('Error fetching user', error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1 className="tect-2xl font-bold mb-2">User Details</h1>
      <p className="mb-1"><strong>Name:</strong>{user.name}</p>
      <p className="mb-1"><strong>Email:</strong>{user.email}</p>
      <p className="mb-1"><strong>Phone:</strong>{user.phone}</p>
    </div>
  );
};

export default FetchAPI;
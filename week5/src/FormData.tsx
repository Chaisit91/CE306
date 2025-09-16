import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<FormData>();

  const handleSubmit = () => {
    alert(`ชื่อ: ${name || 'ยังไม่ได้กรอก'}\nอีเมล: ${email || 'ยังไม่ได้กรอก'}`);
    setSubmittedData({name,email}); 
  };

  const handleClear = () => {
    setName('');
    setEmail('')

    setSubmittedData(undefined); 
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#ffffffff',
    }}>
      <div style={{
        padding: '30px',
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        fontFamily: 'sans-serif'
      }}>
        <h2 style={{ textAlign: 'center' }}>User Form Exercise - Solution</h2>

        
        <div style={{ marginBottom: '15px' }}>
          <label>ชื่อ: {name}</label>
          <input
            type="text"
            name="name"
            placeholder="กรอกชื่อของคุณ"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        
        <div style={{ marginBottom: '15px' }}>
          <label>อีเมล: {email}</label>
          <input
            type="email"
            name="email"
            placeholder="กรอกอีเมลของคุณ"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

       
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
          <button
            onClick={handleClear}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
        </div>

        
        <div style={{ backgroundColor: '#f1f1f1', padding: '15px', borderRadius: '8px' }}>
          <p><strong>ข้อมูลปัจจุบัน:</strong></p>
          <p><strong>ชื่อ:</strong> {submittedData?.name || 'ยังไม่ได้กรอก'}</p>
          <p><strong>อีเมล:</strong> {submittedData?.email || 'ยังไม่ได้กรอก'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

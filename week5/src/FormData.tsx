
import React, { useEffect, useState } from "react";

const FormData: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>(''); 

    const clear =() =>{
      setName('')
      setEmail('')
    }

    const submit
    
    useEffect(() => {
        console.log(`Empty Dependency Effect: Component re-rendered`);
        console.log(`Current Count: ${count}, Name: ${name}`);
        console.log(`Current Count: ${count}, Email: ${email}`);
    });

    return (
        <div>
            <h2>No Dependency Array</h2>
            <p>Name: {name}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <p>Email: {email}</p>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
            />
            <div style={{margin: '20px 0' ,display: "flex" , gap :'15px' , justifyContent :"center"}}>
                <button onClick = {submitform} style={{backgroundColor : '#259e1aff'}}>Submit</button>
                <button onClick = {clear}style={{backgroundColor: 'hsla(0, 99%, 47%, 1.00)'}}>Reset</button>
            </div>


        </div>
    );
};

export default FormData;



// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   email: string;
// }

// const UserForm: React.FC = () => {
//   // สร้าง state สำหรับเก็บข้อมูล form
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: ''
//   });

//   // ฟังก์ชันสำหรับ handle การเปลี่ยนค่า input
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // ฟังก์ชันสำหรับ submit form
//   const handleSubmit = () => {
//     alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
//   };

//   // ฟังก์ชันสำหรับ clear form
//   const handleClear = () => {
//     setFormData({ name: '', email: '' });
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
//       <h2>User Form Exercise</h2>

//       {/* Input fields */}
//       <div>
//         <label>ชื่อ:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="กรอกชื่อของคุณ"
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//         />
//       </div>

//       <div>
//         <label>อีเมล:</label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="กรอกอีเมลของคุณ"
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//         />
//       </div>

//       {/* ปุ่ม Submit และ Clear */}
//       <div>
//         <button
//           onClick={handleSubmit}
//           style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px', marginRight: '10px' }}
//         >
//           Submit
//         </button>
//         <button
//           onClick={handleClear}
//           style={{ backgroundColor: 'red', color: 'white', padding: '8px 16px' }}
//         >
//           Clear
//         </button>
//       </div>

//       {/* แสดงผล real-time */}
//       <div style={{ marginTop: '20px', padding: '10px', background: '#000000ff', borderRadius: '5px' }}>
//         <h4>ข้อมูลที่กรอก:</h4>
//         <p>ชื่อ: {formData.name || 'ยังไม่ได้กรอก'}</p>
//         <p>อีเมล: {formData.email || 'ยังไม่ได้กรอก'}</p>
//       </div>
//     </div>
//   );
// };

// export default UserForm;

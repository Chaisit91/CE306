1. SkillTag.tsx
1.ประกาศ type Skill มี
  1.1 skillName: ชื่อของสกิล (string)
  1.2 level: (ไม่จำเป็น) ระดับของสกิล – 'Beginner' | 'Intermediate' | 'Advanced'
2สร้างคอมโพเนนต์ SkillTag รับ props คือ skillName และ level
  2.1 ถ้ามี level จะใช้สีพื้นหลังตามระดับ (เช่น Beginner จะเป็นสีเขียวอ่อน)
  2.2 ถ้าไม่มี level จะใช้สีเทา
  2.3 ข้อความจะโชว์เป็น: skillName (level) หรือแค่ skillName ถ้าไม่มี level

2. UserProfileCard.tsx
UserProfileCard ใช้แสดงข้อมูลโปรไฟล์ของผู้ใช้แต่ละคน
1.ประกาศ type UserData กำหนดโครงสร้างข้อมูลของผู้ใช้:
    1.1id, name, email, online, avatarUrl, skills (เป็น array ของ Skill)
2.คอมโพเนนต์ UserProfileCard รับ props:
    2.1 user: ข้อมูลผู้ใช้ 1 คน (ประเภท UserData)
    2.2 onViewDetails: ฟังก์ชัน callback สำหรับปุ่ม "View Details"
3.โครงสร้างภายในคอมโพเนนต์:
  3.1รูปโปรไฟล์ + ชื่อ + email + สถานะออนไลน์
  3.2รายการสกิลของผู้ใช้ (ใช้คอมโพเนนต์ SkillTag แสดงทีละอัน)
  3.3ปุ่ม View Details ซึ่งเรียก onViewDetails พร้อม user.id เมื่อตอนคลิก

3. App.tsx
App ใช้แสดงรายการโปรไฟล์ของผู้ใช้หลายคน
1.กำหนดข้อมูล users เป็น array ของ UserData (ตัวอย่าง 3 คน)
2.แต่ละผู้ใช้มีข้อมูลพื้นฐาน เช่น ชื่อ, อีเมล, รูป, สถานะออนไลน์ และสกิล
3.ฟังก์ชัน handleViewDetails(userId) ทำหน้าที่แสดง alert เมื่อกดปุ่มในแต่ละโปรไฟล์

4.คอมโพเนนต์ App แสดง:
  4.1หัวข้อ “User Profile Cards”
  4.2 รายการ UserProfileCard ที่สร้างจากข้อมูลใน users 



























































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

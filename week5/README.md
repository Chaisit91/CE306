มี input field สำหรับกรอกชื่อ
มีช่องกรอกข้อมูลสำหรับชื่อ โดยใช้ useState สร้างตัวแปรชื่อ name เพื่อเก็บค่าที่พิมพ์ และเมื่อผู้ใช้พิมพ์ชื่อในช่อง input ตัวค่าก็จะถูกอัปเดตใน state ทันที

มี input field สำหรับกรอกอีเมล
เหมือนกับช่องชื่อ สร้างตัวแปร email ด้วย useState เพื่อเก็บค่าที่พิมพ์เข้ามาในช่อง input ของอีเมล ตอนมีการพิมพ์ข้อมูล ก็จะมีการอัปเดตค่าของ email 

แสดงข้อมูลที่กรอกแบบ real-time
ใต้ label ของแต่ละช่อง input จะมีการแสดงค่าที่ผู้ใช้กรอกไว้แบบ real-time เช่น พิมพ์ชื่อหรืออีเมล ค่าดังกล่าวจะแสดงให้เห็นทันทีข้างๆ ไม่ต้องกดปุ่มใดๆ ทั้งสิ้น

มีปุ่ม Submit เพื่อแสดง alert ข้อมูลที่กรอก
เมื่อกดปุ่ม Submit ระบบจะทำการแสดงหน้าต่าง alert ซึ่งจะแสดงค่าชื่อและอีเมลที่ผู้ใช้กรอก ถ้าผู้ใช้ยังไม่ได้กรอกข้อมูล ระบบจะแสดงข้อความว่า "ยังไม่ได้กรอก" เพื่อแจ้งให้ทราบว่าข้อมูลว่างอยู่ นอกจากนี้ เมื่อกด Submit แล้ว ข้อมูลที่กรอกไว้จะถูกเก็บลงในตัวแปร submittedData เพื่อแสดงผลในส่วนล่างของฟอร์ม

มีปุ่ม Clear เพื่อล้างข้อมูลทั้งหมด
ปุ่ม Clear จะล้างค่าทั้งหมดที่ผู้ใช้กรอกในช่องชื่อและอีเมล พร้อมกับล้างข้อมูลในตัวแปรที่ใช้แสดงผลด้านล่าง ทำให้ฟอร์มกลับหมือนตอนยังไม่ได้พิมพ์อะไรเลย














































<!-- # React + TypeScript + Vite

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
``` -->

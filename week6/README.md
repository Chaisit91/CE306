6.1 Reusable Product Card Component

- Features -
แยก Component ออกเป็นสัดส่วนโดย
ProductCard.tsx = แสดงสินค้าแต่ละชิ้น
Button.tsx = ปุ่มกดที่ปรับแต่งได้ (Primary, Secondary, Danger, Outline)

ใช้ Props สำหรับส่งข้อมูลเข้าไปใน ProductCard
imageUrl: string = URL ของรูปภาพสินค้า
title: string = ชื่อสินค้า
description: string → รายละเอียดสินค้า
price: number = ราคาสินค้า
onAddToCart: () => void → ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม Add to Cart

ใช้ Tailwind CSS เพื่อจัดสไตล์ให้สวยงาม ทันสมัย และ Responsive
ออกแบบให้ Card มีเงา (shadow) และ ขอบโค้งมน (rounded corners)
ปุ่ม Add to Cart ใช้ Button component ที่เขียนขึ้นใหม่ รองรับหลายรูปแบบ (variant, size)

รองรับ Responsive Design
บนหน้าจอเล็ก (มือถือ) = แสดง 1 คอลัมน์
บน Tablet = แสดง 2 คอลัมน์
บน Desktop = แสดง 3 คอลัมน์

--------------------------------------------------------------------

6.2 Navigation Bar แบบ Responsive


แสดง Logo และ Links
บนหน้าจอขนาดใหญ่ (md ขึ้นไป): แสดง Logo และ Links แบบเรียงแนวนอน
บนหน้าจอเล็ก (มือถือ): แสดง Logo + Hamburger Menu
Responsive Design
คลิกปุ่ม Hamburger Menu = แสดง Links แบบ Dropdown (แสดง/ซ่อน ด้วย State ของ React)
ใช้ Tailwind CSS จัดการ Layout, Styling และ Transition
มี Hover Effect ที่ลิงก์ใน Navbar
ออกแบบให้โค้ดเป็น Reusable Component สามารถส่ง Logo และ Links เข้ามาผ่าน Props

การทำงานของ Navbar
Desktop View (≥ md, ≥ 768px)
Navbar แสดง Logo + Links เรียงแนวนอน
Mobile View (< md)
Navbar แสดง Logo + Hamburger Menu
เมื่อคลิก Hamburger = แสดง Links แบบ Dropdown (แนวตั้ง)

















































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

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

export default defineConfig([
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

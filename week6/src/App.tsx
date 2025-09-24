import Navbar from "./Navbar";

function App() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-100"> 
      <Navbar logo="MySite" links={links} />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">เนื้อหาหลักของหน้าเว็บ</h1>
        <p className="text-gray-600 mt-2">
          นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
        </p>
      </main>
    </div>
  );
}

export default App;




// import ProductCard from "./ProductCard";

// function App() {
//   const handleAddToCart = () => {
//     alert("เพิ่มลงตะกร้าแล้ว!");
//   };

//   return (
//     <main className="min-h-screen w-full bg-gray-200 px-4 py-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           รายการสินค้าของเรา
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//           <ProductCard
//             imageUrl="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-2-black.png?v=1"
//             title="Logitech G502 X PLUS"
//             description="G502 X PLUS คือผลิตภัณฑ์รุ่นใหม่ล่าสุดของตระกูล G502 ในตำนาน คิดค้นขึ้นใหม่ด้วยสวิตช์ไฮบริด LIGHTFORCE รุ่นแรกของเรา, ระบบไร้สายเกรดโปร LIGHTSPEED LIGHTSYNC RGB, เซ็นเซอร์ HERO 25K และอีกมากมาย"
//             price={1200}
//             onAddToCart={handleAddToCart}
//           />
//           <ProductCard
//             imageUrl="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/g403/g403-hero-mouse-top-angle-black-gallery-1.png?v=1"
//             title="Logitech G403"
//             description="Logitech G ร่วมมือกับผู้เล่นระดับมืออาชีพ 50 คน เพื่อค้นหารูปทรง น้ำหนัก และความรู้สึกที่สมบูรณ์แบบที่สุด เมื่อรวมเข้ากับเทคโนโลยีไร้สาย LIGHTSPEED และเซ็นเซอร์ HERO 25K ผลลัพธ์: นี่คือหนึ่งในเมาส์ยอดนิยมที่สุดในวงการอีสปอร์ต"
//             price={2120}
//             onAddToCart={handleAddToCart}
//           />
//           <ProductCard
//             imageUrl="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g305/2025-update/g305-lightspeed-mouse-top-angle-black-gallery-1.png?v=1"
//             title="Logitech G304"
//             description="เมาส์เกมมิ่งไร้สาย LIGHTSPEED ที่ที่ได้รับการออกแบบมาเพื่อมอบประสิทธิภาพอย่างแท้จริงด้วยนวัตกรรมทางเทคโนโลยีล่าสุดในราคาที่ย่อมเยา อายุแบตเตอรี่ยาวนานถึง 250 ชั่วโมง มีตัวเลือกในรูปแบบสีสันสดใส"
//             price={3342}
//             onAddToCart={handleAddToCart}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
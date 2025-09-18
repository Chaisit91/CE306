// // components/ProductCard.tsx
// import React from "react";

// type ProductCardProps = {
//   imageUrl: string;
//   title: string;
//   description: string;
//   price: number;
//   onAddToCart: () => void;
// };

// const ProductCard: React.FC<ProductCardProps> = ({
//   imageUrl,
//   title,
//   description,
//   price,
//   onAddToCart,
// }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
//       <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold mb-2">{title}</h2>
//         <p className="text-sm text-gray-600 mb-2">{description}</p>
//         <p className="text-base font-bold mb-4">${price.toFixed(2)}</p>
//         <button
//           onClick={onAddToCart}
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

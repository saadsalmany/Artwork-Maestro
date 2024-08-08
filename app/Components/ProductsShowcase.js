"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../data/Products";

const categories = [
  {
    name: "Home Decor",
    subcategories: [
      {
        name: "Vases",
        items: ["Elegant Horn Vase", "Carved Horn Flower Vase"],
      },
      {
        name: "Bowls",
        items: ["Decorative Horn Bowl", "Inlaid Horn Fruit Bowl"],
      },
    ],
  },
  {
    name: "Jewelry",
    subcategories: [
      {
        name: "Bracelets",
        items: [
          "Blood Pressure Control Copper Magnetic Bracelet",
          "Horn Bangle",
        ],
      },
      {
        name: "Necklaces",
        items: ["Horn Pendant Necklace", "Bone Inlay Necklace"],
      },
    ],
  },
  {
    name: "Furniture",
    subcategories: [
      {
        name: "Tables",
        items: [
          "Bone Inlay & Wooden Console Table",
          "Horn-Inlaid Coffee Table",
        ],
      },
      {
        name: "Storage",
        items: ["Bone Inlay 2 Drawer Chest", "Horn-Decorated Cabinet"],
      },
    ],
  },
];

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(
      subcategory === selectedSubcategory ? null : subcategory
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-outfit font-bold text-secondary-blue text-center mb-8">
          Our Exquisite Hornware Collection
        </h1>
        <p className="text-lg font-openSans text-charcoal text-center mb-12 max-w-3xl mx-auto">
          Discover the beauty and craftsmanship of our handcrafted hornware
          products. Each piece is a unique work of art, created with passion and
          skill by our master artisans.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories and Subcategories */}
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-outfit font-semibold mb-4">
              Categories
            </h2>
            {categories.map((category) => (
              <div key={category.name} className="mb-4">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="w-full text-left font-outfit font-medium text-lg flex items-center justify-between bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                >
                  {category.name}
                  <ChevronDown
                    className={`transform transition-transform ${
                      selectedCategory === category ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {selectedCategory === category && (
                  <div className="mt-2 ml-4">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory.name}
                        onClick={() => handleSubcategoryClick(subcategory)}
                        className="w-full text-left font-openSans text-md py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                      >
                        {subcategory.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Product Listing */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-outfit font-semibold mb-4">
              Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedSubcategory
                ? products
                    .filter(
                      (product) =>
                        product.category === selectedCategory.name &&
                        product.tags.includes(selectedSubcategory.name)
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                : products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="/contact"
            className="inline-block bg-secondary-blue text-white font-outfit text-lg py-3 px-8 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#EF4344" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Request Custom Order
          </motion.a>
        </div>
      </div>
    </div>
  );
};

// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       <img
//         src={`/api/placeholder/400/300`}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-outfit font-semibold text-secondary-blue mb-2">
//           {product.name}
//         </h3>
//         <p className="text-sm font-openSans text-charcoal mb-4">
//           Handcrafted with precision and care, this {product.name.toLowerCase()}{" "}
//           showcases the beauty of hornware.
//         </p>
//         <motion.button
//           className="w-full bg-primary-red text-white font-outfit py-2 px-4 rounded-full flex items-center justify-center"
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           Learn More
//           <ChevronRight className="ml-2 h-5 w-5" />
//         </motion.button>
//       </div>
//     </div>
//   );
// };

export default ProductShowcase;


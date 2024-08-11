"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../data/Products";
import SecondaryBtn from "./SecondaryBtn";

const categories = [
  {
    name: "Home Decor",
    subcategories: [
      {
        name: "Vases",
        items: [],
      },
      {
        name: "Bowls",
        items: ["Bone Decorative Bowls", "Bone Multipurpose Bowl"],
      },
      {
        name: "Boxes",
        items: [
          "Decorative and Multipurpose Box",
          "Suri Box and Decorative Homeware",
          "Round Mini Suri Decorative Box",
          "Bone Decorative Mini Box",
        ],
      },
      {
        name: "Frames",
        items: ["Bone Photo Frame"],
      },
      {
        name: "Candle Holders",
        items: ["Bone Light/Candle/Tea Light Holder"],
      },
      {
        name: "Tissue Boxes",
        items: ["Bone Tissue Box"],
      },
    ],
  },
  {
    name: "Jewelry & Accessories",
    subcategories: [
      {
        name: "Jewelry Boxes",
        items: [
          "Mini Jewellery Box",
          "Transparently Attractive Mini Jewellery Box",
        ],
      },
      {
        name: "Personal Care",
        items: ["Horn Comb"],
      },
    ],
  },
  {
    name: "Kitchenware",
    subcategories: [
      {
        name: "Serving Trays",
        items: ["Bone Fancy Serving Tray"],
      },
      {
        name: "Bowls",
        items: ["Bone Multipurpose Bowl"],
      },
      {
        name: "Organizers",
        items: ["Bone Cutlery and Tissue Holder Set"],
      },
    ],
  },
  {
    name: "Buffalo Horn Products",
    subcategories: [
      {
        name: "Drinking Horns",
        items: ["Drinking Horn"],
      },
    ],
  },
  {
    name: "Coasters",
    subcategories: [
      {
        name: "All Coasters",
        items: products
          .filter((product) => product.category === "Coasters")
          .map((product) => product.name),
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

  const filteredProducts = products.filter((product) => {
    if (!selectedCategory) return true;
    if (selectedCategory.name !== product.category) return false;
    if (!selectedSubcategory) return true;
    return selectedSubcategory.items.includes(product.name);
  });

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl px-8 tablet:px-16 desktop:px-0 mx-auto">
        <h1 className="text-4xl leading-tight desktop:text-4xl font-outfit font-bold pt-8 tablet:pt-16 desktop:pt-10 text-secondary-blue text-center mb-8">
          Our Exquisite Collection
        </h1>
        <p className="text-sm font-openSans text-charcoal text-center mb-12 max-w-3xl mx-auto">
          Discover the beauty and craftsmanship of our handcrafted hornware
          products and elegant coasters. Each piece is a unique work of art,
          created with passion and skill by our master artisans.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories and Subcategories */}
          <div className="desktop:w-1/4">
            <h2 className="text-2xl text-charcoal font-outfit font-semibold mb-4">
              Categories
            </h2>
            <button
              className="text-sm flex gap-2  active:bg-secondary-blue active:text-white desktop:hover:bg-secondary-blue desktop:hover:text-white items-center px-6 py-2 bg-transparent text-secondary-blue font-outfit rounded-full shadow-md my-4 border border-secondary-blue transition-all desktop:duration-300 duration-0 ease-in-out"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
            >
              Show All Products
            </button>
            {categories.map((category) => (
              <div key={category.name} className="mb-4 text-charcoal">
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
                        className={`w-full text-left font-openSans my-1 font-medium text-md py-2 px-3 rounded-md transition-colors duration-200 ${
                          selectedSubcategory === subcategory
                            ? "shadow-md bg-white text-primary-red"
                            : "hover:bg-gray-100 active:bg-white text-charcoal hover:text-primary-red"
                        }`}
                      >
                        {subcategory.name}
                      </button>
                    ))}
                    {selectedSubcategory && (
                      <button
                        onClick={() => {
                          setSelectedCategory(null);
                          setSelectedSubcategory(null);
                        }}
                        className="text-sm flex gap-2 mt-4 items-center shadow-md px-6 py-2 bg-transparent text-secondary-blue font-outfit rounded-full border border-secondary-blue hover:text-white hover:bg-secondary-blue transition-all desktop:duration-300 mobile:duration-75 ease-in-out"
                      >
                        Remove Filters
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Product Listing */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-outfit text-charcoal font-semibold mb-4">
              Products
            </h2>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
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

export default ProductShowcase;



'use client'
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Check, Filter } from "lucide-react";
import { products } from "../data/Products";
import SecondaryBtn from "./SecondaryBtn";
import ProductCard from "./ProductCard";

const categories = [
  {
    name: "Home Decor & Accessories",
    subcategories: [
      { name: "Vases", items: [] },
      { name: "Bowls", items: ["Bone Decorative Bowls", "Bone Multipurpose Bowl"] },
      { name: "Boxes", items: ["Decorative and Multipurpose Box", "Suri Box and Decorative Homeware", "Round Mini Suri Decorative Box", "Bone Decorative Mini Box"] },
      { name: "Frames", items: ["Photo Frame"] },
      { name: "Candle Holders", items: ["Bone Light/Candle/Tea Light Holder"] },
      { name: "Tissue Boxes", items: ["Bone Tissue Box"] },
    ],
  },
  {
    name: "Fashion Jewellery",
    subcategories: [
      { name: "Jewelry Boxes", items: ["Mini Jewellery Box", "Transparently Attractive Mini Jewellery Box"] },
    ],
  },
  {
    name: "Kitchenware",
    subcategories: [
      { name: "Serving Trays", items: ["Bone Fancy Serving Tray"] },
      { name: "Bowls", items: ["Bone Multipurpose Bowl"] },
      { name: "Organizers", items: ["Bone Cutlery and Tissue Holder Set"] },
    ],
  },
  {
    name: "Horn, Vikings & Medieval Crafts",
    subcategories: [
      { name: "Drinking Horn", items: ["Drinking Horn"] },
    ],
  },
  {
    name: "Personal Care",
    subcategories: [
      { name: "Combs", items: ["Horn Comb"] },
    ],
  },
];

const ProductShowcase = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const toggleCategoryFilter = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        const subcategoriesToRemove = categories.find(c => c.name === category)?.subcategories.map(sub => sub.name) || [];
        setSelectedSubcategories(prevSub => prevSub.filter(sub => !subcategoriesToRemove.includes(sub)));
        return prev.filter(c => c !== category);
      } else {
        const subcategoriesToAdd = categories.find(c => c.name === category)?.subcategories.map(sub => sub.name) || [];
        setSelectedSubcategories(prevSub => [...new Set([...prevSub, ...subcategoriesToAdd])]);
        return [...prev, category];
      }
    });
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSubcategoryFilter = (subcategory) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategories.length === 0 && selectedSubcategories.length === 0) return true;
      
      const categoryMatch = selectedCategories.includes(product.category);
      const subcategoryMatch = selectedSubcategories.some(selectedSubcat => {
        const category = categories.find(cat => cat.subcategories.some(sub => sub.name === selectedSubcat));
        if (!category) return false;
        
        const subcategory = category.subcategories.find(sub => sub.name === selectedSubcat);
        if (!subcategory) return false;
        
        return subcategory.items.some(item => product.tags.includes(item) || product.name === item);
      });

      return categoryMatch || subcategoryMatch;
    });
  }, [selectedCategories, selectedSubcategories]);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setVisibleProducts(6);
  };

  const CustomCheckbox = ({ checked, onChange, label, className = "" }) => (
    <label className={`flex items-center cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className={`w-5 h-5 border-2 rounded-md transition-all duration-200 ${
          checked ? 'bg-secondary-blue border-secondary-blue' : 'border-gray-300 group-hover:border-secondary-blue'
        }`}>
          {checked && (
            <Check className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-secondary-blue transition-colors duration-200">{label}</span>
    </label>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12 relative">
      <div className="max-w-6xl px-6 tablet:px-16 desktop:px-26 pt-4 tablet:pt-16 desktop:pt-8 mx-auto">
        <h1 className="text-4xl sm:text-4xl lg:text-6xl font-outfit font-bold text-secondary-blue text-center mb-4">
          Our Handicraft Collection
        </h1>
        <p className="text-sm desktop:text-base font-openSans text-charcoal text-center mb-8 max-w-2xl mx-auto">
          Discover the beauty and craftsmanship of our handcrafted hornware products and elegant coasters. Each piece is a unique work of art, created with passion and skill by our master artisans.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-center space-x-2 bg-secondary-blue text-white py-2 px-4 rounded-md"
            >
              <Filter className="w-5 h-5" />
              <span>Filter Products</span>
            </button>
          </div>

          {/* Categories and Subcategories */}
          <div className={`lg:w-1/4 ${isMobileFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="sticky top-32">
              <h2 className="text-2xl text-charcoal font-outfit font-bold mb-4 border-b-2 border-secondary-blue pb-2">
                Categories
              </h2>
              <div className="bg-white rounded-xl shadow p-4">
                {categories.map((category) => (
                  <div key={category.name} className="mb-4">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full text-left font-outfit font-semibold text-lg flex items-center justify-between p-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                    >
                      <span className="text-secondary-blue">{category.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-secondary-blue transform transition-all duration-300 ${
                          expandedCategories.includes(category.name) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedCategories.includes(category.name) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 ml-4 border-l-2 border-gray-200 pl-4"
                        >
                          {category.subcategories.map((subcategory) => (
                            <CustomCheckbox
                              key={subcategory.name}
                              checked={selectedSubcategories.includes(subcategory.name)}
                              onChange={() => toggleSubcategoryFilter(subcategory.name)}
                              label={subcategory.name}
                              className="mb-2"
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {(selectedCategories.length > 0 || selectedSubcategories.length > 0) && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={clearFilters}
                    className="w-full text-sm flex justify-center items-center px-4 py-3 bg-gray-100 text-secondary-blue font-outfit font-medium rounded-md hover:bg-gray-200 transition-all duration-200 ease-in-out mt-4"
                  >
                    Clear Filters
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Product Listing */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-outfit text-charcoal font-bold mb-4 border-b-2 border-secondary-blue pb-2">
              Products
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {visibleProducts < filteredProducts.length && (
              <div className="mt-8 text-center">
                <SecondaryBtn onClick={handleLoadMore}>
                  Load More Products
                </SecondaryBtn>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
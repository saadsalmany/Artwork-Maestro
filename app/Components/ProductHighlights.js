import React from "react";
import { Star, Truck, RefreshCw, Shield } from "lucide-react";

function ProductHighlights({ highlights = [] }) {
  return (
    <div className="mt-10 border-gray-200 pt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="mt-">
          <div
            className={`bg-${highlight.bgColor}-50 border border-gray-200 rounded-lg p-6 text-center`}
          >
            <dt>
              <div className="flex justify-center text-charcoal mb-4">{highlight.icon}</div>
              <span className="text-sm font-outfit tracking-wide font-medium text-charcoal">
                {highlight.heading}
              </span>
            </dt>
            <dd className="mt-1 text-sm font-openSans text-gray-500">
              {highlight.subheading}
            </dd>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductHighlights;
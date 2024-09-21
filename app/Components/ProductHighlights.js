import React from "react";
import { Star, Truck, RefreshCw, Shield } from "lucide-react";

function ProductHighlights({ highlights = [] }) {
  return (
    <div className="mt-10 border-gray-200 pt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="mt-">
          <div
            className={`bg-blue-50 border border-gray-200 rounded-lg p-6 text-center`}
          >
            <dt>
              <div className="flex justify-center text-secondary-blue mb-4">{highlight.icon}</div>
              <span className="text-base font-outfit tracking-wide font-semibold text-secondary-blue">
                {highlight.heading}
              </span>
            </dt>
            <dd className="mt-1 text-sm font-medium font-openSans leading-loose text-charcoal tracking-wide">
              {highlight.subheading}
            </dd>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductHighlights;
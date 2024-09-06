import React from "react";
import { Star, Truck, RefreshCw, Shield } from "lucide-react";

function ProductHighlights({ heading, subheading, icon, bgColor }) {
  return (
    <div>
      <div className="mt-4 font-openSans list-decimal leading-loose text-gray-500">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div
            className={`bg-${bgColor}-50 border border-gray-200 rounded-lg p-6 text-center`}
          >
            <dt>
              <div className="flex justify-center">{icon}</div>
              <span className="text-sm font-outfit font-medium text-gray-900">
                {heading}
              </span>
            </dt>
            <dd className="mt-1 text-sm font-openSans text-gray-500">
              {subheading}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default ProductHighlights;

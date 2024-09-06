import React from "react";
import { Star, Truck, RefreshCw, Shield } from "lucide-react";

function ProductHighlights() {
  return (
    <div>
      <div className="mt-4 font-openSans list-decimal leading-loose text-gray-500">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="bg-blue-50 border border-gray-200 rounded-lg p-6 text-center">
            <dt>
              <Shield
                className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <span className="mt-4 text-sm font-outfit font-medium text-gray-900">
                Durable
              </span>
            </dt>
            <dd className="mt-1 text-sm font-openSans text-gray-500">
              High-quality build
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default ProductHighlights;

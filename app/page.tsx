import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center space-y-2 md:space-y-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Catálogo
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-2">
          Explore nossa coleção e experimente as soluções da Sizebay.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mt-6 md:mt-10">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group flex flex-col bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3 md:p-5 flex flex-col flex-grow">
              <h3 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 md:mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0 pt-2">
                <span className="text-[10px] md:text-xs text-gray-500">
                  Tam: {product.sizes.join(", ")}
                </span>
                <span className="text-[10px] md:text-sm font-medium text-blue-600">
                  Ver Detalhes &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

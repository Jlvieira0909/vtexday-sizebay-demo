import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-12">
      <div className="text-center space-y-3 md:space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
          Catálogo
        </h1>
        <p className="text-base md:text-lg text-gray-600 px-2 leading-relaxed">
          Explore nossa coleção exclusiva e experimente as soluções de Provador
          Virtual e Tabela de Medidas da Sizebay.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
          >
            <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <h3 className="text-sm md:text-base font-semibold text-gray-950 mb-2 md:mb-3 line-clamp-2 leading-snug">
                {product.name}
              </h3>
              <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0 pt-3 border-t border-gray-100">
                <span className="text-[11px] md:text-xs text-gray-500 font-medium">
                  Tamanhos: {product.sizes.join(", ")}
                </span>
                <span className="text-[11px] md:text-sm font-semibold text-blue-600">
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

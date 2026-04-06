import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "../../../components/ProductGallery";
import SizebayScript from "../../../components/SizebayScript";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto">
      <SizebayScript productId={product.id} />

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-950 mb-6 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Voltar para o catálogo
      </Link>

      <div className="bg-white rounded-3xl md:rounded-4xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <ProductGallery images={product.images} productName={product.name} />

          <div className="flex flex-col space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-950 tracking-tighter leading-tight">
                {product.name}
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-gray-950 mb-3 md:mb-4">
                Tamanhos Disponíveis
              </h3>
              <div className="flex gap-2.5 md:gap-3">
                {product.sizes.map((size) => (
                  <div
                    key={size}
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-gray-200 rounded-xl text-sm md:text-base text-gray-950 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-3 md:my-6 border-gray-100" />

            <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100">
              <h3 className="text-base md:text-xl font-bold text-blue-950 mb-2">
                Descubra o seu tamanho ideal
              </h3>
              <p className="text-sm md:text-base text-blue-800 mb-5 leading-relaxed">
                Utilize nosso provador virtual ou tabela de medidas para
                garantir o caimento perfeito.
              </p>

              <div
                id="sizebay-vfr-container"
                className="min-h-[44px] md:min-h-[50px] w-full flex items-center gap-4"
              ></div>
            </div>

            <button className="mt-6 md:mt-10 w-full bg-gray-950 text-white py-4 md:py-5 rounded-2xl font-extrabold text-base md:text-lg hover:bg-gray-900 transition-colors shadow-sm">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

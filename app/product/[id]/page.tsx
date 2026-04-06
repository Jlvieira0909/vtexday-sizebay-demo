import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Script from "next/script";

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
    <div className="bg-white rounded-xl md:rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-4 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        <div className="relative aspect-[3/4] bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden w-full max-w-sm mx-auto lg:max-w-none">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col space-y-4 md:space-y-6">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">
            {product.name}
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div>
            <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-2 md:mb-3">
              Tamanhos Disponíveis
            </h3>
            <div className="flex gap-2 md:gap-3">
              {product.sizes.map((size) => (
                <div
                  key={size}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 rounded-md md:rounded-lg text-xs md:text-sm text-gray-700 font-semibold"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <hr className="my-2 md:my-6 border-gray-200" />

          <div className="bg-blue-50/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-100">
            <h3 className="text-sm md:text-lg font-semibold text-blue-900 mb-1 md:mb-2">
              Descubra o seu tamanho ideal
            </h3>
            <p className="text-xs md:text-sm text-blue-700 mb-3 md:mb-4">
              Utilize nosso provador virtual ou tabela de medidas para garantir
              o caimento perfeito.
            </p>

            <div
              id="sizebay-vfr-container"
              className="min-h-[40px] md:min-h-[50px] w-full flex items-center gap-4"
            ></div>
          </div>

          <button className="mt-4 md:mt-8 w-full bg-gray-900 text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:bg-gray-800 transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <Script
        id="sizebay-integration"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.Sizebay = window.Sizebay || {};
            window.Sizebay.product = {
               id: "${product.id}",
               permalink: "https://www.sizebay-vtexday2026.com/${product.id}"
            };
          `,
        }}
      />
    </div>
  );
}

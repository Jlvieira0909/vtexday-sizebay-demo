"use client";

import { useEffect } from "react";

export default function SizebayScript({ productId }: { productId: string }) {
  useEffect(() => {
    // 1. Limpeza bruta de containers
    const container = document.getElementById("sizebay-vfr-container");
    if (container) container.innerHTML = "";
    document.querySelectorAll(".vfr__container").forEach((el) => el.remove());

    // 2. Mata qualquer script antigo da Sizebay que esteja no HTML
    const oldScripts = document.querySelectorAll(
      'script[id^="szb-vfr"], script[src*="sizebay.technology"]'
    );
    oldScripts.forEach((script) => script.remove());

    // 3. Injeta o script "virgem"
    const script = document.createElement("script");
    script.id = "sizebay-vfr-v4";
    script.src = "https://static.sizebay.technology/7707/prescript.js";
    script.defer = true;
    document.body.appendChild(script);

    // 4. Quando o componente desmontar (sair da página)
    return () => {
      // Limpa os botões visuais
      if (container) container.innerHTML = "";
      document.querySelectorAll(".vfr__container").forEach((el) => el.remove());

      // Arranca os scripts do HTML
      const scriptsToRemove = document.querySelectorAll(
        'script[id^="szb-vfr"], script[src*="sizebay.technology"]'
      );
      scriptsToRemove.forEach((script) => script.remove());

      // MATA AS VARIÁVEIS GLOBAIS DA SIZEBAY (Força o reinício na próxima página)
      delete (window as any).Sizebay;
      delete (window as any).SizebayConfig;
      delete (window as any).SizebayPrescript;
      delete (window as any)._szbAddToCart;
      delete (window as any)._szbRender;
    };
  }, [productId]);

  return null;
}

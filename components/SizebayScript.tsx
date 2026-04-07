"use client";

import { useEffect } from "react";

export default function SizebayScript({ productId }: { productId: string }) {
  useEffect(() => {
    const container = document.getElementById("sizebay-vfr-container");
    if (container) container.innerHTML = "";
    document.querySelectorAll(".vfr__container").forEach((el) => el.remove());

    const oldScripts = document.querySelectorAll(
      'script[id^="szb-vfr"], script[src*="sizebay.technology"]'
    );
    oldScripts.forEach((script) => script.remove());

    const script = document.createElement("script");
    script.id = "sizebay-vfr-v4";
    script.src = "https://static.sizebay.technology/7707/prescript.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
      document.querySelectorAll(".vfr__container").forEach((el) => el.remove());

      const scriptsToRemove = document.querySelectorAll(
        'script[id^="szb-vfr"], script[src*="sizebay.technology"]'
      );
      scriptsToRemove.forEach((script) => script.remove());

      delete (window as any).Sizebay;
      delete (window as any).SizebayConfig;
      delete (window as any).SizebayPrescript;
      delete (window as any)._szbAddToCart;
      delete (window as any)._szbRender;
    };
  }, [productId]);

  return null;
}

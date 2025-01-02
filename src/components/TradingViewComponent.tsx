"use client";

import { useEffect } from "react";

export function TradingViewComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      interval: "1D",
      width: "100%",
      isTransparent: true,
      height: 350,
      symbol: "BITSTAMP:BTCUSD",
      showIntervalTabs: false,
      displayMode: "single",
      locale: "br",
      colorTheme: "dark",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget-price"
    );
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget-price"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export function TradingViewTimeline() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "symbol",
      symbol: "BITSTAMP:BTCUSD",
      isTransparent: true,
      displayMode: "adaptive",
      width: "100%",
      height: "550",
      colorTheme: "dark",
      locale: "br",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget-news"
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
    <div className="tradingview-widget-container h-[400px]">
      <div className="tradingview-widget-container__widget-news h-full"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}

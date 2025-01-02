import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIndicators } from "@/hooks/useIndicators";
import { ArrowUpCircle, ArrowDownCircle, Activity } from "lucide-react";
import { TradingViewComponent } from "./TradingViewComponent";
import { Suspense } from "react";

const indicators = {
  rsi: { value: 65, status: "buy" },
  macd: { value: 0.25, status: "buy" },
  ma: { value: "Above 200 MA", status: "buy" },
};

const getOverallSignal = () => {
  const buySignals = Object.values(indicators).filter(
    (ind) => ind.status === "buy"
  ).length;
  return buySignals >= 2;
};

export function TechnicalIndicators() {
  const isBuySignal = getOverallSignal();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Indicadores Técnicos
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className="space-y-4">
          <div
            className={`rounded-lg p-4 ${
              isBuySignal
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            <p className="text-lg font-semibold flex items-center gap-2">
              {isBuySignal ? (
                <>
                  <ArrowUpCircle className="h-5 w-5" />
                  Indicadores predominantes para compra 🚀
                </>
              ) : (
                <>
                  <ArrowDownCircle className="h-5 w-5" />
                  Indicadores predominantes para venda 📉
                </>
              )}
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">RSI</span>
              <span
                className={
                  indicators.rsi.status === "buy"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {indicators.rsi.value}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">MACD</span>
              <span
                className={
                  indicators.macd.status === "buy"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {indicators.macd.value}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Moving Average</span>
              <span
                className={
                  indicators.ma.status === "buy"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {indicators.ma.value}
              </span>
            </div>

          </div>
        </div> */}
        <Suspense fallback={<div>Loading...</div>}>
          <TradingViewComponent />
        </Suspense>
      </CardContent>
    </Card>
  );
}

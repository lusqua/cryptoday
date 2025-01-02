import { Activity, ArrowUpCircle, ChartNoAxesCombined } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export function TechnicalAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartNoAxesCombined className="h-5 w-5" />
          Análise Técnica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg p-4">
            <p className="text-md flex items-center gap-2">
              O Bitcoin enfrenta um ponto decisivo: se perder o suporte de $92K,
              há grande chance de cair para $81K, um nível importante para
              manter a confiança do mercado. A situação reflete cautela entre
              investidores devido às incertezas globais, mas, por enquanto, o
              cenário segue estável acima desse valor.
            </p>
            <Link
              href="https://cryptopotato.com/bitcoin-price-analysis-btc-risks-falling-to-81k-if-this-breaks-below-this-support-level/"
              className="text-sm text-blue-500"
            >
              Leia mais
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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
              O Bitcoin parece pronto para desafiar novamente a marca de $100K
              após atingir um fundo em $91K. O sentimento do mercado melhorou,
              com sinais de recuperação sólida sugerindo um movimento otimista
              nos próximos dias.
            </p>
            <Link
              href="https://cryptopotato.com/bitcoin-price-analysis-btc-seems-ready-to-challenge-100k-again-after-bottoming-at-91k/"
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

import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function ActionButtons() {
  return (
    <div className="col-span-4 lg:col-span-2 flex gap-4">
      <Button
        className="flex-1 bg-green-500 hover:bg-green-600 text-white h-16 text-lg"
        size="lg"
      >
        <TrendingUp className="mr-2 h-5 w-5" />
        Comprar BTC
      </Button>
      <Button
        variant="destructive"
        className="flex-1 h-16 text-lg"
        size="lg"
      >
        <TrendingDown className="mr-2 h-5 w-5" />
        Vender BTC
      </Button>
    </div>
  );
}
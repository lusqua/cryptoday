import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { time: '00:00', price: 62000 },
  { time: '04:00', price: 63500 },
  { time: '08:00', price: 61800 },
  { time: '12:00', price: 64200 },
  { time: '16:00', price: 65100 },
  { time: '20:00', price: 64800 },
  { time: '24:00', price: 66000 },
];

export function BitcoinChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin Price (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip
                contentStyle={{ background: 'hsl(var(--card))', border: 'none' }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
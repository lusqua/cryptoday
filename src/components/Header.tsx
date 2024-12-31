"use client"

import { Bitcoin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-center px-4">
          <div className="flex items-center gap-4">
            <Bitcoin className="h-8 w-8 text-yellow-500" />
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Bitcoin (BTC)</h1>
              <p className="text-sm text-muted-foreground">Dashboard de Análise Técnica</p>
            </div>
          </div>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </div>
  );
}
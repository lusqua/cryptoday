'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(password)
    if (!success) {
      setError('Senha incorreta')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-background/50 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Criptoday</h1>
            <p className="text-gray-400">Digite a senha para acessar a plataforma</p>
          </div>

          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Senha secreta"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </Card>
    </main>
  )
} 
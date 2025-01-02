'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  // Se isAuthenticated for null, está carregando
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#00FF94]" />
      </div>
    )
  }

  // Se não estiver autenticado, não mostra nada (será redirecionado pelo useAuth)
  if (!isAuthenticated) {
    return null
  }

  // Se estiver autenticado, mostra o conteúdo
  return <>{children}</>
} 
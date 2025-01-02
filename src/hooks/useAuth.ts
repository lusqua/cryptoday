'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const SECRET_PASSWORD = 'criptoday2025'
const SALT = 'criptoday_salt_2024'
// Hash da chave para localStorage - parece um ID qualquer
const STORAGE_KEY = 'f7e9a1b2c3d4e5f6'

// Função para codificar a senha
const encodePassword = (password: string) => {
  const saltedPassword = password + SALT
  if (typeof window !== 'undefined') {
    return btoa(saltedPassword)
  }
  return ''
}

// Senha codificada para comparação
const ENCODED_PASSWORD = encodePassword(SECRET_PASSWORD)

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem(STORAGE_KEY)
      const isAuth = auth === ENCODED_PASSWORD
      setIsAuthenticated(isAuth)

      // Se não estiver autenticado e não estiver na página de login, redireciona
      if (!isAuth && pathname !== '/login') {
        router.push('/login')
      }
      // Se estiver autenticado e estiver na página de login, redireciona para home
      else if (isAuth && pathname === '/login') {
        router.push('/')
      }
    }
  }, [pathname, router])

  const login = (password: string) => {
    const encodedAttempt = encodePassword(password)
    if (encodedAttempt === ENCODED_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, encodedAttempt)
      setIsAuthenticated(true)
      router.push('/')
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setIsAuthenticated(false)
    router.push('/login')
  }

  // Retorna null enquanto está verificando a autenticação
  return { isAuthenticated, login, logout }
} 
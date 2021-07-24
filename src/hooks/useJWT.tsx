import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface JWTData {
  token: string
  isAuth: boolean
}

interface ParsedJWT {
  email: string
  exp: number
  iat: number
  nbf: number
  role: 'Customer' | 'Admin'
}

interface JWTProviderProps {
  children: ReactNode
}

interface JWTContextData extends JWTData {
  setLocalData(jwtToken: string): void
  removeToken(): void
  atobJSON(): ParsedJWT
}

const JWTContext = createContext<JWTContextData>({} as JWTContextData)

export const JWTProvider = ({ children }: JWTProviderProps) => {
  const initialJWTState = { token: '', isAuth: false }
  const [jwt, setJWT] = useState<JWTData>(initialJWTState)

  const setLocalData = (jwtToken: string) => {
    const tokenString = JSON.stringify(jwtToken)
    window.localStorage.setItem('token', tokenString)
    setJWT({ token: jwtToken, isAuth: true })
  }

  const removeToken = () => {
    window.localStorage.removeItem('token')
    setJWT(initialJWTState)
  }

  const atobJSON = (): ParsedJWT => {
    const { token } = jwt
    return JSON.parse(atob(token.split('.')[1]))
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token !== null)
      setJWT({ token: JSON.parse(token).result, isAuth: true })
  }, [])

  return (
    <JWTContext.Provider
      value={{ ...jwt, setLocalData, removeToken, atobJSON }}
    >
      {children}
    </JWTContext.Provider>
  )
}

export function useJWT() {
  return useContext(JWTContext)
}

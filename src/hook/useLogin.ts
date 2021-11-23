import { useCallback, useState } from 'react'

export default function useLogin(initialState: boolean) {
  const [logged, setLogged] = useState(initialState);

  const login = useCallback(() => {
    setTimeout(() => {
      setLogged(true);
    }, 200)
  }, []);

  const logout = useCallback(() => {
    setTimeout(() => {
      setLogged(false);
    }, 200)
  }, []);

  return {
    logged,
    login,
    logout
  }
}
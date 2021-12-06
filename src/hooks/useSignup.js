import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (displayName, email, password) => {
    setError(null)
    setIsPending(true)

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)
      if (!res) {
        throw new Error('Could not complete signup')
      }
      // add name to user
      await res.user.updateProfile({ displayName })

      // dispatch login action
      dispatch({type: 'LOGIN', payload: res.user })

       //update state
       if(!isCancelled) {
        setIsPending(false)
        setError(null)
      } 

    } catch(err) {
      if(!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  },[])

  return { error, isPending, signup }
}
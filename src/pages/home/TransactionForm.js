import {  useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid,
      name,
      amount
    })
  }

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <div className="container bg-mint-middle text-white p-4 rounded-md">
      <h3 className="text-sm mb-4">Add a Transaction</h3>
      <form 
        onSubmit={handleSubmit}
        className="text-xs"
      >
        <label>
          <span>Transaction name</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input"
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="input"
          />
        </label>
        <button className="w-full px-4 py-2 border-2 border-white font-medium tracking-wide 
          rounded-lg hover:bg-mint focus:outline-none focus:ring-2 focus:ring-white">Add transaction</button>
      </form>
      
    </div>
  )
}

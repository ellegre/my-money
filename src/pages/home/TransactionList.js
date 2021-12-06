import { useFirestore } from '../../hooks/useFirestore'
import Trash from '../../assets/trash.svg'

export default function TransactionList({ transactions }) {
const { deleteDocument, response } = useFirestore('transactions')
console.log(response)
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id} 
          className="flex flex-row items-center justify-between px-3 py-2 pr-10
          mb-3 shadow-lg text-gray rounded-r-md border-l-4 border-mint-middle relative">
          <p>{transaction.name}</p>
          <p>$<span className="font-medium">{transaction.amount}</span></p>
          <button className="absolute w-2.5 h-2.5 top-1 right-2" onClick={()=> deleteDocument(transaction.id)}>
            <img src={Trash} />
          </button>
        </li>
      ))}      
    </ul>
  )
}

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions', 
    ["uid", "==", user.uid ],
    ["createdAt", "desc"] // descending order
  )
  return (
    <div className="w-screen h-screen bg-white pb-3 pt-10">
      <div className="container bg-white grid grid-cols-1 md:grid-cols-3 gap-8 text-gray">
        <div className="col-span-2">
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div className="">
          <TransactionForm uid={user.uid}/>
        </div>        
      </div>
    </div>
    
  )
}

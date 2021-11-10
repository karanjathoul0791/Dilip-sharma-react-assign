import { useState, useEffect } from 'react'
import { transactionData } from '../../data/jsonData.js'

const Transactions = (props) => {
   const [transactions, SetTransaction] = useState([])

   const temp = transactionData.transactions.filter((trns) => trns.accNo === props.acc.accNo)
   console.log('transaction ', temp)
   useEffect(() => {
      SetTransaction(temp)
   }, temp)

   return (
      <div data-testid='transaction-table' className=''>
         <table className='row table'>
            <thead>
               <tr>
                  <td>Transaction Id</td>
                  <td>Account Id</td>
                  <td>From Account</td>
                  <td>Transaction Data</td>
                  <td>Amount</td>
               </tr>
            </thead>
            <tbody>
               {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                     <td>{transaction.id}</td>
                     <td>{transaction.accNo}</td>
                     <td>{transaction.accName}</td>
                     <td>{transaction.date}</td>
                     <td>{transaction.amount}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Transactions

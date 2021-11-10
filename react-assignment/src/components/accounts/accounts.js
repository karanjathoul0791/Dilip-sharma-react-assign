import { useState } from 'react'

const Accounts = ({ accounts, setSelectedAcc }) => {
   const [accountsArr] = useState(accounts)

   const showTransactios = (account) => {
      setSelectedAcc(account)
   }
   return (
      <div data-testid='accounts-table' className=''>
         <table className='row table'>
            <thead>
               <tr>
                  <td>Account Number</td>
                  <td>Account Name</td>
                  <td>Type</td>
                  <td>Balance</td>
                  <td>Currency</td>
               </tr>
            </thead>
            <tbody>
               {accountsArr.map((acc) => (
                  <tr key={acc.id} onClick={() => showTransactios(acc)}>
                     <td>{acc.accNo}</td>
                     <td>{acc.accName}</td>
                     <td>{acc.accType}</td>
                     <td>{acc.balance}</td>
                     <td>{acc.currency}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Accounts

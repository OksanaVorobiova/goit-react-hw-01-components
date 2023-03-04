import PropTypes from 'prop-types'; 
import { Transaction } from 'components/Transaction/Transaction';
import { Table } from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => 
                <Transaction key={id} type={type} amount={amount} currency={currency} />
            )}
        </Table>    
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}
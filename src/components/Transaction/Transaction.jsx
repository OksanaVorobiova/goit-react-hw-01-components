import PropTypes from 'prop-types';
import { TBody } from './Transaction.styled';


export const Transaction = ({type, amount, currency}) => {
    return (
        <TBody>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </TBody>
    )
}


Transaction.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
import TransactionsListItem from "components/TransactionsListItem";
import css from "./TransactionsList.module.css";

export interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

interface IProps {
  list: ITransaction[];
}

export default function TransactionHistory({ list }: IProps) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr className={css.headRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {list.map(({ id, type, amount, currency }) => (
          <TransactionsListItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

import { ITransaction } from "components/TransactionsList";
import css from "./TransactionsListItem.module.css";

export default function TransactionsListItem({
  type,
  amount,
  currency,
}: Pick<ITransaction, "type" | "amount" | "currency">) {
  return (
    <tr className={css.bodyRow}>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

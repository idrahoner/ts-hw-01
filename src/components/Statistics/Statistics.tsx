import { getRandomHexColor, filterFormats } from "utils";
import css from "./Statistics.module.css";

export interface IData {
  id: string;
  label: string;
  percentage: number;
}

interface IProps {
  title: string;
  schedule: IData[];
}

export default function Statistics({ title, schedule }: IProps) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {filterFormats(schedule).map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

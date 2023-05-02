import css from "./FriendsListItem.module.css";
import { IFriend } from "components/FriendsList";

export default function FriendListItem({
  avatar,
  name,
  isOnline,
}: Pick<IFriend, "avatar" | "name" | "isOnline">) {
  return (
    <li className={css.item}>
      <span
        className={`${css.activeStatus} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + " avatar"}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

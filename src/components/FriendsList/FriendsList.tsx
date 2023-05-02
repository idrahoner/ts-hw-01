import FriendListItem from "components/FriendsListItem";
import css from "./FriendsList.module.css";

export interface IFriend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

interface IProps {
  list: IFriend[];
}

export default function FriendList({ list }: IProps) {
  return (
    <ul className={css.friendList}>
      {list.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

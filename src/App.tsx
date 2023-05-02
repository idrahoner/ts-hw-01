import Profile from "components/Profile";
import user from "data/user.json";

import Statistics from "components/Statistics";
import data from "data/data.json";

import FriendsList from "components/FriendsList";
import friends from "data/friends.json";

import TransactionsList from "components/TransactionsList";
import transactions from "data/transactions.json";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#010101",
      }}
    >
      <Profile
        name={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" schedule={data} />
      <FriendsList list={friends} />
      <TransactionsList list={transactions} />
    </div>
  );
};

export default App;

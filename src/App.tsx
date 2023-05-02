import Profile from "components/Profile";
import user from "data/user.json";

import Statistics from "components/Statistics";
import data from "data/data.json";
// import { filterFormats } from "utils";

// import FriendList from "components/FriendList";
// import friends from "data/friends.json";

// import TransactionsList from "./components/TransactionsList";
// import transactions from "data/transactions.json";

// const filteredData = filterFormats(data);

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
      {/* <FriendList list={friends} />
      <TransactionsList list={transactions} /> */}
    </div>
  );
};

export default App;

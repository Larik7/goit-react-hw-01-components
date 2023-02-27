import { Container } from './App.styled';
import { User } from '../profile/profile';
import { StaticList } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionSheet } from '../Transaction/TransactionHistory';
import user from '../../path/user.json';
import data from '../../path/data.json';
import friends from '../../path/friends.json';
import transactions from '../../path/transactions.json';

export const App = () => {
  return (
    <Container>
      <User user={user} />
      <StaticList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionSheet items={transactions} />
    </Container>
  );
};

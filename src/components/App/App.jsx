import { Container } from './App.styled';
import { User } from '../profile/profile';
import user from '../../path/user.json';
import data from '../../path/data.json';

export const App = () => {
  return (
    <Container>
      <User user={user} />
    </Container>
  );
};

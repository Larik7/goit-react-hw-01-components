import { Layout } from './App.styled';
import { User } from '../profile/profile';
import user from '../../path/user.json';

export const App = () => {
  return (
    // <Layout><Layout/>
    <User user={user} />
  );
};


// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
//  }}
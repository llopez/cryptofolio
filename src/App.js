import AccountsList from './components/accounts/List';
import StateProvider from './context/StateProvider';

const App = () => {
  return (
    <StateProvider>
      <AccountsList />
    </StateProvider>
  )
}

export default App;

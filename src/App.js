import AccountsList from './components/accounts/List';

const accounts = [
  { name: 'pepe' }
]

const App = () => {
  return (
    <div>
      <AccountsList accounts={accounts} />
    </div>
  )
}

export default App;

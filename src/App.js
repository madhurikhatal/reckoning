
import './App.css';
import { Item } from './Components/Item';

function App() {
  const expenses = [
    {
      id:'e1',
      title: "Health Incurence",
      amount: 1000,
      date: new Date(2022, 2, 28)
    },
    {
      id:'e2',
      title: "New Tv",
      amount: 5000,
      date: new Date(2022, 5, 16)
    },    {
      id:'e3',
      title: "car",
      amount: 150000,
      date: new Date(2021, 12, 10)
    },
    {
      id:'e4',
      title: "New desktop",
      amount: 25000,
      date: new Date(2022, 8, 25)
    },
    {
      id:'e5',
      title: "Grocery",
      amount: 500,
      date: new Date(2022, 5, 16)
    },
  ];
  return (
    <div>
      <Item title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}  />

      <Item title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}  />

      <Item title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}  />

      <Item title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}  />

      <Item title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}  />
    
    </div>
  );
}

export default App;

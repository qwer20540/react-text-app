import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import "./App.css";


const App = () => {

  const [ id, setId ] = useState('');

  const [ edit, setEdit ] = useState(false);

  const [ charge, setCharge ] = useState("");

  const [ amount, setAmount ] = useState(0);

  const [alert, setAlert] = useState({ show: false});

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600},
    { id: 2, charge: "식비", amount: 2600},
    { id: 3, charge: "교통비", amount: 1000}
  ])

  const claerItems = () => {
    setExpenses([]);
  }

  const hadleCharge = (e) => {
    setCharge(e.target.value);
  }

  const hadleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleDelete = (id) => {
    const nexExpense = expenses.filter(expnse => expnse.id !== id);
    setExpenses(nexExpense);
    handleAlert({ type: 'danger', text: '아이템이삭제되었습니다.'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })

        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다."})
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount}
        //불변성
        const newExpenses = [...expenses, newExpense]
        setExpenses(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다."})
      }
      setCharge("");
      setAmount(0);
    } else {
      handleAlert({ 
        type: "danger", 
        text: 'charge는 빈 값일 수 없으면 amount는 0보다 커야합니다.'
      })
    }
  }

  const handleAlert = ({type, text}) => {
    setAlert({ show: true, type, text});
    setTimeout(() => {
      setAlert({show: false})
    },3000);
  }

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

  return(
    <main className="main-container">

      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>

      <div style={{ width:'100%', backgroundColor: 'white', padding: '1rem'}}>
        <ExpenseForm
          hadleCharge = {hadleCharge}
          charge = {charge}
          hadleAmount = {hadleAmount}
          amount = {amount}
          handleSubmit = {handleSubmit}
          edit={edit}
        />
      </div>

      <div style={{ width:'100%', backgroundColor: 'white', padding: '1rem'}}>
        <ExpenseList 
          expenses={expenses} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          claerItems={claerItems}
        />
      </div>

      <div style={{ display:'flex',justifyContent: 'end',marginTop: '1rem'}}>
        <p style={{ fontSize:'2rem'}}>
          총지출:
          <span>
            {expenses.reduce((acc, cur) => {
              return (acc += cur.amount);
            }, 0)}
            원
          </span>
        </p>
      </div>
    </main>
  )
}

export default App;
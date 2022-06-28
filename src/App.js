import logo from './logo.svg';
import './App.css';
import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';

function App() {
  const onClickHandler = (param) => {
    alert(param);
  }
  return (
    <div>
      <div style={{ margin:"20px"}}>
        <ButtonFunction text="I'm button function from props!" handler={() => onClickHandler("Lagu cinta")} /> 
        <br />
      </div>       
    </div>
  );
}

export default App;

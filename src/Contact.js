import logo from './rajesh.png';
import './App.css';

function App() {
  const card={
    position:"top",
    width:"400px",
    border:"1px solid black",
    margin:"auto",
    boxShadow:"2px 1px 3px white",
    color:"green",
    fontstyle:"Tw Cen MT",
    fontsize:16
  }
  const ts={
    margin:"100px",
    position:"middle",
    color:"white",
  }
  return (
    <div className="App">
      <header className="App-header" style={card}>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={ts}>
          <p>G Rajesh</p>
          <p>CSE(H)</p>
          <p>2100030973</p>
        </div>
      </header>
    </div>
  );
}

export default App;
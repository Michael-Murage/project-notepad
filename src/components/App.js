import '../App.css';
import CardDisplay from './CardDisplay';
import NavBar from './NavBar';
import NotesForm from './NotesForm';

function App() {
  return (
    <div style={{backgroundColor: '#eee'}}>{/*className="App"*/}
      <NavBar />
      <div className='all-cards'>
        <NotesForm />
        <br />
      
        <CardDisplay />
      </div>
    </div>
  );
}

export default App;

import '../App.css';
import CardDisplay from './CardDisplay';
import useDisplay from './hooks/useDisplay';
import NavBar from './NavBar';
import NotesForm from './NotesForm';


function App() {
  const { notes, setNotes, fetchData } = useDisplay()
  
  
  return (
    <div style={{backgroundColor: '#eee'}}>
      <NavBar />
      <div className='all-cards'>
        <NotesForm notes={notes} setNotes={setNotes} fetchData={fetchData}/>
        <br />
      
        <CardDisplay notes={notes} setNotes={setNotes} fetchData={fetchData}/>
      </div>
    </div>
  );
}

export default App;

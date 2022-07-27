import '../App.css';
import CardDisplay from './CardDisplay';
import NavBar from './NavBar';
import NotesForm from './NotesForm';
import useDisplay from './useDisplay';

function App() {
  const { notes, setNotes, fetchData } = useDisplay()
  console.log(notes);
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

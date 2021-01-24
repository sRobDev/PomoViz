import logo from './logo.svg';
import './App.scss';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header>
        {/* Maybe a header? */}
      </header>
      <nav>
        {/* Not sure if we need this, not in first round anyway */}
      </nav>
      <div className="content-wrapper">
        <div className="productivity-wrapper">
          <Clock />
          <div className="todo-wrapper">todo</div>
        </div>
        <div className="playlist-wrapper">playlist</div>
      </div>
      {/* Productivity */}
      {/* Productivity will have the clock, with the note taking section next to it  */}
      {/* Note taking section will be the goals for this session */}
      {/* Goals that are not checked off during the session (or at the end) are carried over into the next session */}
      {/* Time can be customized - can link to articles explaining the pomodoro technique and why 25 mins is recommended*/}
      {/* Can also link to/recommend playlists and artists to listen to - this could be good for promotion in the future */}
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './routes/search.jsx';
import Finded from './routes/finded.jsx';
import checkData from './functions/checkData.js';
// import Search from './routes/Search';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="finded/:phone" element={<Finded/>} 
        loader={async ({ params }) => {
          return await checkData(params.phone)
        }} />
        
        <Route path="*" element={
          <div>
          <h2>404 Страница не найдена</h2>
        </div>}/>
      </Routes>
    </Router>
  );
} 
export default App
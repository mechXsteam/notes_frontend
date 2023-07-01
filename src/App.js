import './App.css';
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import { Route, Routes} from "react-router-dom";
import NotePage from "./pages/NotePage";


function App() {

    return (
        <div className={'container dark'}>
            <div className="app">
                <Header/>
                <Routes>
                    <Route path="/" element={<NoteListPage />}></Route>
                    <Route path="/note/:id" element={<NotePage />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Admin } from "./admin";
import { TaskPage } from "./taskpage";
import { Assign } from "./assign";
import { Contact } from "./contact";
import { Faq } from "./faq";
import { Replyfaq } from "./replyfaq";
import { Selection } from "./selection";
import './main.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/admin' element={<Admin />}/>
                <Route path='/task' element={<TaskPage />}/>
                <Route path='/assign' element={<Assign />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/replyfaq' element={<Replyfaq />} />
                <Route path='/selection' element={<Selection />} />
            </Routes>
        </BrowserRouter>
    );
};

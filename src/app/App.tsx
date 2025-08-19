import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './layout/Layout';
import Integrantes from '../pages/Integrantes';
import Faq from '../pages/Faq';
import Contato from '../pages/Contato';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/integrantes' element={<Integrantes />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/faq' element={<Faq />} />
          ////
          <Route path='/teleconsulta' element={<div>Teleconsulta</div>} />
          ////
          <Route path='/cadastro' element={<div>Cadastro</div>} />
          <Route path='*' element={<div>Página não encontrada</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

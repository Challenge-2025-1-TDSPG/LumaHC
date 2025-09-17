import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import Home from '@routes/Home';
import Faq from '@routes/Faq';
import Integrantes from '@routes/Integrantes';
import Error from '@routes/Error';
import Contato from '@routes/Contato';
import AuxilioCadastro from '@routes/AuxilioCadastro';
import AuxilioTeleconsulta from '@routes/AuxilioTeleconsulta';
import Formulario from './routes/Formulario';

/**
 * Configuração das rotas da aplicação
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/faq', element: <Faq /> },
      { path: '/integrantes', element: <Integrantes /> },
      { path: '/contato', element: <Contato /> },
      { path: '/auxilio/cadastro', element: <AuxilioCadastro /> },
      { path: '/auxilio/teleconsulta', element: <AuxilioTeleconsulta /> },
      { path: '/formulario/*', element: <Formulario /> },
    ],
  },
]);

/**
 * Ponto de entrada da aplicação React
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

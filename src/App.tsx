import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import SystemAnalyst from './pages/SystemAnalyst';
import ITinfra from './pages/ITinfra';
import UIUX from './pages/UIUX';

function App () {
  return (
    <BrowserRouter basename='/portfolio/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='web-dev' element={<WebDev />} />
          <Route path='system-analyst' element={<SystemAnalyst />} />
          <Route path='it-infra' element={<ITinfra />} />
          <Route path='ui-ux' element={<UIUX />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DashboardPage from './routes/Dashaboard';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import Calendar from './routes/calender';
import Analytics from './routes/Analytics';
import Login from './routes/Login';
import Signup from './routes/Signup';
// New Work Here
import Pipelines from './routes/Pipelines';
import WebsiteVisitor from './routes/WebsiteVisitor';
import MultiBox from './routes/Multibox';
import EmailAccounts from './routes/EmailAccounts';
import AILeadScouts from './routes/AILeadScouts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* new work here */}
          <Route path="/pipelines" element={<Pipelines />} />           
          <Route path="/website-visitor" element={<WebsiteVisitor />} /> 
          <Route path="/multi-box" element={<MultiBox />} />           
          <Route path="/email-accounts" element={<EmailAccounts />} /> 
          <Route path="/ai-lead-scouts" element={<AILeadScouts />} />  
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
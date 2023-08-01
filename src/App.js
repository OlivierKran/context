import { AuthProvider } from './Contexts/AuthContext';

import Dashboard from './Components/Dashboard';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Dashboard></Dashboard>
    </AuthProvider>
  );
}

export default App;

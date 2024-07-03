import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import './App.css';
import Landing from './Landing'; // Create this component
import { supabase, fetchUserRole } from './supabaseClient';

function App() {
  const ProtectedRoute = ({ element, ...rest }) => {
    const user = supabase.auth.user();
    const [role, setRole] = React.useState(null);

    React.useEffect(() => {
      if (user) {
        fetchUserRole(user.id).then((role) => {
          setRole(role);
        });
      }
    }, [user]);

    if (role === 'admin') {
      return element;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;

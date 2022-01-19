import React, {useState} from 'react';
import './style.css';
import EventDashboard from '../../Features/Events/eventDashboard/EventDashboard';
import NavBar from '../../Features/nav/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    
    <div>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </div>
  );
}



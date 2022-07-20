import './App.css';
import ComponentA from './components/componentA/componentA';
import Clock from './components/ex4_5_6/clok';

import ContactList from './components/listOfContacts/contactList';





function App() {
  return (
    <div className="App">
      <ComponentA></ComponentA>
      <hr></hr>
      <Clock></Clock>
      <hr></hr>
      <ContactList></ContactList>
    </div>
  );
}

export default App;

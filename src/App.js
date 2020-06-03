import React from 'react';
import './App.css';

import ContactCard from './components/ContactCard';

function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact Cards</h1>

                <section>
                    <ContactCard />
                </section>
            </header>
        </div>
    );
}

export default App;

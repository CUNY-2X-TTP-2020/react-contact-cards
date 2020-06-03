import React from 'react';
import './App.css';

import ContactCard from './components/ContactCard';

function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact Cards</h1>

                <section className="card-grid">
                    <ContactCard />
                    <ContactCard 
                        name="Jane Doe" 
                        mobile="111-111-1111"
                        work="222-222-2222"
                        email="jane@work.net"
                    />
                    <ContactCard 
                        name="Random Dude"
                        mobile="333-333-3333"
                        work="444-444-4444"
                        email="dude@me.io"
                    />
                </section>
            </header>
        </div>
    );
}

export default App;

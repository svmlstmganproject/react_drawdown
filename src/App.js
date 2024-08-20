 // src/App.jsx
 import React from 'react';
 import MarketCrashData from './MarketCrashData';
 
 const App = () => {
     return (
         <div className="App">
             <header className="App-header">
                 <p>Market Crash Data Viewer</p>
             </header>
             <main>
                 <MarketCrashData />
             </main>
         </div>
     );
 };
 
 export default App;
 

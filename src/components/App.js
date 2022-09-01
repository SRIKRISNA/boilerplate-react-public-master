import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relativeNames = ["Brother", "Sister", "Friend", "Maa", "Baa"];
        return (
            <div id="main">
                {/* Do not remove the main div */} 
                
                <ol key="realtiveList" ><h3>Relative List</h3>
                    {relativeNames.map((names, index) => (
                        <li key={`"relativelist" ${index + 1}`}>{names}</li>
                        //key={"namesList" + (index + 1)} 
                    ))}
                </ol>
            </div>
        )
    }
}


export default App;

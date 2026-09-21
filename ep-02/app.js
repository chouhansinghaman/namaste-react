import React from "react"
// 1. Change the import path to 'react-dom/client'
import ReactDOM from "react-dom/client" 

const heading = React.createElement("h1", {}, "Aman Singh Chouhan")

// 2. This will now work perfectly
const root = ReactDOM.createRoot(document.getElementById("main")) 
root.render(heading)

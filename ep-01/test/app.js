// S1. i can't really think of that solid answer. sorry i think i am not paying attention to the class, sahanubuti mt dena bss jo baat hai vhi keh rha.

// S2. When a createElement is used, whatever written after the "type" are props; props are objects that store the remaining two arguments in the createElement. 
// And children are just a part of props, and no there are no different than props. It is simply the third argument which is the actual value or whatever we are doing, that comes under childre.

// ex: 
// {
//     type: "div",
//     props: {
//         id: "main",
//         className: "mainContainer"
//         children: [
//             {type: "h1",
//             props:{
//                 children: "Hi i am H1"
//             }},

//             {type: "h2",
//             props:{
//                 children: "Hi i am H2"
//             }}
//         ]
//     }
// }


// S3. I will use CDN <script> because making a light weight landing page won't require production level bundlers, it can be easily done with CDN <scripts>.


// C1.

// const main = React.createElement("nav", {id: "navbar"}, 
//     [
//         React.createElement("div", {id:"logo"}, 
//             React.createElement("h2", {}, "MySite")
//         ),
        
//         React.createElement("div", {id:"links"},
//             [
//                 React.createElement("h4", {}, "Home"),
//                 React.createElement("h4", {}, "About")
//             ] 
//         ),
//     ]
// )

// C2 . 

// const el = React.createElement("h1", {}, "Hello Aman"); // we need to pass the empty object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(el);

// C3.

// const heading = React.createElement("h1", {id:"greeting"}, "Namaste React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
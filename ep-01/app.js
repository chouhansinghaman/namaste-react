// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World from React!"
// )

// 2.

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//         React.createElement("div", { id: "child1" },
//             [
//                 React.createElement("h1", {}, "H1 tag"),
//                 React.createElement("h2", {}, "H2 tag")
//             ]
//         ),
//         React.createElement("div", { id: "child2" },
//             [
//                 React.createElement("h1", {}, "H2 tag"),
//                 React.createElement("h2", {}, "H3 tag")
//             ]
//         )
//     ]
// )

// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)





// practice
{/* <div id="parent">
  <div id="child1">
    <h1>I'm child1's heading</h1>
  </div>
  <div id="child2">
    <h1>I'm child2's heading</h1>
    <h2>I'm child2's subheading</h2>
  </div>
</div> */}

const main = React.createElement(
    "div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            React.createElement("h1", {}, "I'm child1's heading")
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I'm child2's heading"),
                React.createElement("h2", {}, "I'm child2's subheading")
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(main)
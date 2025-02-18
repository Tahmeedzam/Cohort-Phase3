// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))
/*
Challenge recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).
Create a new h1 element
Give it some textContent
Give it a class name of "header"
append it as a child of the div#root
*/


// function Hello() {
//     return (
//         <h1 className="header">Hello Everyone, welcome to React Tutorial</h1>
//     )
// }

// const root = document.getElementById("root")

// root.append(<Hello />)
// ReactDOM.render(root)


const h1 = document.createElement("h1")
h1.textContent = "Hello Everyone, welcome to React Tutorial"
h1.className = "header"
document.getElementById("root").append(h1)


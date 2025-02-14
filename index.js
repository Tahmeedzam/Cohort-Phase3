// 1hr 7mins

function HomePage() {
    return (
        <div className="homePage">
            <img src="react-icon.png" className="react-logo"></img>
            <h1>Welcome to React Master class</h1>
            <hr></hr>
            <h4>What you will learn:</h4>
            <ol>
                <li>Basics of React</li>
                <li>Learn to create your own website using React</li>
                <li>Use high Styling methods</li>
                <li>Backend</li>
            </ol>
        </div>
    )
}


ReactDOM.render(<HomePage />, document.getElementById("root"))
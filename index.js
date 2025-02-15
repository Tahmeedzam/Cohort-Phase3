// 1hr 7mins



function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="react-icon.png" className="react-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer> <small>© 2025 Zamindar development. All rights reserved.</small></footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1 className="head">Reasons I'm excited to learn React</h1>
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
function HomePage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<HomePage />, document.getElementById("root"))
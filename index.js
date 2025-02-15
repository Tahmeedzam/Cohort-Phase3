// 1hr 7mins

// import Header from "./Header.js"
// import Footer from "./Footer.js"
// import MainContent from "./MainContent.js"

const Header = require("./Header")


function App() {
    return (
        <div>
            <Header />
            {/* <MainContent />
            <Footer /> */}
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
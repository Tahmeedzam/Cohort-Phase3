/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.
We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
access it by using `src="./react-logo.png" in your image
element
* You can also set the 'width' attribute of the image element
just like in HTML. In the slide, I have it set to 40px
*/

const homePage = (
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


ReactDOM.render(homePage, document.getElementById("root"))
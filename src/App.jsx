import React from 'react';

const App = () => {
  const name = "Tahmeed";
  const x = 10;
  const y = 20;
  const names = ['Tahmeed', 'Vishhal', 'Jayesh'];
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h3 style={styles}>Hello {name} </h3>
      <h5>Sum of {x} and {y} = {x + y}</h5>

      <ul>
        {names.map((name, index) => (
          <li key={index} >{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
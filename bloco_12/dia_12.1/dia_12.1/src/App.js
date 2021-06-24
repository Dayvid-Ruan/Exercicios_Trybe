import React from 'react';

function handleClick() {
  console.log('Issoa ae!');
}

function secondButton() {
  console.log('Boa!');
}

function thirdButton() {
  console.log('tudo Bem?');
}


class App extends React.Component {
  render() {
    return (
      <section>
        <button onClick={ handleClick }>Meu Botão</button>
        <button onClick={ secondButton }>Meu Botão</button>
        <button onClick={ thirdButton }>Meu Botão</button>
      </section>
    );
  }
}

export default App;
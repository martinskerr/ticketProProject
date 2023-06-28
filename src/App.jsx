import React from 'react';
import Header from './componentes/header';
import ImagePresentation from './componentes/imagePresentation';
import CartaPresentacionConcierto from "./componentes/cardConcierto"



const App = () => {
  return (
    <div>
      <Header />
      <ImagePresentation/>
      <CartaPresentacionConcierto/>

    </div>
  );
}

export default App;

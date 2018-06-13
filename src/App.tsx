import * as React from 'react';
import CicloVidaMontagem from './components/CicloVidaMontagem';
// import Cartao from './components/Cartao';
// import Input from './components/Input';

export default class App extends React.Component {

   state = {
      valor: 'Inicial',
      valor2: ''
   };

   render() {
      return (
         <div>
            Meu App React
            <br />

            {/* <Input
               valor={this.state.valor}
               aoModificar={(valor) => {
                  this.setState({ valor: valor });
               }}
            />

            <Input
               upper={true}
               valor={this.state.valor2}
               aoModificar={(valor) => {
                  this.setState({ valor2: valor });
               }}
            />

            <br />
            <Cartao
               titulo={this.state.valor}
               subtitulo="Rodin"
            /> */}

            <CicloVidaMontagem />
         </div>
      );
   }
}

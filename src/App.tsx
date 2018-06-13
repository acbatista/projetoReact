import * as React from 'react';
// import CicloVidaUpdateProps from './components/CicloVidaUpdateProps';
// import CicloVidaUpdateState from './components/CicloVidaUpdateState';
// import Tema from './components/Tema';
// import Geometria from './components/Geometria';
import Referencia from './components/Referencia';
// import CicloVidaMontagem from './components/CicloVidaMontagem';
// import Cartao from './components/Cartao';
// import Input from './components/Input';

export default class App extends React.Component {

   state = {
      valor: 'Inicial',
      valor2: '',
      numero: 0
   };
   interval: any;
   componentDidMount() {
   this.interval = setInterval(
      () => {
         this.setState({
            numero: this.state.numero + 1
         });
      },
      5000
   );
   }

   componentWillMount() {
      clearInterval(this.interval);
   }
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
            {/* <CicloVidaMontagem /> */}
            {/* <CicloVidaUpdateProps contador={this.state.numero}/> */}
            {/* <CicloVidaUpdateState contador={this.state.numero}/> */}
            {/* <Tema nome="claro">
               <Geometria tipo="cubo"/>
            </Tema>
            <Tema nome="escuro">
               <Geometria tipo="ciculo"/>
            </Tema> */}

            <Referencia/>

         </div>
      );
   }
}

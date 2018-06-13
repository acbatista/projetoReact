import * as React from 'react';

const styles = {

   card: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      width: 300,
      transition: '0.3s',
      backgroundColor: '#fff'
   },

   cardHover: {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
   },

   container: {
      padding: '2px 16px'
   }
};

export interface Props {
   /**
    * Descricao do titulo
    */
   titulo: string;
   subtitulo: string;
}

export interface State {
   hover: boolean;
   outracoisa: string;
}

export default class Cartao extends React.Component<Props, State> {

   state = {
      hover: false,
      outracoisa: ''
   };

   render() {

      const style = {
         ...styles.card,
         ...(this.state.hover ? styles.cardHover : {})
      };

      return (
         <div
            style={style}
            onMouseEnter={() => {
               this.setState({
                  hover: true,
                  outracoisa: 'XPTO'
               });
            }}
            onMouseLeave={() => {
               this.setState({
                  hover: false,
                  outracoisa: ''
               });
            }}
         >

            <img src="img/img_avatar.png" alt="Avatar" />

            <div style={styles.container}>
               <h4>{this.props.titulo} {this.state.hover ? 'Hover' : ''}</h4>
               <p>{this.props.subtitulo} {this.state.outracoisa}</p>
            </div>
         </div>
      );
   }
}

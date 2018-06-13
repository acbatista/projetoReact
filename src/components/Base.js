import * as React from 'react';
import PropTypes from 'prop-types';

const styles = {

};

export default class Base extends React.Component {

   propTypes = {
      /**
       * Descrição name
       */
      name: PropTypes.string
   };

   state = {

   };

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div />
      );
   }
}


function teste(){
   return <Base />
}

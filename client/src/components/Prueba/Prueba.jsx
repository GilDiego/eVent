import React from 'react';
import { connect } from "react-redux";
import { getPrueba } from "../../actions/actions";
import ActivityCards  from '../ActivityCard/ActivityCard';

const Prueba = ({reducerPrueba, getPrueba}) => {

function setPrueba() {
    getPrueba()
}

    return (
        <div>
            {/* <h1>FromPrueba</h1> */}
            <ActivityCards />
            {/* <button onClick={setPrueba}>REDUX</button>
            <p>{reducerPrueba}</p> */}
        </div>
    )
}


function mapStateToProps(state) {
    return {
      reducerPrueba: state.statePrueba,
     
    };
  }
  export default connect(mapStateToProps, { getPrueba })(Prueba);
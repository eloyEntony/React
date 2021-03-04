import React, {Fragment} from "react"
import "./counter.css";
import {connect} from "react-redux"
import {Plus, Minus, Multiply, Zero, ToTwo} from "../../actions/counterAction"


const Counter = ({counter, Plus, Minus, Multiply, Zero, ToTwo})=>{
    //console.log(counter)
    
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Counter</h2>
                        <span className="counter">{counter}</span>                        
                    </div>
                </div>    
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-success plus" onClick={Plus}>Plus</button>
                        <button type="button" className="btn btn-warning minus" onClick={Minus}>Minus</button>
                        <button type="button" className="btn btn-danger multiply" onClick={() => Multiply(counter)}>Multiply</button>
                        <button type="button" className="btn btn-info zero" onClick={Zero}>Zero</button>
                        <button type="button" className="btn btn-primary" onClick={ToTwo}>Multiply by 2</button>
                    </div> 
                </div>           
            </div>
        </Fragment>
    )
}

const mapStateToProps =({counterReducer})=>{
    const {counter} = counterReducer
    return {counter}
}
const mapDispatchToProps={
    Plus, Minus, Multiply, Zero, ToTwo
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
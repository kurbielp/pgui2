import React, { Component } from 'react';
import { addChartData } from "./actions";

export class AddData extends Component {
    constructor(props){
        super();
        this.props=props;
        this.chartData=[
        this.x=5,
        this.y=6,
        this.v=7,
        this.name='foobar'
            ]
        //super(state);
        //this.state=state
       // this.state= {
        //    parameters:{name:'',x:0,y:0,v:0}
        }

       // this.handleNameChange = this.handleNameChange.bind(this);
       // this.handleXChange = this.handleXChange.bind(this);
      //  this.handleYChange = this.handleYChange.bind(this);
       // this.handleVChange = this.handleVChange.bind(this);
        //this.handleChange = this.handleChange.bind(this)
       // this.handleSubmit = this.handleSubmit.bind(this);
   // };
    /*
    createNewToDoItem = (parameters) => {
        this.setState(prevState => ({
            data: [...prevState.data, parameters]
        }))
    };
    */
    /*
    handleSubmit = (event) =>{
        event.preventDefault();
        alert('submited:[ name: ' + this.state.parameters.name+ ' x: '+ this.state.parameters.x);

    }
    */

handleSubmit = (event) =>{
    event.preventDefault();
    this.props.addChartData(this.chartData)
    console.log(this.chartData)
}

/*
    handleNameChange(event) {
        this.setState({parameters:{name : event.target.parameters.name}});
    }
    handleXChange(event) {
        this.setState({parameters:{x : event.target.parameters.x}});

    }
    handleYChange(event) {
        this.setState({parameters:{y : event.target.parameters.y}});

    }
    handleVChange(event) {
        this.setState({parameters:{v : event.target.parameters.v}});

    }
*/
    render() {
        return (
            <div className={AddData}>

                <h4>Podaj wartości danych</h4>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Nazwa</label>
                        <input type="name" className="form-control" id="nameInput"
                               aria-describedby="nameInput" placeholder="podaj nazwe"
                               value={this.chartData.name} onChange={this.handleNameChange}></input>
                        {/*<small id="nameHelp" className="form-text text-muted">Nazwa danych
                            </small>
                            */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="xValueInput">Wartość x</label>
                        <input type="xValue" className="form-control" id="xValueInput"
                               placeholder="wartość x"
                               value={this.chartData.x} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="yValueInput">Wartość y</label>
                        <input type="yValue" className="form-control" id="yValueInput"
                               placeholder="wartość y"
                               value={this.chartData.y} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vValueInput">Wartość x</label>
                        <input type="vValue" className="form-control" id="vValueInput"
                               placeholder="wartość v"
                               value={this.chartData.v} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    {/*this.createNewToDoItem(this.props)*/}
                </form>
            </div>
        )
    }
}
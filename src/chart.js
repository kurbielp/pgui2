import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { changeChartData } from "./actions";

export class Chart extends Component {
    constructor(props){
            super(props);
            this.props=props;
           // this.props = changeChartData(props)
        }

    render(){
        return (

            <div className={Chart}>
                <p>Tu powinien wyswietlac sie wykres</p>

                <LineChart width={600} height={300} data={this.props.charData}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="x" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="y" stroke="#82ca9d" />
                </LineChart>

            </div>
        )}
}

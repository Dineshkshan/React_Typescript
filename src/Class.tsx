import React, { Component, FormEvent, ObjectHTMLAttributes, ChangeEventHandler, EventHandler } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sample.css'


type StateValue=
{
  Name:string,
  Place:string
}

type StateValues=
{
    state:StateValue[],
    Value:StateValue
}

export default class Class extends Component<{},StateValues>
{
    constructor(props:any)
    {
        super(props);
        this.state={
            Value:{Name:'',Place:''},
            state:[{Name:'Suba',Place:'Chennai'}]

        }
    }
    handleimageClick(index:any)
    {
        var array=this.state.state;
        console.log(index);
        if(index!==-1)
        {
            array.splice(index,1);
            this.setState({state:[...array]});
        }
    }
     handleSubmit=(e:any)=>
     {
        e.preventDefault();
        this.setState({state:[...this.state.state.concat(this.state.Value)]});
        //console.log(this.state.Value);
     }
     handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>
     {
        //console.log(event.currentTarget.value);
        this.setState({Value:{...this.state.Value,[event.currentTarget.name]:event.currentTarget.value}});
    }
    render()
    {
        return(
        <>
        {this.state.state.map(val=><p key={this.state.state.indexOf(val)} className="jumbotron">Name:{val.Name}<br/>Place:{val.Place}<img src="CloseButton.png" id="image"alt="DeleteImage" onClick={()=>this.handleimageClick(this.state.state.indexOf(val))}/></p>)}
        <form onSubmit={this.handleSubmit}>
                <h4 className="container" id="heading">Basic Form</h4>
                <div className="form-group container">
                    <label>Name:</label>
                    <input type="text" className="form-control" id="input" name="Name" autoComplete='off' onChange={this.handleChange} />
                </div>
                <div className="form-group container">
                    <label>Place:</label>
                    <input type="text" className="form-control" name="Place" id="input" autoComplete='off' onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" id="button">Submit</button>
            </form>
        </>
        )
    }
}
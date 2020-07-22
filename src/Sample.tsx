import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import './Sample.css'

type StateValue =
    {
        Name: string,
        place: string
    }
const Sample = () => {
    const [Value, setValue] = useState<StateValue[]>([{ Name: "Dinesh", place: "Namakkal" }]);
    const { register, handleSubmit } = useForm<FormData>();
    const onsubmit = (data: any) => {
        setValue([...Value,{ Name: data.Name, place: data.Place }])
        console.log(data);
    }
    const handleimageClick=(index:any)=>
    {
       var array=Value;
       console.log(index);
       console.log(Value);
       if(index!==-1)
       {
           array.splice(index,1);
           setValue([...array]);
       }
       console.log(Value);
    }
    return (
        <>
        {Value.map(val=><p key={Value.indexOf(val)} className="jumbotron">Name:{val.Name}<br/>Place:{val.place}<img src="CloseButton.png" id="image"alt="DeleteImage" onClick={()=>handleimageClick(Value.indexOf(val))}/></p>)}
            <form onSubmit={handleSubmit(onsubmit)} >
                <h4 className="container" id="heading">Basic Form</h4>
                <div className="form-group container">
                    <label>Name:</label>
                    <input type="text" className="form-control" id="input" name="Name" ref={register} autoComplete='off' />
                </div>
                <div className="form-group container">
                    <label>Place:</label>
                    <input type="text" className="form-control" name="Place" id="input" ref={register} autoComplete='off'/>
                </div>
                <button type="submit" className="btn btn-primary" id="button">Submit</button>
            </form>
        </>
    )

}

export default Sample;
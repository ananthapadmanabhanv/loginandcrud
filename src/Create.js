import React from "react";  
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './Create.css'
export default function Create() {
    return(
        <>
    <form className="sampleform">
       
       <div><label>Item Name</label>
        <input type="text"></input>
        </div> 
        <br/>
        <div>
        <label>Item </label>
        <input type="text"></input>
        </div>

    </form>
    </>
    )
}
;
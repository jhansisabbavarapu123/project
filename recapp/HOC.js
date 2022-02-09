import React, {Component} from 'react';  
 
export default function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            return (  
                <div>  Hi All
                    <HocComponent></HocComponent>  
                    Component Loaded
                </div>  
 
            );  
        }  
    }  
}
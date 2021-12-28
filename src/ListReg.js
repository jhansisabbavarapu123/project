import React from 'react';
class ListReg extends React.Component{
    //Constructor
    constructor(props){
        super(props);
        this.state={
            items:[],
            DataisLoaded:false
        };
    }
    //componentDidMount is used to execute the code
    componentDidMount(){
        fetch("http://localhost:3001/show")
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                items:json,
                DataisLoaded:true
            });
        })
    }
    render(){
        const { DataisLoaded,items}=this.state;
        if(!DataisLoaded) return <div>
            <h1>Register here ......</h1>
        </div>;
        return(
            <div className="App">
                <table border="1" align="center">
                    <th>Id</th><th>firstname</th><th>lastname</th><th>fathername</th><th>mothername</th><th>Dateofbirth</th><th>Gender</th><th>Email</th><th>Password</th><th>PhoneNumber</th><th>Address</th>
                    {
                        items.map((item)=>(
                            <tr key={item._id}><td>{item._id}</td><br/>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.fathername}</td>
                            <td>{item.mothername}</td>
                            <td>{item.Dateofbirth}</td> 
                            <td>{item.gender}</td>              
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.phoneno}</td>
                            <td>{item.Address}</td>
                            </tr>
                        ))
                    }
                </table>
                
            </div>
        );
    }
}
export default ListReg;
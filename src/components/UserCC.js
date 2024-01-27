import React from 'react'

class UserCC extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count : 0,
            userInfo :{
            name : "ABC",
            location : "XYZ"
            }
        }
    }
    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/Namanj1699");
        const data = await response.json();
        console.log(data)
        this.setState({
            userInfo : data,
        })
    }
    render(){
        let {count} = this.state;
        let {avatar_url,name,location} = this.state.userInfo;
        return(
            <div className="user-cards">
                <h1>{count}</h1>
                <button onClick={()=>{
                    // count++; //didn't work
                    this.setState({count : count+2})
                }}>+</button>
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
            </div>
        );
    }
}

export default UserCC;
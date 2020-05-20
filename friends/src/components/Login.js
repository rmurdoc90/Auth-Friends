import React from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component{
    state = {
        credentials: {
            username:'',
            password:''
        }
    }
    componentDidMount(){
    axios
    .post('http://localhost:5000/api/login', {
        username:'Lambda School',
        password: 'i<3Lambd4',
    })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    submit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/protected");
        })
        .catch(err => console.log(err));
        
        
        // axios
        // .post('http://localhost:5000/api/login', {...this.state.credentials})
        // .then(res=>{
        //     localStorage.setItem("token", res.data.payload);
        //     this.props.history.push("/protected");
        //     console.log(res)
        // })
      };

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                   <input
                   type='text'
                   name='username'
                   value={this.state.credentials.username}
                   onChange={this.handleChange}
                   /> 
                     <input
                   type='text'
                   name='password'
                   value={this.state.credentials.password}
                   onChange={this.handleChange}
                   /> 
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login
import {axiosWithAuth} from '../utils/axiosWithAuth';
import React from 'react';

class newFriends extends React.Component{
    state = {
        credentials: {
            name:'',
            age:'',
            email:''
        }
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
            .post("/api/friends", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
            })
            .catch(err => console.log(err));
            };

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                   <input
                   type='text'
                   name='name'
                   value={this.state.credentials.name}
                   onChange={this.handleChange}
                   /> 
                     <input
                   type='text'
                   name='age'
                   value={this.state.credentials.age}
                   onChange={this.handleChange}
                   /> 
                     <input
                   type='text'
                   name='email'
                   value={this.state.credentials.email}
                   onChange={this.handleChange}
                   /> 
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default newFriends


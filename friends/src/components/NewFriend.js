import {axiosWithAuth} from '../utils/axiosWithAuth';
import React from 'react';

class newFriend extends React.Component{
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
    
  
    addFriend = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('/api/friends', this.state.credentials)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
            };

    render(){
        return(
            <div>
                <form >
                   <input
                   type='text'
                   name='name'
                   placeholder='name'
                   value={this.state.credentials.name}
                   onChange={this.handleChange}
                   /> 
                     <input
                   type='text'
                   name='age'
                   placeholder='age'
                   value={this.state.credentials.age}
                   onChange={this.handleChange}
                   /> 
                     <input
                   type='text'
                   name='email'
                   placeholder='email'
                   value={this.state.credentials.email}
                   onChange={this.handleChange}
                   /> 
                    <button onClick={this.addFriend}>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default newFriend


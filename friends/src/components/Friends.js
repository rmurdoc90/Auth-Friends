import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NewFriend from './NewFriend';


class Friends extends React.Component {
    
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                this.setState({friends: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
        <div>
            
            <NewFriend/>
                <div className='list'>
                    {this.state.friends.map(item => (
                       <> 
                        <h2>{item.name}</h2>
                        <h2>{item.age}</h2>
                        <h2>{item.email}</h2>
                       </>
        ))}
                </div>
            
        </div>
        )
    }
}

export default Friends
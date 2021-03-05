import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../../api/axios';
import { withRouter } from 'react-router-dom';


const EditModal = (props) => {

    const [users, setUsers] = useState({})
    const [userPut, setUserPut] = useState({
        username: '',
        password: ''
    })

    useEffect(() => (
        readUsers() // eslint-disable-next-line
    ),[]) 

    const readUsers = async () => {
        let id = props.match.params.id
        let get = await axiosWithAuth().get(`/users/${id}`)
        .then(({data}) => (data));
        setUserPut(get)
    }

    const createUsers = async (e) => {
        e.preventDefault()

        let id = props.match.params.id
        await axiosWithAuth().put(`/users/${id}`, userPut)
        .then(res => {
            console.log(res.data, 'updated')
            props.history.push('/users')
        })
        readUsers()
        .catch(err => console.log(err.response))
    }

    const handleChange = (e) => {
        setUserPut({
            ...userPut, [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h1 class='mb-5 text-center' > Update User </h1>
            <div className='userHeader'>
                <form onSubmit={(e) => createUsers(e)} class='w-50 m-auto'>
                    <div class="mb-3 ">
                    <label class="form-label"> Username </label>
                    <input type="text" 
                    class="form-control p-3"
                    name="username" 
                    value={userPut.username} 
                    onChange={(e) => handleChange(e)}
                    />
                    </div>
                    
                    <div class="mb-3">
                    <label class="form-label"> Password </label>
                    <input type="password" 
                    class="form-control p-3"
                    name="password" 
                    value={userPut.password} 
                    onChange={(e) => handleChange(e)}
                    />
                    </div>

                    <button 
                    type="submit" 
                    class="btn btn-primary p-3">Update</button>
                </form>
            </div>
        </div>
    );
}


export default withRouter(EditModal);
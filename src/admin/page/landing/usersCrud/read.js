import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../../api/axios';
import Pagination from '../pagination';
import Modal from './postModal';
// import Update from './update';
import { Button } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

const UserHeader = (props) => {
    const [usersGet, setUsersGet] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentUsers = usersGet.slice(indexOfFirstPost, indexOfLastPost);

    const paginate =  (pageNumber) => setCurrentPage(pageNumber)

    const readUsers = async (id) => {
        let get = await axiosWithAuth().get('/users', id)
        .then(({data}) => data);
        setUsersGet(get)
    }

    const deleteUsers = (id) => {
        axiosWithAuth().delete(`/users/${id}`, ...usersGet)
        .then(res => (
            readUsers()
        ))
    }
    
    useEffect(() => (
        readUsers() // eslint-disable-next-line
    ),[]) 

    const Header = (e) => {
        // let header = Object.keys(users[0]) 
        // output the id, username, and password 
        // but it's crashing after reload
        let header = Object.keys(usersGet)
        return header.map((data, i) => {
            return <th key={i} style={{color: 'white'}}>{data}</th>
        })
    }

    const editUser = (id) => {
        console.log(id, 'bang')
        props.history.push('/users/' + id)
    }

    const Map = () => {
        return currentUsers.map((data, i) => {
            const {id, username, password} = data

            return (
                <tr key={i} >
                    <td style={{color: 'white'}}> {id} </td>
                    <td style={{color: 'white'}}> {username} </td>
                    <td style={{color: 'white'}}> {password} </td>
                    
                    
                    <Button 
                    style={{ marginLeft: '10px'}}
                    onClick={(e) => editUser(id, e)} >  Edit </Button>
                    <Button 
                    style={{ marginLeft: '10px', }} 
                    onClick={(e) => deleteUsers(id, e)}>
                        Delete
                    </Button>
                </tr>
            )
        })
    }

    return (
        <div>
            <Modal read={readUsers} />
            <h1 style={{color: 'white', textAlign: 'center'}}> Users </h1>
            
            <table class="table table-dark table-hover">
                <tbody class="white">
                    <tr>{Header()} </tr>
                    {Map()}
                </tbody>
            </table>
                <Pagination paginate={paginate} total={usersGet.length} page={postPerPage}  />
        </div>
    )
}

export default withRouter(UserHeader)
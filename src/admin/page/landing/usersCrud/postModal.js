import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, {useState} from 'react';
import {axiosWithAuth} from '../../../api/axios';
import { withRouter } from 'react-router-dom';


const PostModal = (props) => {
    const {
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
  
    const toggle = () => setModal(!modal);
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
    }
    
    const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
    }

    const [users, setUsers] = useState({
      username: "",
      password: ""
  })


  const handleChange = (e) => {
      setUsers({
          ...users, [e.target.name]: e.target.value
      })
  }

  
  const createUsers = async (e) => {
    e.preventDefault(e)
    console.log(e,'created')

    await axiosWithAuth().post(`/users`, users)
    .then(res => ( res.data))
    props.history.push(toggleAll())
    props.read()
    .catch(err => console.log(err.response))
  }
  
    return (
      <div style={{color: 'white'}}>
        <Button onClick={toggle} className='add' style={{background: '#3F729B', color: 'white'}} > Add User </Button>
        
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add New User</ModalHeader>
          <ModalBody>
          <div className='userHeader'>
              <form onSubmit={(e) => createUsers(e)}>
                <div class="mb-3">
                  <label class="form-label"> Username </label>
                  <input type="text" class="form-control" name="username" value={users.username} onChange={(e) => handleChange(e)}/>
                  <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
                </div>
                
                <div class="mb-3">
                  <label class="form-label"> Password </label>
                  <input type="password" class="form-control" name="password" value={users.password} onChange={(e) => handleChange(e)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <br />
            <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
              <ModalHeader > Added User </ModalHeader>
              <ModalBody>New User Created</ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default withRouter(PostModal);
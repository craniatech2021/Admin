import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Auth() {
    
    const [state, setState] = useState([])

    useEffect(() => api() ,[])

    const api = () => {
        axios.get('http://www.postman.com/collections/1a0c6ce986becd1ee712')
        .then(({data}) => setState(data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            {console.log(state)}
        </div>
    )
}

import React, {useState, useEffect} from 'react';
import '../../admin/style/admin.scss';
import {axiosWithAuth} from '../api/axios';
import Pagination from './pagination'

export default function Testimonials () {
    const [referenceAPI, setreferenceAPI] = useState([]);

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(1)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentReference = referenceAPI.slice(indexOfFirstPost, indexOfLastPost);


    const paginate =  (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => (
        api()
    ),[])

    const api = () => axiosWithAuth().get('/testimonials').then(({data}) => setreferenceAPI(data))

    return (
        <div>
            <h1 style={{color: 'white', textAlign: 'center'}}> Testimonials </h1>
            {currentReference.map(data => (
                <form className='artForm'>
                    <label> Name </label>
                    <input 
                    placeholder='Name' 
                    type='text' 
                    value={data.name} 
                    />

                    <label> Title </label>
                    <input 
                    placeholder='Title' 
                    type='text' 
                    value={data.title} 
                    />

                    <label> Image </label>
                    <input placeholder='Image' type='image' src={data.image} alt='bullet' />

                    <label> Testimony </label>
                    <input 
                    placeholder='testimony' 
                    type='text' 
                    value={data.testimony} />

                    <label> Creation_Date </label>
                    <input 
                    placeholder='Date' 
                    type='date'
                    value={data.created_at} />
                </form>
            ))}
            <Pagination pagine={paginate} length={referenceAPI.length} page={postPerPage} />

        </div>
    )
}
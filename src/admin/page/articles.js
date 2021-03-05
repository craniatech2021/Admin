import React, {useState, useEffect} from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../admin/style/admin.scss';
import {axiosWithAuth} from '../api/axios';
import Pagination from './pagination';

export default function Articles () {
    const [ariticlesAPI, setAriticlesAPI] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(1)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentArticles = ariticlesAPI.slice(indexOfFirstPost, indexOfLastPost);


    const paginate =  (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => (
        api()
    ),[])

    const api = () => axiosWithAuth().get('/articles').then(({data}) => setAriticlesAPI(data))

    return (
        <div>
            <h1 style={{color: 'white', textAlign: 'center'}}> Articles </h1>
            {currentArticles.map(data => (
                

                <form className='artForm'>
                    <label className='label'> Title </label>
                    <input 
                    id="title"
                    placeholder='Title' 
                    type='text' 
                    value={data.title} 
                    />

                    <label className='label'> Content </label>
                    <input 
                    id="content"
                    placeholder='Content' 
                    type='text' 
                    value={data.content} 
                    />

                    <label className='label'> Image </label>
                    <input  style={{textAlign:"center", width:'50%', margin: '0 auto'}}
                    id="img"
                    placeholder='Image' 
                    type='image' 
                    src={data.image} 
                    alt='bullet'

                    />

                    <label className='label'> Testimony </label>
                    <input 
                    id="ref"
                    placeholder='testimony' 
                    type='text' 
                    value={data.testimony} 
                    />

                    <label className='label'> Creation_Date </label>
                    <input 
                    id="date"
                    placeholder='Date' 
                    type='date'
                    value={data.created_at} 
                    />
                    <button> Delete </button> 
                </form>
            ))}
            <Pagination pagine={paginate} length={ariticlesAPI.length} page={postPerPage} />
        </div>
    )
}
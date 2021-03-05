import React, {useState, useEffect} from 'react';
import '../../admin/style/admin.scss';
import {axiosWithAuth} from '../api/axios';
import Pagination from './pagination'

export default function Books () {
    const [booksAPI, setBooksAPI] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(1)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentBooks = booksAPI.slice(indexOfFirstPost, indexOfLastPost);


    const paginate =  (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => (
        api()
    ),[])

    const api = () => axiosWithAuth().get('/books').then(({data}) => setBooksAPI(data))


    return (
        <div>
            <h1 style={{color: 'white', textAlign: 'center'}}> Books </h1>
            {currentBooks.map(data => (
                <form className='artForm'>
                    <label> Title </label>
                    <input 
                    placeholder='Title' 
                    type='text' 
                    value={data.title} 
                    />
                    
                    <label> Book_Link </label>
                    <input 
                    placeholder='Book Link' 
                    type='text'
                    value={data.book_link} 
                    />

                    <label> Author </label>
                    <input 
                    placeholder='Author' 
                    type='text'
                    value={data.author} 
                    />

                    <label> Cover Image </label>
                    <input placeholder='Image' type='image' src={data.cover_image} alt='bullet' />

                    <label> Description </label>
                    <input 
                    placeholder='Description' 
                    type='text' 
                    value={data.desc} />

                    <label> Creation_Date </label>
                    <input 
                    placeholder='Date' 
                    type='date'
                    value={data.created_at} />
                </form>
            ))}
            <Pagination pagine={paginate} length={booksAPI.length} page={postPerPage} />

        </div>
    )
}
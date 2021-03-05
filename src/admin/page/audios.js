import React, {useState, useEffect} from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../admin/style/admin.scss';
import {axiosWithAuth} from '../api/axios';
import Pagination from './pagination';

export default function Audios () {
    const [audiosAPI, setAudiosAPI] = useState([]);

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(1)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentAudio = audiosAPI.slice(indexOfFirstPost, indexOfLastPost);


    const paginate =  (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => (
        api()
    ),[])

    const api = () => axiosWithAuth().get('/audios').then(({data}) => setAudiosAPI(data))

    return (
        <div>
            <h1 style={{color: 'white', textAlign: 'center'}}> Audios </h1>
            {currentAudio.map(data => (
                <form className='artForm'>
                    <label> Title </label>
                    <input 
                    placeholder='Title' 
                    type='text' 
                    value={data.title} 
                    />
                    
                    <label> Audio_Link </label>
                    <input 
                    placeholder='Audio Link' 
                    type='text'
                    value={data.audio_link} 
                    />

                    <label> Image </label>
                    <input placeholder='Image' type='image' src={data.image} alt='bullet' />

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
        
        <Pagination pagine={paginate} length={audiosAPI.length} page={postPerPage} />

        </div>
    )
}
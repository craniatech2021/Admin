import React from 'react'

export default function Article_Pagination ({pagine, length, page}) {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(length/page); i++ ) {
        pageNumbers.push(i)
    }
    return (
        <div id="pagi">
            {pageNumbers.map(num => (
                <div key={num} style={{display: 'flex'}}>
                    <div onClick={() => pagine(num)}>
                        <button style={{textAlign: 'center'}}>{num}</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

import React from 'react'

export default function Pagination ({total, page, paginate}) {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(total/page); i++ ) {
        pageNumbers.push(i)
    }
    return (
        <div id="pagi">
            {pageNumbers.map(num => (
                <div key={num} style={{display: 'flex'}}>
                    <div  onClick={() => paginate(num)}>
                        <button>{num}</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

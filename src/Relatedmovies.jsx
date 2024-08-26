import React from 'react'

const Relatedmovies = () => {
  return (
    <div>
        <h2 style={{marginLeft:'90px',marginTop:'50px'}} className='fs-1'>RELATED MOVIES</h2>
       <div style={{marginLeft:'20px',height:'auto'}} className='d-flex flex-column flex-md-row gap-5 p-5 '>
           <div>
                <img className='shadow' src="https://cdn.marvel.com/content/1x/deadpool_lob_crd_02.jpg" alt=""  />
                <h3>DEADPOOL</h3>
                
                <p>2016</p>
           </div>
            
           <div>
                <img className='shadow' src="https://cdn.marvel.com/content/1x/deadpool2_lob_crd_02.jpg" alt="" />
                <h3>DEADPOOL 2</h3>
              
                <p>2018</p>
           </div>
            
       </div>
       
        
    </div>
  )
}

export default Relatedmovies
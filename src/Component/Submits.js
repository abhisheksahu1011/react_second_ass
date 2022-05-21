import React from 'react'

function Submits(props) {
    const {submitData} = props;
  return (
    <div className='sumbit__container__ctn'>
    { submitData.map((v) => {
        return(
            <div className='submit__item' key={v.id}>
            <div className="item_data">
                <p>Name:{v.name}</p>
                <p>Department:{v.dept}</p>
                <p>Rating:{v.rate}</p>
            </div> 

            </div>
        );
    })

    }
      
    </div>
  )
}

export default Submits

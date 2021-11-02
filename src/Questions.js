import React, {useState} from 'react'

//Pass in the Object in the data.js as Props
function Questions({title, info}) {

        //Set the showInfo to false
        
    const [showInfo, setshowInfo] = useState(false)

    return (   
        <div className="question">
                <header>
                    <h4>{title}</h4>
                    <button onClick={()=>setshowInfo(!showInfo)}>
                        {showInfo ? '-' : '+' }
                    </button>
                </header>
                
                {
                    //Display Paragraph only when showInfo is true
                    showInfo &&  <p> {info} </p>
                }
              
              
        </div>
      
    )
}

export default Questions

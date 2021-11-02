
import React, {useState} from 'react';
import Questions from './Questions'
import data from './data'
function App() {
  const [questions,setQuestions] = useState(data);
  return (
    <div className="App">
        <div className="container">
          <h1>FAQ</h1>
         
              <div className="info">
              
                {
                  questions.map((question) => {
                    //Return each question based on its index(id)
                    //{... question }-Spread operator was used to pass in the rest of the properties
                    return <Questions key={question.id} {...question} />
                  })
                }
              </div>
        </div>
    </div>
  );
}

export default App;

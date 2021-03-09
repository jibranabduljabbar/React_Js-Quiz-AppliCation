import React from 'react';
import '../App.css';

class Quiz_AppliCation extends React.Component{
    constructor(){
        super()
        this.state = {
            inpVal1: false,
            inpVal2: false,
            inpVal3: false,
            inpVal4: false,
            inpVal5: false,
            inpVal6: false,
            inpVal7: false,
            inpVal8: false,
            inpVal9: false,
            inpVal10: false,

            score: 0
        }
    }

    result = () => {
if(this.state.inpVal1 == true){
this.setState({
    score: this.state.score++
})
}
else{
    alert("Question_1 Answer Wrong.")
}

if(this.state.inpVal2 == true){
this.setState({
    score: this.state.score++
})  
    alert("Question_2 Answer Correct.")  
}
else{
    alert("Question_2 Answer Wrong.")
}

if(this.state.inpVal3 == true){
this.setState({
    score: this.state.score++
})    
    alert("Question_3 Answer Correct.")
}
else{
    alert("Question_3 Answer Wrong.")
}

if(this.state.inpVal4 == true){
this.setState({
    score: this.state.score++
})    
    alert("Question_4 Answer Correct.")
}
else{
    alert("Question_4 Answer Wrong.")
}

if(this.state.inpVal5 == true){
this.setState({
    score: this.state.score++
})    
    alert("Question_5 Answer Correct.")
}
else{
    alert("Question_5 Answer Wrong.")
}

if(this.state.inpVal6 == true){
this.setState({
    score: this.state.score++
})
    alert("Question_6 Answer Correct.")    
}
else{
    alert("Question_6 Answer Wrong.")
}

if(this.state.inpVal7 == true){
this.setState({
    score: this.state.score++
})
    alert("Question_7 Answer Correct.")    
}
else{
    alert("Question_7 Answer Wrong.")
}

if(this.state.inpVal8 == true){
this.setState({
    score: this.state.score++
})  
    alert("Question_8 Answer Correct.")  
}
else{
    alert("Question_8 Answer Wrong.")
}

if(this.state.inpVal9 == true){
this.setState({
    score: this.state.score++
})  
    alert("Question_9 Answer Correct.")  
}
else{
    alert("Question_9 Answer Wrong.")
}

if(this.state.inpVal10 == true){
this.setState({
    score: this.state.score++
})  
    alert("Question_10 Answer Correct.")  
}
else{
    alert("Question_10 Answer Wrong.")
}

alert(`Score: ${this.state.score} / 10`)

this.setState({
    score: 0
})

}

    render(){
        return(
            <div>
  <div>
        <h1 className="head">Quiz AppliCation</h1>
        <br />
        <div>
          <fieldset>
            <h4><b>Q1:</b> <abbr className="abbr"> Which bird does not make its nest?</abbr></h4>
            <ol>
              <li>
                Crow
                <input type="radio" name="q1" id="q-1_inp-1" />
              </li>
              <li>
                Eagle
                <input type="radio" name="q1" id="q-1_inp-2" />
              </li>
              <li>
                Sparrow
                <input type="radio" name="q1" id="q-1_inp-3" />
              </li>
              <li>
                Cuckoo
                <input type="radio" onChange={(e) => this.setState({
                    inpVal1: e.target.checked
                })} name="q1" id="q-1_inp-4" />
              </li>
            </ol>
            <p>Question: 1</p>
          </fieldset>
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q2:</b> <abbr className="abbr"> South Pacific Nuclear Free Zone Treaty was signed by the United States of America,  United Kingdom and_________ ?</abbr></h4>
            <ol>
              <li>
                Soviet Union
                <input type="radio" name="q2" id="q-2_inp-1" />
              </li>
              <li>
                China
                <input type="radio" name="q2" id="q-2_inp-2" />
              </li>
              <li>
                France
                <input type="radio"onChange={(e) => this.setState({
                    inpVal2: e.target.checked
                })} name="q2" id="q-2_inp-3" />
              </li>
              <li>
                Germany
                <input type="radio" name="q2" id="q-2_inp-4" />
              </li>
            </ol>
            <p>Question: 2</p>
          </fieldset>
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q3:</b> <abbr className="abbr"> Who was the first President of the Constitution Assembly of Pakistan? </abbr></h4>
            <ol>
              <li>
                Sardar Abdur Rab Nishtar
                <input type="radio" name="q3" id="q-3_inp-1" />
              </li>
              <li>
                Liaquat Ali Khan
                <input type="radio" name="q3" id="q-3_inp-2" />
              </li>
              <li>
                Quaid-e-Azam
                <input type="radio" onChange={(e) => this.setState({
                    inpVal3: e.target.checked
                })} name="q3" id="q-3_inp-3" />
              </li>
              <li>
                Moulvi Tameez-ud-Din
                <input type="radio" name="q3" id="q-3_inp-4" />
              </li>
            </ol>
            <p>Question: 3</p>
          </fieldset>
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q4:</b> <abbr className="abbr"> Who was the first Chairman of the SAARC ?</abbr></h4>
            <ol>
              <li>
                Indira Gandhi
                <input type="radio" name="q4" id="q-4_inp-1" />
              </li>
              <li>
                Zia ur Rehman
                <input type="radio" name="q4" id="q-4_inp-2" />
              </li>
              <li>
                Hussain Muhammad Ershad
                <input type="radio" onChange={(e) => this.setState({
                    inpVal4: e.target.checked
                })} name="q4" id="q-4_inp-3" />
              </li>
              <li>
                Zulfiqar Ali Bhutto
                <input type="radio" name="q4" id="q-4_inp-4" />
              </li>
            </ol>
            <p>Question: 4</p>
          </fieldset>
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q5:</b> <abbr className="abbr"> Which River is called ‘The Sorrow of the Bengal’ ?</abbr></h4>
            <ol>
              <li>
                Ratna River
                <input type="radio" name="q5" id="q-5_inp-1" />
              </li>
              <li>
                Soan River
                <input type="radio" name="q5" id="q-5_inp-2" />
              </li>
              <li>
                Damodar River
                <input type="radio" onChange={(e) => this.setState({
                    inpVal5: e.target.checked
                })} name="q5" id="q-5_inp-3" />
              </li>
              <li>
                Huran River
                <input type="radio" name="q5" id="q-5_inp-4" />
              </li>
            </ol>
            <p>Question: 5</p>
          </fieldset>
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q6:</b> <abbr className="abbr"> ‘Global 500’ awards are given for the outstanding achievement in which of the following field ?</abbr></h4>
            <ol>
              <li>
                Population control
                <input type="radio" name="q6" id="q-6_inp-1" />
              </li>
              <li>
                Protection of environment
                <input type="radio" onChange={(e) => this.setState({
                    inpVal6: e.target.checked
                })} name="q6" id="q-6_inp-2" />
              </li>
              <li>
                Elimination of corruption
                <input type="radio" name="q6" id="q-6_inp-3" />
              </li>
              <li>
                Drug free society
                <input type="radio" name="q6" id="q-6_inp-4" />
              </li>
            </ol>
            <p>Question: 6</p>
          </fieldset>    
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q7:</b> <abbr className="abbr"> Wellington Trophy is related to which game ?</abbr></h4>
            <ol>
              <li>
                Hockey
                <input type="radio" name="q7" id="q-7_inp-1" />
              </li>
              <li>
                Tennis
                <input type="radio" name="q7" id="q-7_inp-2" />
              </li>
              <li>
                Rowing
                <input type="radio" onChange={(e) => this.setState({
                    inpVal7: e.target.checked
                })} name="q7" id="q-7_inp-3" />
              </li>
              <li>
                Swimming
                <input type="radio" name="q7" id="q-7_inp-4" />
              </li>
            </ol>
            <p>Question: 7</p>
          </fieldset>    
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q8:</b> <abbr className="abbr"> Which Mughal King ordered to translate famous Hindu books “Ramyana and Mahabharta” in Persian language ?</abbr></h4>
            <ol>
              <li>
                Jalal uddin Akbar
                <input type="radio" onChange={(e) => this.setState({
                    inpVal8: e.target.checked
                })} name="q8" id="q-8_inp-1" />
              </li>
              <li>
                Zahiruddin Babar
                <input type="radio" name="q8" id="q-8_inp-2" />
              </li>
              <li>
                Aurangzeb Alamgir
                <input type="radio" name="q8" id="q-8_inp-3" />
              </li>
              <li>
                Shah-jahan
                <input type="radio" name="q8" id="q-8_inp-4" />
              </li>
            </ol>
            <p>Question: 8</p>
          </fieldset>    
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q9:</b> <abbr className="abbr"> The bird which lays more than 100 eggs in one nest is___________ ?</abbr></h4>
            <ol>
              <li>
                Kiwi
                <input type="radio" name="q9" id="q-9_inp-1" />
              </li>
              <li>
                Ostrich
                <input type="radio" onChange={(e) => this.setState({
                    inpVal9: e.target.checked
                })} name="q9" id="q-9_inp-2" />
              </li>
              <li>
                Owl
                <input type="radio" name="q9" id="q-9_inp-3" />
              </li>
              <li>
                Parrot
                <input type="radio" name="q9" id="q-9_inp-4" />
              </li>
            </ol>
            <p>Question: 9</p>
          </fieldset>    
        </div>
        <br />
        <div>
          <fieldset>
            <h4><b>Q10:</b> <abbr className="abbr"> Term Chinaman is related to which sports ?</abbr></h4>
            <ol>
              <li>
                Football
                <input type="radio" name="q10" id="q-10_inp-1" />
              </li>
              <li>
                Cricket
                <input type="radio" onChange={(e) => this.setState({
                    inpVal10: e.target.checked
                })} name="q10" id="q-10_inp-2" />
              </li>
              <li>
                Hockey
                <input type="radio" name="q10" id="q-10_inp-3" />
              </li>
              <li>
                Volleyball
                <input type="radio" name="q10" id="q-10_inp-4" />
              </li>
            </ol>
            <p>Question: 10</p>
          </fieldset>    
        </div>
        <br />
        <div>
          <button onClick={this.result}>Result</button>
        </div>
      </div>
            </div>
        )
    }
}

export default Quiz_AppliCation;
import { useState } from "react"
import Header from "./Header"
import Score from './Score'
import Button from "./Button"
import Question from "./Question"

export default function App() {
    const [score, setScore] = useState(0)
    
    const scoreChange = (what) =>{
        if (what === 'reset') {
            setScore(0)
        } else {
            what === 'increase' ? setScore(score + 100) : setScore (score - 100)
        }
    }

    return (
        <div>

            <Header/>

            <main>
                <Score score ={score}/>

                <div className="button-area">
                    <button onClick={(e) => scoreChange('decrease')}>Decrease</button>
                    <button onClick={(e) => scoreChange('increase')}>Increase</button>
                    <button onClick={(e) => scoreChange('reset')}>Reset</button>
                </div>

                <h1>Let's play!</h1>
                <Question />
            </main>
        </div>
    )
}
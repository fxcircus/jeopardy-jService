import { useState } from "react"
import Header from "./Header"
import Score from './Score'
import Button from "./Button"
import Question from "./Question"

export default function App() {
    const [score, setScore] = useState(0)
    const [qScore, setQScore] = useState(0)

    const loadScore = (num) => {
        setQScore(num)
    }

    const scoreChange = (what) =>{
        if (what === 'reset') {
            setScore(0)
        } else {
            what === 'increase' ? setScore(score + qScore) : setScore (score - qScore)
        }
    }

    return (
        <div>

            <Header/>

            <main className="border">
                <Score score ={score}/>

                <div className="button-area">
                    <button onClick={(e) => scoreChange('decrease')}>Decrease</button>
                    <button onClick={(e) => scoreChange('increase')}>Increase</button>
                    <button onClick={(e) => scoreChange('reset')}>Reset</button>
                </div>

                <h3>Let's play!</h3>
                <Question loadScore={loadScore} />
            </main>
        </div>
    )
}
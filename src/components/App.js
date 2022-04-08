import { useState } from "react"
import Header from "./Header"
import Score from './Score'
import Button from "./Button"
import Question from "./Question"

export default function App() {
    const [score, setScore] = useState(0)
    const [category, setCategory] = useState('')
    const [points, setPoints] = useState(0)
    const [answer, setAnswer] = useState('')


    return (
        <html>

            <Header/>

            <main>
                <Score score ={score}/>

                <div className="button-area">
                    <Button text="Decrease"/>
                    <Button text="Increase"/>
                    <Button text="Reset"/>
                </div>

                <h1>Let's play!</h1>
                <Button text="Get Question"/>
                <Question></Question>
                <Button text="click to Reveal Question"/>
            </main>
        </html>
    )
}
import { useState, useEffect } from "react"
import Button from "./Button"

export default function Question(props) {
    const [category, setCategory] = useState("")
    const [points, setPoints] = useState(0)
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [reveal, setReveal] = useState(false)
    const url = `http://jservice.io/api/random`

    const getQuestion = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCategory(data[0].category.title)
            setPoints(data[0].value)
            setAnswer(data[0].answer)
            setQuestion(data[0].question)
            setReveal(false)
        } catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getQuestion()
    }, [])

    return (
        <div>
            <button onClick={(e) => getQuestion()}>Get Question</button>
            <div className="med">
                <div className="border">Category<br/><div className="small">{category}</div></div>
                <div className="border">Points<br/><div className="small">{points}</div></div>
                <div className="border">Answer<br/><div className="small">{answer}</div></div>
            </div>
            <button onClick={(e) => setReveal(!reveal)}>Click to reveal question</button>
            <div class="extra">
                {
                    reveal ? <div className="border small">{question}</div> : ""
                }
            </div>
        </div>
    )
}
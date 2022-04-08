import { useState, useEffect } from "react"

export default function Question(props) {
    const [category, setCategory] = useState("")
    const [points, setPoints] = useState(0)
    const [answer, setAnswer] = useState('')
    const url = `http://jservice.io/api/random`

    const getQuestion = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCategory(data[0].category.title)
            setPoints(data[0].value)
            setAnswer(data[0].answer)
        } catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getQuestion()
    }, [])

    return (
        <div>
            <h2>Category: {category}</h2>
            <h3>Points: {points}</h3>
            <h3>Answer: {answer}</h3>
        </div>
    )
}
import { useState, useEffect } from "react"

export default function Question(props) {
    const [category, setCategory] = useState('')
    const [points, setPoints] = useState(0)
    const [answer, setAnswer] = useState('')

    const url = `http://jservice.io/api/random`

    // const getQuestion = async () => {
    //     try {
    //         const 
    //     }
    // }

    useEffect(() => {

    }, [])

    return (
        <div>
            <h2>category: {category}</h2>
            <h3>Points: {points}</h3>
            <h3>Answer: {answer}</h3>
        </div>
    )
}
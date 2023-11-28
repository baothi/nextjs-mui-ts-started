"use client"
import React, {useState} from 'react'

const LikePage = () => {
    const [name, setName] = useState("Nguyen bao thi")
    return (
        <div>
            like page: width = {name}
        </div>
    )
}

export default LikePage;
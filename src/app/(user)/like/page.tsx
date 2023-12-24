"use client"
import React, {useState} from 'react'

const LikePage = () => {
    console.log("ProfilePage is available on your application :", process.env.NEXT_PUBLIC_BACKEND_URL);
    const [name, setName] = useState("Nguyen bao thi")
    return (
        <div>
            like page: width = {name}
        </div>
    )
}

export default LikePage;
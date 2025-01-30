import React from "react"
import Select from "./components/Select"

function App() {

    return (
        <div className="max-w-screen min-h-screen h-full bg-new-blue-300">
            <div className="
                   bg-new-bg-color mx-auto w-[600px] h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   inline-flex flex-col gap-5 justify-center items-center text-new-text-color
                ">
                <h1>Phone number validation</h1>
                <Select />
            </div>
        </div>
    )
}

export default App

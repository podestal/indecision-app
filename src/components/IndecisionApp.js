import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"
import React from "react"

const IndecisionApp = () => {

    const title = "Indecision"
    const subTitle = "Put your lide in hands of a computer"
    const defaultOptions = ["Thing One", "Thing Two", "Thing Four"]

    let [options, setOptions] = React.useState(defaultOptions)

    const handelDeleteOptions = () => {
        setOptions([])
    }

    const handlePick = () => {
        alert(options[Math.floor(Math.random() * options.length)])
    }

    const handleAddOption = (option) => {
        setOptions([...options, option])
    }

    return (
        <div>
            <Header title={title} subTitle = {subTitle}/>
            {options.length > 0 && <Action handlePick={handlePick}/>}
            <Options 
                options={options}
                handelDeleteOptions={handelDeleteOptions}
            />
            <AddOption 
                handleAddOption={handleAddOption}
            />
        </div>
    )
}

export default IndecisionApp
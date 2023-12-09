const AddOption = (props) => {

    const handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if (option) {
            props.handleAddOption(option)
        }
        e.target.elements.option.value = ""
    }

    return (
        <div>
            <form onSubmit={handleAddOption}>
                <input tyoe="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )
}

export default AddOption
import Option from "./Option"

const Options = (props) => {

    return (
        <div>
            <button onClick={props.handelDeleteOptions}>Remove all</button>
            {props.options.map( option => <Option key={option} optionText={option}/>)}
            {/* <p>Your options are {props.options.length}</p> */}
            {/* <Option /> */}
        </div>
    )
}

export default Options

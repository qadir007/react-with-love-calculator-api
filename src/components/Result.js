
function Result(props){
    return (
        <div className="row">
            <div className="col-12">
                <div className="card blue-grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Result: </span>
                        <p className="">{props.data.fname} love {props.data.sname} {props.data.percentage} percent and my advice is {props.data.result}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
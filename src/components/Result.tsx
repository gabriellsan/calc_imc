interface ResultProps {
    result:any,
}

export default function Result(props:ResultProps) {
    return (
        <div>
            <p>Result: {props.result}</p>
        </div>
    )
}
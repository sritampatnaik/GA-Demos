const History = (props) => {
    return (
        <section>
            <ul>
                {props.activities.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
        </section>
    )
}

export default History;
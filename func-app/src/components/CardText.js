function CardText(props) {
    // const title = props.heading;
    // const text = props.subHeading;

    const { heading, subHeading } = props
    
    return (
        <div>
            <h5 className="card-title">
                {heading}
            </h5>
            <p className="card-text">
                {subHeading}
            </p>
        </div>
    );
}

export default CardText;
import './Card.css';
import CardText from './CardText';

function Card(propsss) {
    console.log(propsss)
    return (
        <div className="card">
            {/* <img className="card-img-top" /> */}
            <div className="card-body">
                <CardText heading={propsss.title} subHeading={propsss.desc} />
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;
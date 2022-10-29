export default function Content(props){
    return(
        <div className="content-container">
            <img className="hero_img" src = {"/images/"+props.img} alt="fuji photo"></img>
            <div className="content-des">
                <div className="content-line">
                    <img src="/images/pin.png"></img>
                    <p className="loco_name">{props.loco_name}</p>
                    <a href="w.w.w.google.maps.com">view on google maps</a>
                </div>
                <h1 className="location">{props.location}</h1>
                <h4 className="dates">{props.dates}</h4>
                <p className="details">{props.des}</p>
            </div>
        </div>
    )
}
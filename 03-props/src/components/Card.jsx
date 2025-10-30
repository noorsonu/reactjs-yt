const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="" />
                <h1>{props.user}</h1>
                <p>{props.p}</p>
                <button>View Profile</button>
            </div>
        </>
    )
}

export default Card
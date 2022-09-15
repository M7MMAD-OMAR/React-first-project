
export const Actions = (props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.body}</p>
            </div>
            {/*<figure><img src="https://placeimg.com/640/480/animals/grayscale" alt="Shoes" /></figure>*/}
        </div>
    )

}

function Card(props) {
    return (
        <div
            className="m-7 max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="src/components/Card#">
                <img className="rounded-t-lg" src={props.img} alt={props.title}></img>
            </a>
            <div className="p-5">
                <a href="src/components/Card#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.body}</p>

            </div>
        </div>

    );
}

export default Card;
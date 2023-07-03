export default function Story(props) {
    return (
        <>
            <div className="story">
                <div className="imagem">
                    <img src={props.profile} alt={props.user} />
                </div>
                <div className="usuario">
                    {props.user}
                </div>
            </div>
        </>
    )
}
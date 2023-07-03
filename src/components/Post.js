import { useState } from "react"

export default function Post(props) {

    const [ liked, setLiked] = useState(false)
    const [ likeAmount, setLikeAmount] = useState(props.post.likes)
    const [ saved, setSaved] = useState(false)

    function likePostByImg(){
        if (!liked){
            setLiked(true)
            const newLikeAmount = likeAmount + 0.001
            setLikeAmount(newLikeAmount)
        }
    }

    function likePost(){
        if (!liked){
            setLiked(true)
            const newLikeAmount = likeAmount + 0.001
            setLikeAmount(newLikeAmount)
        }else{
            setLiked(false)
            const newLikeAmount =likeAmount - 0.001
            setLikeAmount(newLikeAmount)
        }
    }

    function savePost(){
        if(!saved){
            setSaved(true)
        }else {
            setSaved(false)
        }
    }

    return (
        <>
            <div className="post" data-test="post" >
                <div className="topo">
                    <div className="usuario">
                        <img src={props.post.profile} alt={props.post.user} />
                        {props.post.user}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img src={props.post.content} alt={props.post.alt} onDoubleClick={likePostByImg} data-test="post-image" />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <div className={!liked ? "" : "curtido"}>
                                <ion-icon name={!liked ? "heart-outline" : "heart"} onClick={likePost} data-test="like-post" ></ion-icon>
                            </div>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={!saved ? "bookmark-outline" : "bookmark"} onClick={savePost} data-test="save-post" ></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.post.profileLike} alt={props.post.likedBy} />
                        <div className="texto">
                            Curtido por <strong>{props.post.likedBy}</strong> e <strong data-test="likes-number" >outras {likeAmount} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
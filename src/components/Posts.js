import Post from "./Post";

export default function Posts() {

    const posts = [
    {profile: "assets/img/meowed.svg", 
        user: "meowed", 
        content: "assets/img/gato-telefone.svg", 
        alt: "gato-telefone", 
        profileLike: "assets/img/respondeai.svg", 
        likedBy: "respondeai", 
        likes: 101.523},
    {profile: "assets/img/barked.svg", 
        user: "barked", 
        content: "assets/img/dog.svg", 
        alt: "dog", 
        profileLike: "assets/img/adorable_animals.svg", 
        likedBy: "adorable_animals", 
        likes: 99.158},
    {profile: "https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20211228132731_186999814_DZ.png", 
        user: "SneakerHead", 
        content: "https://cf.shopee.com.br/file/sg-11134201-22110-szxm2obysgjv82", 
        alt: "tenis", 
        profileLike: "https://cdn.pensador.com/img/authors/mi/ch/michael-jordan-l.jpg", 
        likedBy: "Jordan", 
        likes: 743.746}
    ]

    return(
        <div className="posts">
            {posts.map(post => <Post post={post} key={post.user} />)}
        </div>
    )
}
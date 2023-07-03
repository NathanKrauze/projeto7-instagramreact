import Suggestion from "./Suggestion";

export default function Suggestions() {

    const suggestions= [{profile:"assets/img/bad.vibes.memes.svg", user:"bad.vibes.memes", reason:"Segue você" },
    {profile:"assets/img/chibirdart.svg", user:"chibirdart", reason:"Segue você" },
    {profile:"assets/img/razoesparaacreditar.svg", user:"razoesparaacreditar", reason:"Novo no Instagram" },
    {profile:"assets/img/adorable_animals.svg", user:"adorable_animals", reason:"Segue você" },
    {profile:"assets/img/smallcutecats.svg", user:"smallcutecats", reason:"Segue você" }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(suggestion => 
                <Suggestion 
                profile={suggestion.profile} 
                user={suggestion.user} 
                reason={suggestion.reason} 
                key={suggestion.user} />
            )}
        </div>
    )
}
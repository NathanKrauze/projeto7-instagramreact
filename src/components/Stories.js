import Story from "./Story";

export default function Stories() {
    
    const stories = [{profile: "assets/img/9gag.svg", user: "9gag"},
    {profile: "assets/img/meowed.svg", user: "meowed"},
    {profile: "assets/img/barked.svg", user: "barked"},
    {profile: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
    {profile: "assets/img/wawawicomics.svg", user: "wawawicomics"},
    {profile: "assets/img/respondeai.svg", user: "respondeai"},
    {profile: "assets/img/filomoderna.svg", user: "filomoderna"},
    {profile: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}
    ]
    
    return (
        <div className="stories">
            {stories.map(story => <Story profile={story.profile} user={story.user} key={story.user}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
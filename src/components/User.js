import { useState } from "react"

export default function User() {
    const [ profile, setProfile] = useState('assets/img/catanacomics.svg')
    const [ name, setName] = useState('catanacomics')

    function choosePhoto(){
        const newPhoto = prompt('digite o link da foto:')
        if (!newPhoto) {
            alert('Para mudar a foto, tente novamente e digite o link da foto')
        }
        else {
            setProfile(newPhoto)
        }
    }

    function chooseName(){
        const newName = prompt('digite o nome de usuário:')
        if (!newName) {
            alert('Para mudar o nome, digite um nome válido')
        }
        else {
            setName(newName)
        }
    }

    return (
        <div className="usuario">
            <img src={profile} onClick={choosePhoto} alt="imagem de perfil" data-test="profile-image" />
            <div className="texto">
                <span>
                    <strong data-test="name" >{name}</strong>
                    <ion-icon name="pencil" onClick={chooseName} data-test="edit-name" ></ion-icon>
                </span>
            </div>
        </div>
    )
}
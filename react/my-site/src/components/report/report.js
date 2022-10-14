import './report.css'

export const Report = (props) => {
    const img = props.img
    const occupation = props.occupation
    const name = props.name
    const description = props.description

    return (<div class="report">
                <div class="picture">
                    <img id="profile-pic" src={img} alt="profile-pic"/>
                </div>
                <div class="description">
                    <div class="occupation">
                        <p>{occupation}</p>
                    </div>
                    <div class="name">
                        <p><b>{name}</b></p>
                    </div>
                    <div class="text">
                        <p>{description}</p>
                    </div>
                    <div class="buttons">
                        <button id="download" type="button">Download CV</button>
                        <button id="contact" type="button">Contact</button>
                    </div>
                </div>
            </div>
    )
}
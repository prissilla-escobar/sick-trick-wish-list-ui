import './Card.css'

function Card({ stance, name, obstacle, tutorial }) {
    return(
        <div className='trick-card'>
            {stance} {name} <br />
            Obstacle: {obstacle} <br />
            Link to tutorial:<br />
            {tutorial}
        </div>
    )
}

export default Card
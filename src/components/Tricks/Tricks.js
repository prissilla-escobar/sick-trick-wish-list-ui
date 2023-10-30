import './Tricks.css'
import Card from '../Card/Card'

function Tricks({ tricks }) {
    console.log('TRICKS', tricks)
    const trickCards = tricks.map(trick => {
        return (
            <Card 
                key={trick.id}
                id={trick.id}
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
            />
        )
    })

    return(
        <div className='tricks-container'>{trickCards}</div>
    )
}

export default Tricks
import './Form.css'
import { useState } from 'react'

function Form({addTrick}) {
    const [stance, setStance] = useState('')
    const [trickName, setTrickName] = useState('')
    const[obstacle, setObstacle] = useState('')
    const [linkTutorial, setLinkTutorial] = useState('')

    function submitTrick(event) {
        event.preventDefault()
 
        if (!stance.length || !trickName.length || !obstacle.length || !linkTutorial.length) {
            alert('You must fill in all fields before submitting!')
            return
        }

        const trickNew= {
            id: Date.now(),
            stance,
            name:trickName,
            obstacle,
            tutorial:linkTutorial
        }

        addTrick(trickNew)
        clearInput()
    }

    function clearInput() {
        setStance('')
        setTrickName('')
        setObstacle('')
        setLinkTutorial('')
    }

    return (
        <form>
            <select id="stance" className="stance" value={stance} onChange={event => setStance(event.target.value)}>
                <option value="" disabled selected>Choose Your Stance</option>
                <option value="regular">Regular</option>
                <option value="switch">Switch</option>
            </select>
            <input type='text' className='trick-type' placeholder='Name of Trick' value={trickName} onChange={(event) => setTrickName(event.target.value)} />
            <select id="obstacle" className="obstacle" value={obstacle} onChange={event => setObstacle(event.target.value)}>
                <option value="" disabled selected>Choose Your Obstacle</option>
                <option value="flatground">Flatground</option>
                <option value="ledge">Ledge</option>
                <option value="rail">Rail</option>
                <option value="stairs">Stairs</option>
                <option value="pool">Pool</option>
            </select>
            <input type='text' className='tutorial-link' placeholder='Link to Tutorial' value={linkTutorial} onChange={(event) => setLinkTutorial(event.target.value)} />
            <button onClick={(event) => submitTrick(event)} >Send It!</button>
        </form>
    )
}

export default Form
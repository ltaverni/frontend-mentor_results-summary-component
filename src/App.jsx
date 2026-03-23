import './App.css'
import categories from './data.json'

const Categories = () => {
    return (
        <div>
            {categories.map((category) => {
                return (
                    <div key={category.category} >
                        <img src={category.icon} ></img>
                        <div>{category.category}</div>
                        <div>{category.score} / 100</div>
                    </div>
                )
            })}
        </div>
    )
}

const Summary = () => {
    return (
        <div className='summary'>
            <div>Summary</div>
            <Categories />
            <button>Continue</button>
        </div>
    )
}

const Score = () => {
    return (
        <div>
            <div>NOTE</div>
            <div>of 100</div>
        </div>
    )
}

const Results = () => {
    return (
        <div className='results'>
            <div>Your Result</div>
            <Score />
            <div>RATE</div>
            <div>You scored higher than 65% of the people who have taken the tests.</div>
        </div>
    )
}

const Card = () => {
    return (
        <div className='card'>
            <Results />
            <Summary />
        </div>
    )
}

const App = () => {
    return (
        <>
            <Card />
        </>
    )
}

export default App

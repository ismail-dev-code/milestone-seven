export default function Singers ({singer}){
    console.log(singer);
    return (
        <div className="Student">
            <h4>Singer Name: {singer.name}</h4>
            <h4>Singer Age: {singer.Age}</h4>
            <h5>Singer District: {singer.District}</h5>
            <h6>Singer Country: {singer.Country}</h6>
        </div>
    )
}
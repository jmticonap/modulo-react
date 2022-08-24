import './MeCard.css'


export default function MeCard({title, color, list}){

    const sayhi = () => {
        alert(title)
    }

    return (
        <div className="mecard" onClick={sayhi} style={{backgroundColor: color}}>
            <h1>{title}</h1>
            <ul>
                { list?.map((itm,i) => <li key={itm}>{itm}</li>) }
            </ul>
        </div>
    );
}
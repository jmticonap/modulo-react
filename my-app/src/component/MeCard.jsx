import './MeCard.css'


export default function MeCard(props){

    const sayhi = () => {
        alert(props.title)
    }

    return (
        <div className="mecard" onClick={sayhi} style={{backgroundColor: props.color}}>
            <h1>{props.title}</h1>
            <ul>
                { props.list?.map((itm,i) => <li key={itm}>{itm}</li>) }
            </ul>
        </div>
    );
}
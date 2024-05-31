export default function ImageCard(props) {
  return (
    <div className="None:container">
        <img className={`object-cover ${props.width} ${props.height}`} src={props.src} alt="burger img"></img>
    </div>
  )
}
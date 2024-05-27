export default function ImageCard(props) {
  return (
    <div className="None:container bg-black">
        <img className={`object-cover w-full ${props.h}`} src={props.src} alt="burger img"></img>
    </div>
  )
}
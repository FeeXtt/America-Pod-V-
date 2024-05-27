export default function ImageCard(props) {
  return (
    <div className="None:container bg-black">
        <img className="object-cover w-full h-128" src={props.src} alt="burger img"></img>
    </div>
  )
}
export default function Button(props) {
  return (
    <button className={`text-lg transform hover:drop-shadow-slate800 hover:-translate-y-0.25 hover:-translate-x-0.25 ${props.clas}`}>
        {props.text}
    </button>
  )
}
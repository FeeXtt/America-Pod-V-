export default function Button(props) {
  return (
    <button className={`transition duration-150 ease-in-out text-lg transform hover:drop-shadow-slate800 hover:-translate-y-0.25 hover:-translate-x-0.25 ${props.clas}`}>
        {props.text}	 
    </button>	
  )
}
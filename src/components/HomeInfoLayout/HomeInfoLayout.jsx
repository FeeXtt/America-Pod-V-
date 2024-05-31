import InfoCard from "../InfoCard/InfoCard";

export default function HomeInfoLayout() {
  return (
    <>
    <div className="flex justify-evenly">
        <InfoCard color="bg-slate-700"/>
        <InfoCard color="bg-slate-700"/>
        <InfoCard color="bg-slate-700"/>
    </div>
    </>
  )
}

export default function Events() {
 let handleOnClick=(name)=>{
  alert("Hello in alert.... \n Mr. " + name)
 }

  return (
    <>
    <h1>Events</h1>
    <button className="w-25 btn btn-primary" onClick={()=>handleOnClick("Rishi")}> Click Here</button>
     </>
  )
}

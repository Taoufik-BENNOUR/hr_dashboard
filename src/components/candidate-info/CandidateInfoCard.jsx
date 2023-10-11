import "./candidateInfo.css"

const CandidateInfoCard = () => {
  return (
    <div  className='card-container'>
        <div>
            <b>First name</b> <b>Last name</b>  
            <p>Posisition : <span>Company Name</span></p>
            <p>Ingénieur Structure:<span>Company Name<span></span></span></p>
            <p>Structural Engineer:<span><span>Company Name</span></span></p>
            </div>
            <div>
                <input type="checkbox" name="" id="" />
            </div>
    </div>
  )
}

export default CandidateInfoCard
import React from 'react'

function About(props) {
  return (
    // text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "dark" : "light"}`
    // text-${props.mode==="light" ? "light" : "dark"} bg-${props.mode==="light" ? "dark" : "light"}
    // text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}

    <>
        <div className={`container mt-5 text-${props.mode==="light" ? "dark" : "light"}`}>
        <h1 className={`text-${props.mode==="light" ? "dark" : "light"}`}>About Us</h1> 
        <div className={`accordion`} id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className={`accordion-button text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}`} aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}`}>
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className={`accordion-button collapsed text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}`}>
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className={`accordion-button collapsed text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode==="light" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    {/* <div className='container mt-4'>
    <button type="button" className="btn btn-primary mx-2" onClick={props.toggleMode}>Enable Dark Mode</button>

    </div> */}
    </>
  )
}

export default About

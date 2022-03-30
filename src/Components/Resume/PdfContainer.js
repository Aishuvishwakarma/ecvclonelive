import React from 'react';
import  "./pdf.css";
export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar"> 
        <button className="btn" style={{ border: 'none', outline: 'none',marginBottom:"20px"}} onClick={createPdf}>Get Your resume In PDF</button>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
}

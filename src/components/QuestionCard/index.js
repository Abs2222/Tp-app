function QuestionCard({preguntaActual}) {
   function QuestionCard({preguntaActual}){
    return(
        <div className="box">
            <div className="mi_clase">
                <span className="tag is-info"> {preguntaActual.id}</span>
                <span> <strong> {preguntaActual.question}</strong></span>
            </div>
            <br/>



     {
        preguntaActual.answers.map(opcion)=>(
            <div key={opcion.id}>
                <input type="radio id={'${opcion.id}'} nam={opcion.id} value={opcion.answers},
                <label htmlFor={'${opcion.id}'}>{opcion.answer}</label>
            </div>
        )
     }       
        </div>
    )
}
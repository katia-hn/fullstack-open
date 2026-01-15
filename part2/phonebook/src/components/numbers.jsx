const Numbers = ({person, phone, id, deleteNumber}) => {
    return(
        <li>{person} - {phone}  <button onClick={() => deleteNumber(id)}>Delete</button></li>
    )
}
export default Numbers
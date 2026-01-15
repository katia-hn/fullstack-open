const Formulario = ({addName, newName, handleName, newNumber, handleNumber}) => {
  return(
    <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={handleName}  />
          </div><br />
          <div>
            phone: <input value={newNumber} onChange={handleNumber}  />
          </div><br />
          <div>
            <button  type="submit">add</button>
          </div>
        </form>
  );
}

export default Formulario
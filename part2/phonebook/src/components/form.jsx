const Formulario = ({addName, newName, handleName, newPhone, handlePhone}) => {
  return(
    <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={handleName}  />
          </div><br />
          <div>
            phone: <input value={newPhone} onChange={handlePhone}  />
          </div><br />
          <div>
            <button  type="submit">add</button>
          </div>
        </form>
  );
}

export default Formulario
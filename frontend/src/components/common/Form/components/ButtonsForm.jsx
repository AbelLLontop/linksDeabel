export const ButtonsForm = ({ocultar,data=null,eliminar=null}) => (
    <div className="buttons">
      {
        data &&(
          <div onClick={eliminar} className="btn btn-cancel">Eliminar</div>
        )
      }     
      <div onClick={ocultar} className="btn btn-cancel">Cancel</div>
      <button className="btn btn-save">Save</button>
    </div>
  );
  
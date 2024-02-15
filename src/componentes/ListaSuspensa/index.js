
import "./ListaSuspensa.css";

const ListaSupensa = (props) => {
  // console.log(props.itens);

 


  return (
    <div className="Lista-suspensa">
      <label>{props.label}</label>
      <select onChange={e => props.aoAlterado(e.target.value)} required = {props.required}value={props.valor}>
        <option value="" key=""></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSupensa;

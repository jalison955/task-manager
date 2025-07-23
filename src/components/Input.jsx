const Input = ({value, onChange}) => {
    return (
        <input 
            className="padding" 
            type="text" 
            value={value} 
            onChange={onChange} 
            placeholder="Informe a nova tarefa..." 
        />
    );
};
export default Input;
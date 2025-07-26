const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Informe a nova tarefa..."
    />
  );
};
export default Input;

const InputLabel = ({ children, ...rest }) => {
  return (
    <label
      className="ps-1 text-left text-sm font-semibold text-[hsl(216,10%,25%)]"
      {...rest}
    >
      {children}
    </label>
  );
};
export default InputLabel;

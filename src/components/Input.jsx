import InputLabel from './InputLabel';

const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-md border border-[hsl(0,0%,90%)] px-4 py-3 text-[hsl(216,10%,25%)] outline-[hsl(183,100%,35%)] placeholder:text-sm placeholder:text-[hsl(216,5%,60%)]"
        {...rest}
      />
    </div>
  );
};
export default Input;

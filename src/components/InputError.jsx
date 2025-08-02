const InputError = ({ errors, inputName }) => {
  const error = errors.find((err) => err.inputName === inputName);

  return (
    <>
      {error && (
        <p className="ps-2 text-left text-xs text-red-600">* {error.message}</p>
      )}
    </>
  );
};
export default InputError;

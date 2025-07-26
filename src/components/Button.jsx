const Button = ({ children, variant = 'primary' }) => {
  const buttonStyles = {
    primary: 'bg-[hsl(183,100%,35%)] text-white',
    ghost: 'bg-transparent text-[hsl(0,0%,50%)]',
  };
  const styles = buttonStyles[variant];

  return (
    <button
      className={`flex cursor-pointer items-center gap-1 rounded-md px-3 py-1 text-xs font-medium transition hover:opacity-80 ${styles} `}
    >
      {children}
    </button>
  );
};
export default Button;

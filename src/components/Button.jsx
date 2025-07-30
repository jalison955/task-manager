const Button = ({
  children,
  size = 'default',
  variant = 'primary',
  className = '',
  ...rest
}) => {
  const buttonStyles = {
    primary: 'bg-[hsl(183,100%,35%)] text-white',
    secondary: 'bg-[hsl(220,10%,95%)] text-[hsl(220,10%,25%)]',
    ghost: 'bg-transparent text-[hsl(0,0%,50%)]',
  };
  const buttonSizes = {
    default: 'py-1 text-xs',
    large: 'py-2 text-sm',
  };

  const styles = `${buttonStyles[variant]} ${buttonSizes[size]} ${className}`;

  return (
    <button
      className={`flex cursor-pointer items-center justify-center gap-1 rounded-md px-3 font-medium transition hover:opacity-75 ${styles} `}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;

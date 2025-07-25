const SidebarButton = ({ variant, children }) => {
  const baseStyles = 'text-[hsl(220,10%,25%)]';
  const selectedStyles = 'bg-[hsl(183,60%,95%)] text-[hsl(183,100%,35%)]';

  const styles =
    variant && variant === 'selected' ? selectedStyles : baseStyles;

  return (
    <a
      href="#"
      className={`flex flex-row items-center gap-2 rounded-lg px-5 py-2 ${styles}`}
    >
      {children}
    </a>
  );
};
export default SidebarButton;

const SidebarButton = ({ variant = 'default', children }) => {
  const buttonStyles = {
    default: 'text-[hsl(220,10%,25%)]',
    selected: 'bg-[hsl(183,60%,95%)] text-[hsl(183,100%,35%)]',
  };

  const styles = buttonStyles[variant];

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-5 py-2 ${styles}`}
    >
      {children}
    </a>
  );
};
export default SidebarButton;

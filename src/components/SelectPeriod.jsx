import InputLabel from './InputLabel';

const SelecPeriod = ({ ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <InputLabel htmlFor="period">Horário *</InputLabel>
      <select
        id="period"
        className="rounded-md border border-[hsl(0,0%,90%)] px-4 py-3 text-[hsl(216,10%,25%)] outline-[hsl(183,100%,35%)]"
        {...rest}
      >
        <option value="default" disabled>
          Selecione
        </option>
        <option value="manhã">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </div>
  );
};
export default SelecPeriod;

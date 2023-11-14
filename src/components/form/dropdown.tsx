type selectOptions = {
  label: string;
  value: string;
};

type selectProps = {
  value?: selectOptions;
  onChange?: (value: selectOptions | undefined) => void;
  options: selectOptions[];
};

export function Select({ value, onChange, options }: selectProps) {
  return (
    <>
      <div className="container">
        Right
        <span className="value">Value</span>
        <button className="clearbutton">&times;</button>
        <div className="divider"></div>
        <div className="caret"></div>
        <ul className="options">
          {options.map((option) => (
            <li key={option.value} className="option">
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

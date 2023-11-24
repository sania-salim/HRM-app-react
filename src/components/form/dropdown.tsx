import { useState } from "react";

export type selectOptions = {
  label: string;
  value: string | number;
};

type singleSelectProps = {
  multiple?: false;
  value?: selectOptions;
  onChange?: (value: selectOptions | undefined) => void;
};

type multipleSelectProps = {
  multiple: true;
  value: selectOptions[];
  onChange?: (value: selectOptions[]) => void;
};

type selectProps = {
  options: selectOptions[];
} & (singleSelectProps | multipleSelectProps);

export function Select({ value, onChange, options, multiple }: selectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function clearOptions() {
    multiple ? onChange?.([]) : onChange?.(undefined);
  }

  function selectOption(option: selectOptions) {
    if (multiple) {
      if (!value.includes(option)) {
        onChange?.([...value, option]);
      } else {
        onChange?.(value.filter((o) => o !== option));
      }
    } else {
      if (option !== value) onChange?.(option);
    }
  }

  function isOptionSelected(option: selectOptions) {
    return multiple ? value.includes(option) : option === value;
  }

  return (
    <>
      <div
        tabIndex={0}
        className="container"
        onBlur={() => setIsOpen(false)}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span className="value">
          {multiple
            ? value.map((v) => (
                <button
                  className="optionbadge"
                  key={v?.value}
                  onClick={(e) => {
                    e.stopPropagation;
                    selectOption(v);
                  }}
                >
                  {v?.label}
                  <span className="removebtn">&times;</span>
                </button>
              ))
            : value?.label}
        </span>
        <button
          className="clearbutton"
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
        >
          &times;
        </button>
        <div className="divider"></div>
        <div className="caret"></div>
        <ul className={isOpen ? "options show" : "options"}>
          {options.map((option) => (
            <li
              key={option.value}
              className={
                isOptionSelected(option) ? "option selected" : "option"
              }
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

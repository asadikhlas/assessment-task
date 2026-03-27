import './SelectField.css';

interface SelectFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function SelectField({ value, onChange }: SelectFieldProps) {
  return (
    <label className="select-field">
      <span className="sr-only">Sort assessments</span>
      <select aria-label="Sort assessments" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="scheduled">Sort By Scheduled</option>
        <option value="title">Sort By Title</option>
        <option value="activity">Sort By Last Activity</option>
      </select>
    </label>
  );
}

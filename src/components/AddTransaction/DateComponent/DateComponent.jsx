import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
// import { DatetimeStyled } from './DateComponent.styled';

const SelectComponent = ({
  field,
  className,

  dateFormat,
  timeFormat,
  value,
  onChange,
}) => {
  return (
    <Datetime
      name={field.name}
      className={className}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      value={value}
      onChange={val => onChange(val)}
      closeOnSelect={true}
    />
  );
};

export default SelectComponent;

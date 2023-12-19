'use client';

import { FC } from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
  value: Range,
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const DatePicker: FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates
}) => {
  return ( 
    <DateRange
      date={new Date()}
      minDate={new Date()}
      ranges={[value]}
      disabledDates={disabledDates}
      rangeColors={['#50d71e']}
      direction="vertical"
      showDateDisplay={false}
      onChange={onChange}
    />
   );
}
 
export default DatePicker;

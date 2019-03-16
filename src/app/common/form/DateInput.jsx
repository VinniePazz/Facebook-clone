import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input: { value, onChange, ...restInput },
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
	console.log(restInput, '...................................................................', rest, value)
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
				placeholderText={placeholder}
        onChange={onChange}
				selected={value ? new Date(value) : null}
				{...restInput}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
import { UseInputProps, UseInputReturn } from "./types";

export const useInput = (props: UseInputProps): UseInputReturn => {
  const {
    isDisabled = false,
    isInvalid = false,
    isReadOnly = false,
    isRequired = false,
    defaultValue,
    ...rest
  } = props;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      disabled: isDisabled,
      readOnly: isReadOnly,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
  };
};

import { LockIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
  FormLabel
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { UseFormRegister } from "react-hook-form";

interface IPasswordInputProps extends InputProps {
  register: UseFormRegister<any>;
  isSubmitting: boolean;
}

export const PasswordInput = ({
  register,
  isSubmitting,
  ...rest
}: IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <FormControl variant="floating" isRequired>
      <FormLabel backgroundColor="brand.300">Password</FormLabel>
      <InputGroup size="md">
        <Input
          {...register("password", {
            required: true,

            minLength: {
              value: 8,
              message: "At least 8 characters"
            }
          })}
          // ref={(e) => {
          //   register("password").ref(e);
          //   inputRef.current = e;
          // }}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          disabled={isSubmitting}
          color="white"
          borderRadius="30px"
          {...rest}
        />

        <InputLeftElement pointerEvents="none">
          <LockIcon color="gray.300" />
        </InputLeftElement>
        <InputRightElement width="4.5rem">
          <Button
            borderRadius="30px"
            h="1.75rem"
            size="sm"
            onClick={handleTogglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

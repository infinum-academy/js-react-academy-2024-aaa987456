import { ILoginArgs, IRegisterArgs } from "@/app/typings/auths";
import { LockIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface IPasswordInputProps {
  register: any;
  isSubmitting: boolean;
}

export const PasswordInput = ({
  register,
  isSubmitting
}: IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl isRequired>
      <InputGroup size="md">
        <Input
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "At least 8 characters "
            }
          })}
          pr="4.5rem"
          required
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          disabled={isSubmitting}
        />
        <InputLeftElement pointerEvents="none">
          <LockIcon color="gray.300" />
        </InputLeftElement>
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

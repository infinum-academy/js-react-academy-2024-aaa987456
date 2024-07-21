"use client";

import { ButtonForm } from "@/app/components/shared/Button";
import { IRegisterArgs } from "@/app/typings/auths";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { AtSignIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
  InputLeftElement,
  InputGroup,
  Img
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { PasswordInput } from "../PasswordInput/PasswordInput";

//izdviji formu !!!!!
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<IRegisterArgs>({});
  const { trigger } = useSWRMutation(swrKeys.register, mutator);

  const onSubmit = async (data: IRegisterArgs) => {
    console.log(data);
    await trigger(data);
  };

  return (
    <chakra.form
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={10}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Img src="assets/Logo.png"></Img>

      <FormControl isRequired={true}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="gray.300" />
          </InputLeftElement>
          <Input
            {...register("email")}
            placeholder="Email"
            required
            type="email"
            disabled={isSubmitting}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <PasswordInput register={register} isSubmitting={isSubmitting} />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />
      </FormControl>

      <FormControl isRequired={true}>
        <Input
          {...register("password_confirmation", {
            validate: (val) =>
              val === watch("password") || "Passwords do not match"
          })}
          placeholder="Confirm password"
          required
          type="password"
          disabled={isSubmitting}
        />
        <ErrorMessage
          errors={errors}
          name="password_confirmation"
          render={({ message }) => <p>{message}</p>}
        />
      </FormControl>

      <Flex gap={2}>
        <Text>Already have an account?</Text>
        <Text href="/login" as={Link}>
          Login
        </Text>
      </Flex>

      <ButtonForm type="submit" text="SIGN UP" />
    </chakra.form>
  );
};

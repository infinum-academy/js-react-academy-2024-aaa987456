"use client";

import { FormButton } from "@/app/components/shared/Button";
import { IRegisterArgs } from "@/app/typings/auths";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { AtSignIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
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
import { useState } from "react";
import { PasswordInput } from "../PasswordInput/PasswordInput";

export const RegisterForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);

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
    setIsRegistered(true);
  };

  return isRegistered ? (
    <Heading>Registration Successful!</Heading>
  ) : (
    <chakra.form
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={30}
      onSubmit={handleSubmit(onSubmit)}
      backgroundColor="brand.200"
      borderRadius="20px"
      padding="30px"
    >
      <Img src="assets/Logo.png"></Img>

      <FormControl variant="floating" isRequired={true}>
        <FormLabel backgroundColor="brand.300">Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            {...register("email")}
            required
            type="email"
            disabled={isSubmitting}
            borderRadius="30px"
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

      <FormControl variant="floating" isRequired={true} isInvalid>
        <FormLabel backgroundColor="brand.300">Confirm password</FormLabel>
        <Input
          {...register("password_confirmation", {
            validate: (val) =>
              val === watch("password") || "Passwords do not match"
          })}
          required
          type="password"
          disabled={isSubmitting}
          borderRadius="30px"
        />
        <ErrorMessage
          errors={errors}
          name="password_confirmation"
          render={({ message }) => <p>{message}</p>}
        />
      </FormControl>

      <Flex gap={2}>
        <Text textStyle="labelRegular" color="white">
          Already have an account?
        </Text>
        <Text textStyle="labelRegular" color="white" href="/login" as={Link}>
          Login
        </Text>
      </Flex>

      <FormButton type="submit" text="SIGN UP" />
    </chakra.form>
  );
};

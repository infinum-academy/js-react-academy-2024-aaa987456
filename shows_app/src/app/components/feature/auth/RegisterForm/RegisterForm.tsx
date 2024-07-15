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
  InputGroup
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
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
      <Heading as="h4">TV SHOW APP</Heading>
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
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired={true}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            {...register("password", {
              minLength: {
                value: 8,
                message: "At least 8 characters "
              }
            })}
            placeholder="Password"
            required
            type="password"
          />
        </InputGroup>
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

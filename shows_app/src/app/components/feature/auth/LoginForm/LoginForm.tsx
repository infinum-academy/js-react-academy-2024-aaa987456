"use client";

import { FormButton } from "@/app/components/shared/Button";
import { ILoginArgs, IRegisterArgs } from "@/app/typings/auths";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import {
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { mutate } from "swr";
import { EmailIcon } from "@chakra-ui/icons";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ILoginArgs>();
  const { trigger } = useSWRMutation(swrKeys.login, mutator);

  const onSubmit = async (data: ILoginArgs) => {
    try {
      console.log(data);
      await trigger(data);
      mutate(swrKeys.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
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
        <FormLabel backgroundColor="brand.300" color="white">
          Email
        </FormLabel>
        <InputGroup size="md">
          <Input
            {...register("email")}
            required
            type="email"
            disabled={isSubmitting}
            color="white"
            borderRadius="30px"
          />

          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <PasswordInput register={register} isSubmitting={isSubmitting} />
      </FormControl>
      <Flex gap={2}>
        <Text textStyle="labelRegular" color="white">
          Don have an account?
        </Text>
        <Text
          textStyle="labelRegularBold"
          color="white"
          href="/register"
          as={Link}
        >
          Register
        </Text>
      </Flex>

      <FormButton type="submit" text="LOGIN" />
    </chakra.form>
  );
};

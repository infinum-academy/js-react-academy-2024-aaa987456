"use client";

import { ButtonForm } from "@/app/components/shared/Button";
import { ILoginArgs, IRegisterArgs } from "@/app/typings/auths";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import {
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginArgs>();
  const { trigger } = useSWRMutation(swrKeys.login, mutator);

  const onSubmit = async (data: ILoginArgs) => {
    console.log(data);
    const response: any = await trigger(data);
    const token = response.accessToken;
    localStorage.setItem("authToken", token);
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
        <Input
          {...register("email")}
          placeholder="Email"
          required
          type="email"
        />
      </FormControl>
      <FormControl isRequired={true}>
        <Input
          {...register("password")}
          placeholder="Password"
          required
          type="password"
        />
      </FormControl>
      <Flex gap={2}>
        <Text>Don have an account?</Text>
        <Text href="/register" as={Link}>
          Register
        </Text>
      </Flex>

      <ButtonForm type="submit" text="LOGIN" />
    </chakra.form>
  );
};

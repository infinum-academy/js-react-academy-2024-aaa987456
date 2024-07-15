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
import { useRouter } from "next/navigation";
import { PasswordInput } from "../PasswordInput/PasswordInput";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ILoginArgs>();
  const { trigger } = useSWRMutation(swrKeys.login, mutator);
  const router = useRouter();

  const onSubmit = async (data: ILoginArgs) => {
    try {
      console.log(data);
      await trigger(data);
      router.push("/all-shows");
    } catch (error) {
      console.error("Login failed:", error);
    }
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
          disabled={isSubmitting}
        />
      </FormControl>
      <FormControl isRequired>
        <PasswordInput register={register} isSubmitting={isSubmitting} />
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

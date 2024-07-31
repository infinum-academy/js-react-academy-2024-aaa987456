import { Button } from "@chakra-ui/react";

interface ICustomButtonProps {
  text: string;
  type: string;
  isLoading?: boolean;
}

export const FormButton = ({ text, type, isLoading }: ICustomButtonProps) => {
  return (
    <Button
      type="submit"
      isLoading={isLoading}
      borderRadius="20px"
      backgroundColor="white"
      color="brand.300"
    >
      {text}
    </Button>
  );
};

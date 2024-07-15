import { Button } from "@chakra-ui/react";

interface ICustomButtonProps {
  text: string;
  type: string;
  isLoading?: boolean;
}

export const ButtonForm = ({ text, type, isLoading }: ICustomButtonProps) => {
  return (
    <Button
      type="submit"
      isLoading={isLoading}
      color="white.100"
      borderRadius="20px"
    >
      {text}
    </Button>
  );
};

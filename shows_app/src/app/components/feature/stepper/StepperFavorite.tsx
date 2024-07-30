import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { ShowsProgress } from "./components/ShowsProgress";
import { ShowsStepper } from "./components/ShowsStepper";

export const StepperFavorite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} borderRadius="30px">
        Choose your favorites
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="brand.300">
          <ModalCloseButton color="white" />
          <ModalBody>
            <ShowsStepper />
          </ModalBody>

          <ModalFooter>
            <Flex direction="row" flex="1" gap={4}>
              <ShowsProgress />
              <Button borderRadius="30px" onClick={onClose}>
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

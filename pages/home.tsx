import {
    Button,
    Box,
    Center,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalBody,
    ModalContent,

    useDisclosure, Text, VStack,
} from '@chakra-ui/react';

import React from 'react';
import Image from 'next/image';
import {useRecoilState} from "recoil";
import {formInputState, formStepState} from "../atoms/StepperAtoms";
import MyStepper from "../components/MyStepper";
import MyFirstStep from "../components/MyFirstStep";
import MySecondStep from "../components/MySecondStep";
import ThirdStep from "../components/ThirdStep";
import Success from "../components/Success";
import {myStepperState} from "../atoms/MyStepperAtom";

function Home() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [stepperState, setStepperState] = useRecoilState(myStepperState);
    const [form, setForm] = useRecoilState(formInputState);

    function resetForm() {
        onOpen();
        setStepperState({
            page: 0, forward: false,
            backward: false, forwardText: 'Next',
            backwardText: 'Back',
        })
        setForm({
            name: '',
            country: '',
            language: '',
            picId: [],
        })

    }

    return (

        <Box
            bg='#434E61'
            bg-cover
            bg-center
            h='calc(100vh)'
            pt={'200px'}
        >
            <Center pl={'100px'}>
                <Box boxSize='sm'>
                    <Image src='/Images/Logo.png' alt='Logo' width='280' height='280'/>
                </Box>
            </Center>
            <Center>
                <Button
                    onClick={resetForm}
                >
                    OPEN MODEL
                </Button>
            </Center>
            <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size={'xl'}
            >
                <ModalOverlay/>
                <ModalContent>
                    {stepperState.page === 3 ? (
                        <ModalCloseButton/>
                    ) : null}

                    <ModalBody>
                        <MyStepper>
                            <MyFirstStep></MyFirstStep>
                            <MySecondStep></MySecondStep>
                            <ThirdStep></ThirdStep>
                            <Success></Success>
                        </MyStepper>

                        {/* <Lorem count={2} /> */}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>

    );
}

export default Home;

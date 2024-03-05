import React from "react";
import { Button, useToast, Center, NativeBaseProvider } from "native-base";

interface AlertProps {
    isShow: boolean
    title: string
    message: string
    onClick: () => void
    disabled: boolean
}


function AlertComponent(props: AlertProps) {
    const toast = useToast();
    const id = "test-toast";
    const onPress = async () => {
        if (!toast.isActive(id)) {
            await props.onClick();
            toast.show({
                id,
                title: props.message,
                variant: "solid",
                description: props.title,
            });
        }
    }
    return (
        <Center>
            <Button
                disabled={props.disabled}
                onPress={onPress}
                variant="solid"
            >
                Log In
            </Button>
        </Center>
    );
}

const App = (props: AlertProps) => {
    return (
        <NativeBaseProvider>
            <AlertComponent
                isShow={props.isShow}
                title={props.title}
                message={props.message}
                onClick={props.onClick}
                disabled={props.disabled}
            />
        </NativeBaseProvider>
    );
}

export default App;

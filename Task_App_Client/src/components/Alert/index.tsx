import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Alert, VStack, HStack, IconButton, CloseIcon, Box, Text, Center, NativeBaseProvider } from "native-base";

interface AlertState {
  alert: {
    isShow: boolean
    title: string
    message: string
  }
}

interface AlertProps {
  isShow: boolean
  title: string
  message: string
}

const AlertLogin = (props: AlertProps) => {
  return (
    <View>
      {props.isShow && (
        <NativeBaseProvider>
          <Center flex={1} px="3">
            <Box w="100%" alignItems="center">
              <Alert maxW="400" status={props.title === "Sesion Iniciada" ? "success" : "error"}>
                <VStack space={1} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <Text fontSize="md" fontWeight="medium" _dark={{
                        color: "coolGray.800"
                      }}>
                        {props.title}
                      </Text>
                    </HStack>
                    <IconButton variant="unstyled" _focus={{
                      borderWidth: 0
                    }} icon={<CloseIcon size="3" />} _icon={{
                      color: "coolGray.600"
                    }} />
                  </HStack>
                  <Box pl="6" _dark={{
                    _text: {
                      color: "coolGray.600"
                    }
                  }}>
                    {props.message}
                  </Box>
                </VStack>
              </Alert>
            </Box>
          </Center>
        </NativeBaseProvider>
      )}
    </View>
  )
}


const mapStateToProps = (state: AlertState) => ({
  isShow: state.alert.isShow,
  title: state.alert.title,
  message: state.alert.message
})

export default connect(mapStateToProps)(AlertLogin);

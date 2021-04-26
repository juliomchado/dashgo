import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Julio Machado</Text>
                    <Text color="gray.300"
                        fontSize="small"
                    >
                        juliocarlos00@hotmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Julio Machado" src="https://github.com/juliomchado.png" />
        </Flex>
    );
}
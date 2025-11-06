import {Box,Container,Heading,Text,Card,Flex,Avatar, Badge,Separator} from'@radix-ui/themes';
function Profile() {
    return(
    <Container size="3" py="6">
        <Card>
            <Flex direction="column" gap="4" >
                <Flex align="center" gap="4">
                    <Avatar
                        size="9"
                        radius='full'
                        fallback='SP'
                        color='blue'
                    />
            </Flex>
        </Card>
    );
}

export default Profile;
import { Box, Container, Heading, Text, Card, Flex } from '@radix-ui/themes';

function Home() {
  return (
    <Container size="3" py="6">
      <Box>
        <Heading size="8" mb="4">
          ยินดีต้อนรับ
        </Heading>
        <Text size="5" mb="6" color="gray">
          เว็บไซต์แนะนำตัวและประวัติส่วนตัว
        </Text>
      </Box>

      <Flex direction="column" gap="4">
        <Card>
          <Heading size="5" mb="2">
            เกี่ยวกับเว็บไซต์นี้
          </Heading>
          <Text>
            เว็บไซต์นี้สร้างขึ้นเพื่อแนะนำข้อมูลส่วนตัว ประวัติการศึกษา
            และความสามารถต่างๆ โดยใช้เทคโนโลยี React, React Router และ Radix UI
          </Text>
        </Card>

        <Card>
          <Heading size="5" mb="2">
            เทคโนโลยีที่ใช้
          </Heading>
          <Text>
            • React 19 + TypeScript<br />
            • React Router สำหรับการจัดการหน้า<br />
            • Radix UI สำหรับ UI Components<br />
            • Vite สำหรับ Build Tool
          </Text>
        </Card>
      </Flex>
    </Container>
  );
}

export default Home;

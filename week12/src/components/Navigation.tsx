import { Link, useLocation } from 'react-router-dom';
import { Flex, Button, Box } from '@radix-ui/themes';
import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Box className="border-b border-gray-200 bg-white">
      <Flex gap="3" p="4" justify="center" wrap="wrap">
        <Link to="/" className="no-underline">
          <Button variant={isActive('/') ? 'solid' : 'soft'} size="3">
            <IoHome size={18} /> หน้าแรก
          </Button>
        </Link>

        <Link to="/profile" className="no-underline">
          <Button variant={isActive('/profile') ? 'solid' : 'soft'} size="3">
            <FaUser size={16} /> โปรไฟล์
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;

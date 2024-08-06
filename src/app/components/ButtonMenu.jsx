'use client';
import { Button, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react'; // Menu icon
import React from 'react';

const MenuButton = () => {
  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="bottom-end" 
      width={220} 
      withinPortal
    >
      <Menu.Target>
        <Button
          pr={12}
          className="bg-white text-blue-500 border border-gray-300 hover:bg-gray-100"
          style={{
            minWidth: '120px', 
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }} 
        >
          Visit <span style={{ fontSize: '14px' }}>^</span> 
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component="a" href="#website" className="text-blue-500 hover:underline">
          Website
        </Menu.Item>
        <Menu.Item component="a" href="#learn-more" className="text-blue-500 hover:underline">
          Learn More
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuButton;

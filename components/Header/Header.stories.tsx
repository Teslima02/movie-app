import React from 'react';
import { HeaderMenu } from './Header';
import { Meta, Story } from '@storybook/react';

export default {
  title: '/Home/Header',
  component: HeaderMenu,
} as Meta;

export const Header = () => <HeaderMenu />;

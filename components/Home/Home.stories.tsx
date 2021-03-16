import React from 'react';
import { Home } from './Home';
import { Meta } from '@storybook/react';

export default {
    title: 'Home',
    component: Home,
} as Meta;

export const HomePage = () => <Home />;
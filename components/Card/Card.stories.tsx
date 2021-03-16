import React from 'react';
import { LeftCard } from './Card';
import { Meta } from '@storybook/react';

export default {
  title: '/Card',
  component: LeftCard,
} as Meta;

export const HeroLeftCard = () => <LeftCard />;
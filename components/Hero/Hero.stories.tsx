import React from 'react';
import { HeroSection } from './Hero';
import { LeftCard } from '../Card/Card';
import { Meta } from '@storybook/react';

export default {
  title: '/Home/Hero',
  component: HeroSection,
} as Meta;

export const Header = () => <HeroSection />;

export const HeroLeftCard = () => <LeftCard />;

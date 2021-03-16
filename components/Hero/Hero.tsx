import * as React from 'react';
import Hero from '../../public/hero.svg';

export function HeroSection(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [isSearch, setIsSearch] = React.useState(false);
  const toggleSearch = () => {
    setIsOpen(!isSearch)
  }

  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2"></div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="relative inset-0">
            <img className="h-full w-full object-cover" src={Hero} alt="People working on laptops" />
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
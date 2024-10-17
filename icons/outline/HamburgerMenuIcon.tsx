import { SVGAttributes } from 'react';

export const HamburgerMenuIcon = ({ className }: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </g>
  </svg>
);

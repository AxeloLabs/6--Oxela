'use client'
import {JSX} from 'react'

export default function FirebaseOxelaIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="neon-logo"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10,50 A40,40 0 1,1 90,50" />
        <path d="M25,65 L40,35 L55,65 L75,25" />
        <path d="M65,45 L85,15" />
      </g>
    </svg>
  )
}

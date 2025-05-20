'use client'
import {JSX} from 'react'

export default function FirebaseOxelaWaIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  const {className = '', ...rest} = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="32"
      height="32"
      fill="none"
      className={`oxela-glow ${className}`}
      {...rest}
    >
      <rect width="200" height="200" rx="16" fill="#1A1A1A" />
      <path
        d="M50 140 L70 60 L90 140 L110 80 L130 140 L150 60"
        stroke="#FF9100"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-xl text-white font-semibold">
          Copyright &copy; {new Date().getFullYear()}, All rights reserved.
        </p>
        <p className="text-center text-base text-gray-400">
          Created by <span className="text-red-400 font-semibold">IyosiPrograming</span>
        </p>
      </div>
    </footer>

  )
}


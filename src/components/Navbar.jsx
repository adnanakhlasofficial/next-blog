import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='bg-gray-200'>
      <section className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold tracking-wider'>NextBlog</h1>
        </div>
        <nav>
          <ul className='flex gap-2 items-center'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Profile</Link>
            </li>
            <li>
              <Link href='/'>Login</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;

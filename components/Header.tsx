import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-center sm:justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            src='https://i.imgur.com/1XO6OSo.jpg'
            className='rounded-full object-fill'
            alt='Logo'
            width={50}
            height={50}
          />
        </Link>
        <h1>Majd</h1>
      </div>

      <div>
        <Link
          className='hidden sm:flex px-5 py-3 text-sm md:text-base bg-gray-900 text-accent items-center rounded-full text-center'
          href='https://instagram.com'
        >
          INSTAGRAM
        </Link>
      </div>
    </header>
  );
};

export default Header;
function Footer() {
  return (
    <footer className='mb-4 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; {new Date().getFullYear()}{' '}
        <a href='https://engramsoft.com' target='_blank' className='underline'>
          EngramSoft
        </a>
        . All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;
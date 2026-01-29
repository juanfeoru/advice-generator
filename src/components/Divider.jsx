import dividerDesktop from '../assets/images/pattern-divider-desktop.svg';
import dividerMobile from '../assets/images/pattern-divider-mobile.svg';

export default function Divider() {
  return (
    <picture className='my-6 block'>
      <source srcSet={dividerDesktop} media='(min-width: 768px)' />
      <img src={dividerMobile} alt='' className='mx-auto' />
    </picture>
  );
}

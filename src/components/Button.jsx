import iconDice from '../assets/images/icon-dice.svg';

export default function Button({ onClick, loading }) {
  return (
    <button
      className='bg-green-300
  rounded-full
  p-4
  absolute
  left-1/2
  -translate-x-1/2
  size-16
  flex
  items-center
  justify-center
  transition-all
  duration-300
  hover:shadow-[0px_0_20px_3px_rgba(52,211,153,0.6)]
  hover:scale-105
  cursor-pointer
  disabled:opacity-50
  disabled:cursor-not-allowed'
      onClick={onClick}
      disabled={loading}
    >
      <img src={iconDice} alt='Get new advice' />
    </button>
  );
}

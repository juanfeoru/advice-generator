import Button from './Button';
import Divider from './Divider';

export default function Advice({ onClick, advice, id, loading }) {
  return (
    <article className='bg-blue-900 rounded-xl p-8 text-center relative max-w-140'>
      <h1 className='text-green-300 text-[11px] tracking-[3px] uppercase '>
        {id ? `Advice #${id}` : 'Loading...'}
      </h1>

      {advice && (
        <p className='my-4 text-[28px] text-blue-200'>
          {loading ? 'Loading advice...' : `"${advice}"`}
        </p>
      )}

      <Divider />
      <Button onClick={onClick} loading={loading} />
    </article>
  );
}

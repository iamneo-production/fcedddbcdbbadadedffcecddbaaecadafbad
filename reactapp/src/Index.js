import Link from '../src/Link';

export default function Index() {
  return (
    <Link
      href={{
        pathname: '/about',
        query: { name: 'test' },
      }}
    >
      Link
    </Link>
  );
}

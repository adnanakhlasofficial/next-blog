import Link from 'next/link';

const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return (
    <div className='container mx-auto px-4 my-12'>
      <ul className='columns-3 space-y-3'>
        {data.map((post, idx) => (
          <li key={post.id}>
            <Link className='flex gap-1' href={`/blog/${post.id}`}>
              <span>{idx + 1}</span>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

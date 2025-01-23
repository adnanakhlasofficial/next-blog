'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    }
    fetchData();
  }, []);

  return (
    <section className='container mx-auto p-8'>
      <div className='space-y-3'>
        <h2 className='text-2xl font-semibold'>{post?.title}</h2>
        <p className='max-w-xl'>{post?.body}</p>
      </div>
    </section>
  );
};

export default Post;

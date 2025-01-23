const Post = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

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

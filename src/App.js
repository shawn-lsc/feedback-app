function App() {
  const title = "blog post";
  const body = "this is my blog post";
  const comments = [
    { id: 1, text: "comment 1" },
    { id: 2, text: "comment 2" },
    { id: 3, text: "comment 3" },
  ];
  const loading = false;
  const showComments = true;

  if (loading) {
    return <h1>loading...</h1>;
  }

  const commentBlcok = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlcok}
    </div>
  );
}

export default App;

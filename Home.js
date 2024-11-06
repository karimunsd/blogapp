import './Navbar.css';

function Home() {
  const blogPosts = [
    { title: "How to Learn React", excerpt: "React is a popular JavaScript library for building user interfaces..." },
    { title: "Understanding JavaScript Closures", excerpt: "Closures are a fundamental concept in JavaScript..." },
    { title: "CSS Tips for Beginners", excerpt: "CSS is the language used to style webpages..." },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Blog!</h1>
        <p>Your go-to place for all things tech and programming.</p>
      </header>

      <section className="blog-posts">
        <h2>Recent Posts</h2>
        <div className="post-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="/" className="read-more">Read more...</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

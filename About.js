import './Navbar.css'; 

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About This Blog App</h1>
      </header>

      <section className="about-content">
        <h2>Welcome to Our Blog!</h2>
        <p>
          This is a blogging platform designed for writers and readers to share their ideas, thoughts, and stories with a larger audience. 
          Whether you’re a casual reader or an aspiring author, our blog app is the place to write, read, and comment on blog posts.
        </p>
        
        <h2>Features of the Blog App:</h2>
        <ul>
          <li>Create new blog posts with titles, content, and images</li>
          <li>View, like, and comment on existing blog posts</li>
          <li>Edit or delete your own posts</li>
          <li>Sign up, log in, and manage your user account</li>
        </ul>
        
        <p>
          Our app is built using modern web technologies, including React for the frontend, Node.js for the backend, and MongoDB for the database. 
          We focus on providing a seamless and enjoyable experience for both writers and readers.
        </p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or suggestions, feel free to reach out to us at <strong>support@blogapp.com</strong>.</p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;

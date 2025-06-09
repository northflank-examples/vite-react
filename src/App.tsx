import './App.css'

export function HomePage() {
  return (
    <div className="container">
      <h1>Northflank Vite + React Starter</h1>
      <p>
        A getting started template using Vite with React and TypeScript,
        optimized for deployment on Northflank's cloud platform.
      </p>

      <h2>What's included:</h2>
      <ul>
        <li>
          <strong>Vite</strong> - Lightning fast build tool and dev server
        </li>
        <li>
          <strong>React</strong> - Modern UI library with hooks and components
        </li>
        <li>
          <strong>TypeScript</strong> - Type-safe development out of the box
        </li>
        <li>
          <strong>Northflank Ready</strong> - Optimized for seamless
          deployment
        </li>
      </ul>

      <div className="docs-links">
        <strong>Learn more:</strong>
        <div>
          <a
            href="https://northflank.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northflank Docs
          </a>
          <a
            href="https://vite.dev/guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Documentation
          </a>
          <a
            href="https://react.dev/reference/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Reference
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import { Github, Twitter, MessageSquare } from 'lucide-react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div className="footer-brand">
            <h3>PixelUI</h3>
            <p>
              Building the future of React component libraries, one pixel at a time.
            </p>
            <div style={{display:'flex',gap:"2rem",marginTop:"2rem"}}>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Discord"><MessageSquare size={20} /></a>
              <a href="#" aria-label="NPM">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Documentation</h3>
            <ul>
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">Components</a></li>
              <li><a href="#">Theming</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Migration Guide</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Stack Overflow</a></li>
              <li><a href="#">Contributing</a></li>
              <li><a href="#">Code of Conduct</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Examples</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 PixelUI. All rights reserved. Built with ❤️ for the React community.</p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import white from './assets/logo-modified.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./navbar";

export const Home = () => {
  const [word, setword] = useState("You");

  useEffect(() => {
    const change = setInterval(() => {
      if (word === "You") {
        setword("Improved Collaboration");
      } else if (word === "Improved Collaboration") {
        setword("Increased Productivity");
      } else if (word === "Increased Productivity") {
        setword("Dynamic Workplace");
      } else {
        setword("You");
      }
    }, 2000);

    return () => clearInterval(change);
  }, [word]);

  

  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          .a:hover {
            text-decoration: underline !important;
          }
        `}
      </style>
      <div className="vh-100 bg-light d-flex flex-column justify-content-between">
        <div className="fixed-top">
        <Navbar />
        </div>

        <header className="container text-center" style={{marginTop:"15%"}}>
          <h1 className="fw-bold display-4 mb-2">Project Management</h1>
          <h2 className="mb-3 fs-3">Tool designed for</h2>
          <h1 className="fw-bold text-danger" style={{ fontSize: "2.5rem", minHeight: 60 }}>{word}</h1>
          <p className="lead mt-4 mx-auto" style={{ maxWidth: 600 }}>
            Empower your team with a modern, intuitive, and collaborative platform to plan, track, and deliver projects efficiently.
          </p>
        </header>

        <div className="mt-5"></div>

        <section className="container my-5">
          <div className="row align-items-center bg-white rounded-4 shadow p-4">
            <div className="col">
              <h2 className="fw-bold mb-3 text-danger">About Us</h2>
              <p>
                <span className="fw-semibold text-danger">Project Management Tool</span> is dedicated to empowering teams and organizations to achieve their goals efficiently and collaboratively. Our platform streamlines project planning, task management, and team communication, making it easier to deliver successful projects on time.
              </p>
              <p>
                Founded by a group of passionate professionals, we understand the challenges of modern project management. Our mission is to provide an intuitive, powerful, and flexible tool that adapts to your workflow—whether you’re a small startup or a large enterprise.
              </p>
              <ul className="list-unstyled mb-3">
                <li className="mb-2">Real-time collaboration and updates</li>
                <li className="mb-2">Customizable workflows and dashboards</li>
                <li className="mb-2">Seamless integration with popular tools</li>
                <li className="mb-2">Robust security and privacy controls</li>
                <li className="mb-2">Comprehensive analytics and reporting</li>
              </ul>
              <div className="bg-light rounded-3 p-3 mb-3">
                <h4 className="fw-bold mb-2">Our Core Values</h4>
                <ul className="mb-0">
                  <li><strong>Innovation:</strong> We constantly evolve to meet the changing needs of our users.</li>
                  <li><strong>Transparency:</strong> Open communication and clear processes are at our core.</li>
                  <li><strong>Collaboration:</strong> We believe great things happen when people work together.</li>
                  <li><strong>Customer Focus:</strong> Your feedback shapes our roadmap and features.</li>
                  <li><strong>Security:</strong> Protecting your data is our top priority.</li>
                </ul>
              </div>
              <p>
                We believe in continuous improvement and value feedback from our users. Join thousands of teams who trust Project Management Tool to turn their ideas into reality.
              </p>
            </div>
            <div className="col text-center">
              <img
                src={logo}
                alt="Project Management Tool"
                className="img-fluid rounded-3 shadow mb-4"
                style={{ maxWidth: "100%" }}
              />
              <div className="text-start px-3">
                <h5 className="fw-bold mb-2">Why Choose Us?</h5>
                <ul className="list-unstyled mt-5">
                  <li className="mb-1"><i>24/7 customer support</i></li>
                  <li className="mb-1"><i>Easy onboarding and migration</i></li>
                  <li className="mb-1"><i>Regular feature updates</i></li>
                  <li className="mb-1"><i>Trusted by industry leaders</i></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="bg-white rounded-4 shadow p-4 text-center">
                <h3 className="fw-bold mb-3 text-danger">Our Vision</h3>
                <p>
                  To be the leading platform that transforms the way teams collaborate, innovate, and deliver results—making project management simple, transparent, and effective for everyone.
                </p>
                <h3 className="fw-bold mt-4 mb-3 text-danger">Our Team</h3>
                <p>
                  Our diverse team brings together expertise in software development, design, and project management. We are united by a shared passion for building tools that make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-dark text-white py-4 mt-auto">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <img src={white} alt="white" className="img-fluid mb-3 mb-md-0" style={{ maxWidth: "10%" }} />
            <div>
              <a onClick={() => navigate('/faq')} className="a text-white text-decoration-none me-4">
                Faq
              </a>
              <a onClick={() => navigate('/contact')} className="a text-white text-decoration-none me-4">
                Contact Us
              </a>
            </div>
          </div>
          <hr className="bg-white mx-auto" style={{ width: "80%" }} />
          <div className="text-center">
            <p className="mb-0" style={{ fontSize: "10px" }}>
              © 2025 Project Management Tool Limited
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

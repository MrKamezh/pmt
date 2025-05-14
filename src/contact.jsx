import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logo.png';
import { Navbar } from "./navbar";


export const Contact = () => {
    return <>
        <div className="fixed-top">
            <Navbar />
        </div>
        <div className="container" style={{marginTop:"10%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h4 className="mb-3">We're here to help!</h4>
                    <p>
                        Have questions about our Project Management Tool, need support, or want to share feedback? 
                        Fill out the form below and our team will get in touch with you as soon as possible. 
                        We value your input and are committed to providing the best experience for our users.
                    </p>
                    <div className="alert alert-info mt-4" role="alert">
                        <strong>Looking for a demo?</strong> Let us know in your message if you'd like a personalized walkthrough of our tool.
                    </div>
                    <div className="alert alert-secondary mt-2" role="alert">
                        <strong>Business inquiries:</strong> For partnership or enterprise solutions, please mention your organization and requirements.
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-5 mt-5" style={{ background: "#f7fafc" }}>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-5">
                                <img src={logo} alt="" width="50%" />
                            </div>
                            <h2 className="text-center mb-4 text-danger">Contact Us</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger w-100 ">Send Message</button>
                            </form>
                            <div className="text-center mt-4">
                                <small>We'll get back to you soon.</small>
                                <div className="mt-2">
                                    <a href="mailto:support@projectmanagementtool.com" className="text-decoration-none">
                                        Or email us directly: support@projectmanagementtool.com
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <small>For urgent issues, call us at <strong>+1 (800) 123-4567</strong></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
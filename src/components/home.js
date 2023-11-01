import React from 'react';

function Home() {
  return (
    <div>
      <section className="hero bg-primary text-white text-center vh-75">
        <div className="container">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop destination for amazing content.</p>
          <a href="#" className="btn btn-light">Learn More</a>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Feature 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4">
              <h2>Feature 2</h2>
              <p>Proin dignissim odio id metus efficitur, a convallis ex feugiat.</p>
            </div>
            <div className="col-md-4">
              <h2>Feature 3</h2>
              <p>Nullam ac urna non sapien sollicitudin fringilla a ac risus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>What Our Customers Say</h3>
              <p>"This website has transformed my life. I love it!"</p>
            </div>
            <div className="col-md-6">
              <img src="testimonial-image.jpg" alt="Customer Testimonial" />
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Pricing Plans</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h3>Basic</h3>
                <p>$9.99/month</p>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h3>Pro</h3>
                <p>$19.99/month</p>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h3>Premium</h3>
                <p>$29.99/month</p>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? Contact our support team.</p>
          <a href="#" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;

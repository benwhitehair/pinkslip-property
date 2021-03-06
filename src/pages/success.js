import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Success = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center leading-loose py-16">
      <h1 className="font-condensed text-grey-darkest text-5xl uppercase">
        Message sent
      </h1>
      <p className="text-grey-darkest">
        Thank you for contacting Pinkslip Property.
      </p>
      <p className="text-grey-darkest">
        We will get back to you as soon as possible.
      </p>
      <p className="text-grey-darkest">
        Please call{' '}
        <a
          className="font-bold no-underline text-pink-dark text-lg"
          href="tel:0404222244"
        >
          0404 222 244
        </a>{' '}
        if you matter is urgent.
      </p>
      <p>
        <Link to="/" className="font-bold no-underline text-pink-dark text-lg">
          Click here to return to the homepage.
        </Link>
      </p>
    </div>
  </Layout>
);

export default Success;

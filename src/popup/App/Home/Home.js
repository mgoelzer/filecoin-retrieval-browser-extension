import React from 'react';
import classNames from 'classnames';
import Upload from './Upload';
import QueryForm from './QueryForm';
import KnownCids from './KnownCids';
import Deals from './Deals';

function Home({ className, ...rest }) {
  return (
    <div className={classNames(className, 'p-4')} {...rest}>
      <Upload className="mb-4" />
      <QueryForm />
      <KnownCids className="mt-4" />
      <Deals className="mt-4" />
    </div>
  );
}

export default Home;

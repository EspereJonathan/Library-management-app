import React, { useState } from 'react';
import RoutesOnHomepage from '../../components/Menu';
const Homepage: React.FC = () => {
    const [routes] = useState
    ([
      { name: 'Books', id: 1, url: 'books'},
      { name: 'Users', id: 2, url: 'users'},
      { name: 'Loans', id: 3, url: 'loans'},
      { name: 'Logs', id: 4, url: 'logs'}
    ]);

    return (
      <main>
          {routes.map(({ id, ...outherRoutes }) => (
          <RoutesOnHomepage key={id} {...outherRoutes} />
          ))}
      </main>
    );
};

export default Homepage;

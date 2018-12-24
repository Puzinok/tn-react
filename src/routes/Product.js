import { productPath } from '~/src/helpers/routes.js';
import React from 'react';

export default {
  path: productPath(),
  render: ({match}) => (<div>Product #{match.params.id}</div>),
};

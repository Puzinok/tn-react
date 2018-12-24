import { mainPath } from '~/src/helpers/routes.js';
import React from 'react';

export default {
  path: mainPath(),
  render: () => ( <div>Main</div> ),
  exact: true,
  strict: true
};

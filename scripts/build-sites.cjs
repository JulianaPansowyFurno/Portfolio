// Sites serves this private preview from the root; GitHub Pages keeps /Portfolio/.
process.env.PUBLIC_URL = '/';
require('react-scripts/scripts/build');

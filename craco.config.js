const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@dummy': path.resolve(__dirname, 'src/dummy/'),
    },
  },
};

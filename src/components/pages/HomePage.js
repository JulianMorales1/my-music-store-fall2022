import { Box } from '@mui/material';
import { productList } from '../../mockData';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

function HomePage({ isLogged, onNewCart }) {
  return (
    <Layout isLogged={isLogged}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product) => (
          <Box mb={6} bgcolor="pink">
            <ProductDisplay productData={product} onNewCart={onNewCart} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;

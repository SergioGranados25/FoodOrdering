import {View, FlatList} from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    
    <FlatList
      data={products}
      renderItem={({ item })=> <ProductListItem product = {item}/>}
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10,}}
      columnWrapperStyle ={{gap: 10}}
    />
      
      
    
  );
};

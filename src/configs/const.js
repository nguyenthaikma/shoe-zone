export const listTabBestSeller = [
  {
    id: 1,
    name: 'ALL',
  },
  {
    id: 2,
    name: 'SALE',
  },
  {
    id: 3,
    name: 'BEST',
  },
  {
    id: 4,
    name: 'NEW',
  },
];

export const listCategory = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'collection', href: '/collections' },
  { id: 3, name: 'Shoes', href: '/collections/4' },
  { id: 5, name: 'Gym', href: '/collections/3' },
  { id: 6, name: 'Sport', href: '/collections/1' },
];

export const listCollection = [
  {
    id: '3',
    total: 4,
    title: 'Gym sneakers',
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071',
  },
  {
    id: '1',
    total: 4,
    title: 'Sport sneakers',
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025',
  },
  {
    id: '4',
    total: 4,
    title: 'Other',
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026',
  },
];

export const labelStyle = {
  labelCol: { xs: 24, sm: 24, md: 8, lg: 6, xl: 5 },
  wrapperCol: { xs: 24, sm: 24, md: 16, lg: 18, xl: 19 },
  labelAlign: 'left',
};

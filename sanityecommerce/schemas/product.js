export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'isBestSelling',
      title: 'Is Best Selling',
      type: 'boolean',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Headphones', 'Earphones', 'Speaker'],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'reviewNumber',
      title: 'Review Number',
      type: 'number',
    },
    {
      name: 'fillStar',
      title: 'Fill Star',
      type: 'number',
    },
  ],
}

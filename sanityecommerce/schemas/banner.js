export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
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
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    },
    {
      name: 'largeText3',
      title: 'LargeText3',
      type: 'string',
    },
    {
      name: 'midText2',
      title: 'MidText2',
      type: 'string',
    },
    {
      name: 'midText3',
      title: 'MidText3',
      type: 'string',
    },
    {
      name: 'buttonText2',
      title: 'ButtonText2',
      type: 'string',
    },
  ],
}

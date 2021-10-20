export default {
  name: 'propertyImage',
  title: 'Property Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      option: {
        isHighLight: true
      }
    },
  ],
  options: {
    hotspot: true
  }
}
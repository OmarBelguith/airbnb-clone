export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: 'Enter your Full Name and LastName'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
  ],
  preview: {
    selecet: {
      title: 'fullName', media: 'image'
    }
  }
}
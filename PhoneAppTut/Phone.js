CLASS({
  name: 'Phone',
  properties: [
    'id', 'age', 'name', 'snippet', 'additionalFeatures', 'android',
    'availability', 'battery', 'camera', 'connectivity', 'description',
    'display', 'hardware', 'sizeAndWeight', 'storage', 'details',
    { name: 'imageUrl', view: 'foam.ui.ImageView' },
    { name: 'images', model_: 'StringArrayProperty' }
  ]
});
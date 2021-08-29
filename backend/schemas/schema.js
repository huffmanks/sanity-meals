import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import recipe from './recipe'
import ingredient from './ingredient'
import category from './category'

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    recipe,
    ingredient,
    category
  ])
})
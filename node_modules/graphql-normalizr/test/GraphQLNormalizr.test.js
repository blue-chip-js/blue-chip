const test = require('ava')
const { visit, } = require('graphql')
const gql = require('graphql-tag')

const { GraphQLNormalizr, } = require('../')
const {
  customIdKey,
  listAndObject,
  mergeTestData,
  nested,
  noNested,
  noTypeNames,
} = require('./mocks/data')

test('GraphQLNormalizr returns an object with `normalize`, `parse` and `addRequiredFields` methdos', t => {
  const { normalize, parse, addRequiredFields, } = new GraphQLNormalizr()

  t.not(undefined, normalize)
  t.not(undefined, parse)
  t.not(undefined, addRequiredFields)
})

test('`normalize` throws if a node has no `__typename` field', t => {
  const { normalize, } = new GraphQLNormalizr()
  t.throws(() => normalize({ data: noTypeNames, }))
})

test('snapshot :: `normalize` simple, not nested data', t => {
  const { normalize, } = new GraphQLNormalizr()
  t.snapshot(normalize({ data: noNested, }))
})

test('snapshot :: `normalize` nested data', t => {
  const { normalize, } = new GraphQLNormalizr()
  t.snapshot(normalize({ data: nested, }))
})

test('snapshot :: `normalize` data containing lists and objects', t => {
  const { normalize, } = new GraphQLNormalizr()
  t.snapshot(normalize({ data: listAndObject, }))
})

test('snapshot :: `normalize` merge data on the same doc', t => {
  const { normalize, } = new GraphQLNormalizr()
  t.snapshot(normalize({ data: mergeTestData, }))
})

test('snapshot :: `normalize` with custom "id" key', t => {
  const { normalize, } = new GraphQLNormalizr({ idKey: '_id', })
  t.snapshot(normalize({ data: customIdKey, }))
})

test('snapshot :: `normalize` with custom entity names', t => {
  const { normalize, } = new GraphQLNormalizr({
    typeMap: { User: 'accounts', Post: 'stories', Comment: 'messages', },
  })
  t.snapshot(normalize({ data: listAndObject, }))
})

test('snapshot :: `normalize` with lists', t => {
  const { normalize, } = new GraphQLNormalizr({
    lists: true,
  })
  t.snapshot(normalize({ data: listAndObject, }))
})

test('snapshot :: `normalize` with typenames', t => {
  const { normalize, } = new GraphQLNormalizr({
    typenames: true,
  })
  t.snapshot(normalize({ data: listAndObject, }))
})

test('`normalize` with cache', t => {
  let normalize

  normalize = new GraphQLNormalizr().normalize
  const data = normalize({ data: listAndObject, })
  const newData = normalize({ data: listAndObject, })
  t.not(data, newData)

  normalize = new GraphQLNormalizr({ caching: true, }).normalize
  const _data = normalize({ data: listAndObject, })
  const _newData = normalize({ data: listAndObject, })
  t.is(_data, _newData)
})

test('`parse` adds the required ["id", "__typename"] fields', t => {
  const query = `{
    allUsers {
      email
    }
    allPosts {
      author
      comments {
        message
        author
      }
    }
  }
  `

  let documentAST = gql(query)

  let bool = false
  visit(documentAST, {
    SelectionSet (node, parent) {
      bool = node.selections.some(s =>
        [ 'id', '__typename', ].includes(s.name.value)
      )
    },
  })
  t.false(bool)

  bool = false
  const { parse, } = new GraphQLNormalizr()
  documentAST = parse(query)
  visit(documentAST, {
    SelectionSet (node, parent) {
      bool = node.selections.some(s =>
        [ 'id', '__typename', ].includes(s.name.value)
      )
    },
  })
  t.true(bool)
})

const { gql } = require('apollo-server')

const typeDefs = gql`
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

type Author {
    id: ID!
    name: String!
    photo: String
}

"query to get tracks for homepage grid"
type Query {
    tracksForHome: [Track!]!
}
`

module.exports = typeDefs
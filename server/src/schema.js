const { gql } = require('apollo-server')

const typeDefs = gql`
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
}

type Author {
    id: ID!
    name: String!
    photo: String
}

type Module {
    id: ID!
    title: String!
    length: Int
}
"query to get tracks for homepage grid"
type Query {
    tracksForHome: [Track!]!
    track(id:ID!):Track
}
`
// query Query($trackId: ID!) {
//     track(id: $trackId) {
//       id
//       title
//       author {
//         id
//         name
//         photo
//       }
//       thumbnail
//       length
//       modulesCount
//       description
//       numberOfViews
//       modules {
//         id
//         title
//         length
//       }
//     }
//   }
module.exports = typeDefs
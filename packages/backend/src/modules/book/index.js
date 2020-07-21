import { GraphQLModule } from '@graphql-modules/core';
import { gql } from 'apollo-server';

// import { resolvers } from './resolvers';
// import { typeDefs } from './type-defs';


const list = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        books: () => list,
    },
};

const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
    title: String
    author: String
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
    books: [Book]
    }
`;

export const bookModule = new GraphQLModule({
    name: "BookModule",
    typeDefs,
    resolvers,
    imports: []
});
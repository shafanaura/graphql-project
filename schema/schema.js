const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var films = [
	{ name: "Lord of the rings", genre: "Fantasy", id: "1" },
	{ name: "Perahu Kertas", genre: "Romantic", id: "2" },
	{ name: "The Invisible Man", genre: "Thriller", id: "3" },
];

const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQuerType",
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				//code to get data from db/other sources
				return _.find(books, { id: args.id });
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});

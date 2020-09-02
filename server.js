const express = require("express");
const schema = require("./schema/schema");

const { graphqlHTTP } = require("express-graphql");

const app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
	}),
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));

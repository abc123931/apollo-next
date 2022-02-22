// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

module.exports = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["src/queries.ts"],
  overwrite: true,
  generates: {
    "lib/apollo/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: false,
        scalars: {
          uuid: "string",
          timestamptz: "string",
          _text: "string[]",
          citext: "string",
          _uuid: "string[]",
          bigint: "number",
        },
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          enumValues: "upper-case#upperCase",
        },
        apolloReactCommonImportFrom: "@apollo/client",
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
  },
};

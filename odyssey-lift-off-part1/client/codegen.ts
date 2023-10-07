import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // where to find our schema
  schema: "http://localhost:4000",
  // which files to consider when generating the types
  documents: ["src/**/*.tsx"],
  // where to output the generated code
  generates: {
    "./src/__generated__/": {
      // configure preset to work well with the cient side
      preset: "client",
      // modify the function generated that we will be working with
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  //   generate the code even if there aren't any gql operations in the specified documents path
  //   we don't want this after the initial generation because we want to know if there aren't any GraphQL documents for the Code Generator to scan
  //   ignoreNoDocuments: true,
};

export default config;

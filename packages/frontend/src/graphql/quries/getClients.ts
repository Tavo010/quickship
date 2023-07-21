import { gql } from "graphql-request";

export const ClientsQuery = gql`
  query getClients {
    clients {
      nodes {
        id
        firstName
        lastName
        phone
        email
      }
    }
  }
`;

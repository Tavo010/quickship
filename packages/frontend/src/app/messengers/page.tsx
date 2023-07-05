"use client";

import { API_URL } from "@/common";
import { Header, Table } from "@/components";
import {
    EuiBasicTableColumn,
  EuiButton,
  EuiHorizontalRule,
  EuiPageHeader,
  EuiPageHeaderContent,
  EuiPanel,
  EuiSkeletonText,
} from "@elastic/eui";
import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";

const ClientsQuery = gql`
  query getMessengers {
    messengers {
      id
      firstName
      lastName
      phone
      email
    }
  }
`;

const graphQLClient = new GraphQLClient(`${API_URL}/graphql`);

const fetchMessengers = async () => {
  return await graphQLClient.request(ClientsQuery);
};

export default function Messengers() {
    const { isLoading, error, data, isFetching }: any = useQuery({
        queryKey: ["messengers"],
        queryFn: fetchMessengers,
      });

      const columns: Array<EuiBasicTableColumn<any>> = [
        {
          field: "id",
          name: "ID",
        },
        {
          field: "firstName",
          name: "Nombre",
        },
        {
          field: "lastName",
          name: "Apellido",
        },
        {
          field: "phone",
          name: "Telefono",
        },
        {
          field: "email",
          name: "Correo",
        },
      ];

  return (
    <EuiPageHeaderContent>
      {isLoading ? (
        <EuiPanel style={{ margin: "2vh" }}>
          <EuiPageHeader>
            <EuiSkeletonText
              lines={1}
              size={"relative"}
              isLoading={isLoading}
            ></EuiSkeletonText>
          </EuiPageHeader>
          <EuiSkeletonText
            lines={6}
            size={"m"}
            isLoading={isLoading}
          ></EuiSkeletonText>
        </EuiPanel>
      ) : (
        <EuiPanel style={{ margin: "2vh" }}>
          <Header title={`Clientes ()`}>
            <EuiButton onClick={() => "/createMessenger"} href="/createMessenger">
              Crear mensajero
            </EuiButton>
          </Header>
          <EuiHorizontalRule />
          <EuiPanel>
            <Table items={data?.messengers} columns={columns} />
          </EuiPanel>
        </EuiPanel>
      )}
    </EuiPageHeaderContent>
  );
}
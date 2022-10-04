import React from "react";

import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any, i: number) => (
          <div key={i}>
            {user.name} / {user.username}
            <button
              onClick={() => {
                deleteUser({ variables: { id: user.id } });
              }}
            >
              Delete User
            </button>
          </div>
        ))}
    </div>
  );
};

export default ListOfUsers;

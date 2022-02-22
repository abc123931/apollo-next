import { gql, useMutation, useQuery } from "@apollo/client";
import type { VFC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "src/component/Button";
import type { User } from "src/type/apolloTypes";

export const Index: VFC = () => {
  const { data, error, loading } = useQuery<{ users: User[] }>(GET_USERS);
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  if (error) {
    return <div>エラー</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h2>ユーザー一覧</h2>
      {data?.users.length ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>
              <UserItem user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <p>ユーザーがいません</p>
      )}
      <Button tag="button" className="p-2" onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
};

type UserItemProps = {
  user: User;
};
const UserItem: VFC<UserItemProps> = ({ user }) => {
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const { handleSubmit, register, reset } = useForm<{ name: string }>({
    defaultValues: {
      name: user.name,
    },
  });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <input type="text" {...register("name")} />
      ) : (
        <span>{user.name}</span>
      )}
      {isEditing ? (
        <button
          type="button"
          onClick={handleSubmit(async (data) => {
            try {
              await updateUser({
                variables: { input: { name: data.name }, id: user.id },
              });
              alert("更新完了");
              setIsEditing(false);
              reset();
            } catch (error) {
              console.error(error);
              alert("更新失敗");
            }
          })}
        >
          完了
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          編集
        </button>
      )}
      <button
        type="button"
        onClick={async () => {
          try {
            await deleteUser({ variables: { id: user.id } });
            alert("削除しました");
          } catch (error) {
            console.error(error);
            alert("削除失敗");
          }
        }}
      >
        削除
      </button>
    </div>
  );
};

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($input: users_set_input!, $id: uuid!) {
    updateUser(_set: $input, pk_columns: { id: $id }) {
      id
      name
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

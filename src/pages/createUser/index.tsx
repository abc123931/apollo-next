import { gql, useMutation } from "@apollo/client";
import type { VFC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "src/component/Button";

export const CreateUser: VFC = () => {
  const { handleSubmit, register, reset } = useForm<{ name: string }>({
    defaultValues: { name: "" },
  });
  const [createUser] = useMutation(CREATE_USER);
  const handleClick = handleSubmit(async (data) => {
    try {
      await createUser({ variables: { input: { name: data.name } } });
      alert("ユーザー作成しました");
      reset();
    } catch (error) {
      console.error(error);
      alert("ユーザー作成失敗");
    }
  });

  return (
    <div>
      <h2>ユーザー作成</h2>
      <input type="text" {...register("name", { required: "必須です" })} />
      <Button tag="button" className="p-2" onClick={handleClick}>
        作成
      </Button>
    </div>
  );
};

const CREATE_USER = gql`
  mutation CreateUser($input: users_insert_input!) {
    insertUser(object: $input) {
      id
      name
    }
  }
`;

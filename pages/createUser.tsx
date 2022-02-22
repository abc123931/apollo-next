import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { CreateUser } from "src/pages/createUser";

const CreateUserPage: CustomNextPage = () => <CreateUser />;

CreateUserPage.getLayout = FluidLayout;

export default CreateUserPage;

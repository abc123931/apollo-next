import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { SubscriptionUser } from "src/pages/subscriptionUser";

const SubscriptionUserPage: CustomNextPage = () => <SubscriptionUser />;

SubscriptionUserPage.getLayout = FluidLayout;

export default SubscriptionUserPage;

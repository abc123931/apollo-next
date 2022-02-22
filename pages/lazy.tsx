import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { Lazy } from "src/pages/lazy";

const LazyPage: CustomNextPage = () => <Lazy />;

LazyPage.getLayout = FluidLayout;

export default LazyPage;

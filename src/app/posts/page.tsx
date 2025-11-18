import { brandConfig } from "../../brand-config";
import { createBlogShell } from "@caleblawson/blog-shell";

const { postsIndex } = createBlogShell(brandConfig);

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default postsIndex.Page;

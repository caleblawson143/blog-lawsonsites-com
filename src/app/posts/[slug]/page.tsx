import { brandConfig } from "../../../brand-config";
import { createBlogShell } from "@caleblawson/blog-shell";

const { postDetail } = createBlogShell(brandConfig);

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const generateMetadata = postDetail.generateMetadata;
export default postDetail.Page;

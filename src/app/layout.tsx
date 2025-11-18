import "./globals.css";
import { brandConfig } from "../brand-config";
import { createBlogShell } from "@caleblawson/blog-shell";

const { RootLayout, generateRootMetadata } = createBlogShell(brandConfig);

export const metadata = generateRootMetadata;
export default RootLayout;

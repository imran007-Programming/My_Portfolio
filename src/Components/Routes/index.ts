import App from "@/App";
import BlogPost from "@/Pages/BlogPost";
import Blogs from "@/Pages/Blogs";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    
  },
  {
    path: "/blog",
    Component: Blogs,
    
  },
  {
    path: "/blog/:slug",
    Component: BlogPost,
    
  },
]);

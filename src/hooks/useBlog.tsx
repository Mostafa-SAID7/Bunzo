import { useState, useEffect } from "react";
import { blogPosts, BlogPost } from "../data/blog";
import { BlogCardProps } from "../utils/Types"; 

const useBlog = () => {
  const [blogData, setBlogData] = useState<BlogCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Convert BlogPost to BlogCardProps format
  const convertBlogPostToBlogCard = (post: BlogPost): BlogCardProps => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    author: post.author.name,
    date: post.publishedDate,
    content: post.content
  });

  const fetchAllBlogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API delay for realistic experience
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const convertedData = blogPosts.map(convertBlogPostToBlogCard);
      setBlogData(convertedData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching blogs.");
      }
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSingleBlog = async (id: number): Promise<BlogCardProps | null> => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const blogPost = blogPosts.find(post => post.id === id);
      if (!blogPost) {
        throw new Error("Blog not found.");
      }
      
      const convertedBlog = convertBlogPostToBlogCard(blogPost);
      return convertedBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching the blog.");
      }
      console.error("Error fetching blog:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const addNewBlog = async (blog: BlogCardProps): Promise<BlogCardProps | null> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newBlog = {
        ...blog,
        id: Math.max(...blogData.map(b => b.id || 0)) + 1
      };
      
      setBlogData((prevBlogs) => [...prevBlogs, newBlog]);
      return newBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while adding the blog.");
      }
      console.error("Error adding blog:", error);
      return null;
    }
  };

  const editExistingBlog = async (
    id: number | undefined,
    blog: BlogCardProps
  ): Promise<BlogCardProps | void> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const updatedBlog = { ...blog, id };
      setBlogData((prevBlogs) =>
        prevBlogs.map((b) => (b.id === id ? updatedBlog : b))
      );
      return updatedBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while editing the blog.");
      }
      console.error("Error editing blog:", error);
    }
  };

  const deleteExistingBlog = async (id: number | undefined): Promise<boolean> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setBlogData((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while deleting the blog.");
      }
      console.error("Error deleting blog:", error);
      return false;
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return {
    blogData,
    isLoading,
    error,
    fetchAllBlogs,
    fetchSingleBlog,
    addNewBlog,
    editExistingBlog,
    deleteExistingBlog,
  };
};

export default useBlog;
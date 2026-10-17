import BlogCard from "../components/BlogCard";

import blog1 from "../img/Rectangle 9..png";
import blog2 from "../img/Rectangle 10png.png";
import blog3 from "../img/Rectangle 9.png";
import person from "../img/Ellipse 1.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "The Latest Furniture Trends for Spring",
    description:
      "Discover the modern trends for the upcoming spring season",
    author: "Emily Johson",
    authorImage: person,
    date: "11 Jan 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: blog2,
    title: "Modern Furniture Trends for Summer",
    description:
      "Explore the modern trends for the upcoming spring season",
    author: "Sara",
    authorImage: person,
    date: "08 Jan 2023",
    readTime: "3 min read",
  },
  {
    id: 3,
    image: blog3,
    title: "Explore Stylish Furniture Trends for Spring",
    description:
      "Know the modern trends for the upcoming event",
    author: "Rakib Roni",
    authorImage: person,
    date: "11 Jan 2023",
    readTime: "5 min read",
  },
];

function BlogSection() {
  return (
    <section className="bg-slate-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Top */}
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-xl">
            <p className="mb-3 text-xs text-gray-600 sm:text-sm md:mb-4">
              Furniture
            </p>

            <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Discover the Latest Trends
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base md:mt-4 md:leading-7">
              Stay Updated With Our Information And Engaging Blog Posts
              About Modern Furniture And Fashion On The Industry
            </p>
          </div>

          <button className="flex w-fit items-center gap-3 bg-black px-5 py-3 text-xs text-white transition hover:bg-gray-800 sm:text-sm md:px-6">
            Explore
            <span>→</span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;
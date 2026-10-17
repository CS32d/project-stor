function BlogCard({ blog }) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white shadow-sm">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-44 w-full object-cover sm:h-52 md:h-56"
      />

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <p className="mb-2 text-[10px] text-gray-500 sm:text-xs">
          Furniture
        </p>

        <h3 className="text-base font-bold leading-6 sm:text-lg md:text-xl">
          {blog.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm">
          {blog.description}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-5 sm:gap-3 sm:pt-6">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
          />

          <div>
            <p className="text-[10px] text-gray-600 sm:text-xs">
              {blog.author}
            </p>

            <p className="text-[9px] text-gray-400 sm:text-[10px]">
              {blog.date} · {blog.readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
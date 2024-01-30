/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const blogPosts = [
    {
      date: "Dec 22, 2023",
      title: "Should you use QuickBooks for property management software?",
      excerpt:
        "Learn whether or not you should use QuickBooks for property management. This guide compares QuickBooks vs Buildium in 10 key areas.",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual path
      blogUrl: "#", // Replace with the actual URL
      readTime: "18 min. read",
      author: "Amos Wambi",
      categories: ["Accounting Accuracy"], // Assuming this is a category
    },
    {
      date: "Mar 15, 2023",
      title:
        "Engage your employees: Expert culture tips for property management businesses",
      excerpt:
        "While ping pong tables, unlimited snacks, and cold brew on tap are all amazing perks, they don’t define a strong company culture. That’s especially true at a time where keeping your employees engaged is becoming increasingly difficult, with...",
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      blogUrl: "blog-employee-engagement.html",
      readTime: "17 min. read",
      author: "John Kato",
      categories: ["Team"], // Assuming this is a category
    },
    {
      date: "Dec 22, 2023",
      title: "Should you use QuickBooks for property management software?",
      excerpt:
        "Learn whether or not you should use QuickBooks for property management. This guide compares QuickBooks vs Lianah in 10 key areas.",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual path
      blogUrl: "#", // Replace with the actual URL
      readTime: "18 min. read",
      author: "Amos Wambi",
      categories: ["Accounting Accuracy"], // Assuming this is a category
    },
    {
      date: "Mar 15, 2023",
      title:
        "Engage your employees: Expert culture tips for property management businesses",
      excerpt:
        "While ping pong tables, unlimited snacks, and cold brew on tap are all amazing perks, they don’t define a strong company culture. That’s especially true at a time where keeping your employees engaged is becoming increasingly difficult, with...",
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      blogUrl: "blog-employee-engagement.html",
      readTime: "17 min. read",
      author: "John Kato",
      categories: ["Team"], // Assuming this is a category
    },
    {
      date: "Dec 22, 2023",
      title: "Should you use QuickBooks for property management software?",
      excerpt:
        "Learn whether or not you should use QuickBooks for property management. This guide compares QuickBooks vs Buildium in 10 key areas.",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual path
      blogUrl: "#", // Replace with the actual URL
      readTime: "18 min. read",
      author: "Amos Wambi",
      categories: ["Accounting Accuracy"], // Assuming this is a category
    },
    {
      date: "Mar 15, 2023",
      title:
        "Engage your employees: Expert culture tips for property management businesses",
      excerpt:
        "While ping pong tables, unlimited snacks, and cold brew on tap are all amazing perks, they don’t define a strong company culture. That’s especially true at a time where keeping your employees engaged is becoming increasingly difficult, with...",
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      blogUrl: "blog-employee-engagement.html",
      readTime: "17 min. read",
      author: "John Kato",
      categories: ["Team"], // Assuming this is a category
    },
    // ... more blog posts
  ];
  
  function BlogView({ blogs }) {
    return (
      <div className="flex flexCenter md:px-20">
        <BlogSection blogs={blogPosts} />
      </div>
    );
  }
  
  export default BlogView;
  const BlogSection = ({ blogs }) => (
    <section className="pt-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="text-center mb-[60px] mx-auto max-w-[900px]">
          <h2 className="mb-4 text-3xl font-bold  sm:text-4xl  md:leading-[1.2]">
            The Lianah Blog
          </h2>
          <p className=" ">
            Dive into the world of property management with Lianah, where we
            unpack the intricacies of the rental industry, one post at a time.
            Whether you’re an ambitious property owner on the hunt for growth
            strategies or a renter eager for insider tips, our rich library of
            articles serves every curiosity.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
  
  const BlogCard = ({ date, title, author, excerpt, imageUrl, blogUrl }) => (
    <div className="group mb-10 w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-4 overflow-hidden rounded-[5px]">
        <a href={blogUrl} className="block">
          <img
            src={imageUrl}
            alt={title}
            className="w-full transition hover:rotate-4 hover:scale-125"
          />
        </a>
      </div>
      <div>
        <span>
          {date} | {author}
        </span>
        <h3>
          <a
            href={blogUrl}
            className="mb-4 inline-block text-xl  font-semibold sm:text-2xl lg:text-xl xl:text-2xl hover:text-orange-600"
          >
            {title}
          </a>
        </h3>
        <p className="max-w-[370px] text-gray-1000">{excerpt}</p>
      </div>
    </div>
  );
  
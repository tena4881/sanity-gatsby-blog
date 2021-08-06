export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "610d3463a0112cbcf221b5f2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-idfa7g9i",
                  apiId: "8d79b5de-f45f-4512-a613-1f2d7982f150",
                },
                {
                  buildHookId: "610d3463185b20b63d91c466",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ukob798k",
                  apiId: "45988dbf-b84c-4dd5-9105-b9daa2c8107a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tena4881/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ukob798k.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  fileName: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="mb-5">
          <Link href={`/blog/${post.fileName}`} legacyBehavior>
            <a>
              <span className="text-lg text-red-500">{post.fileName}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = readdirSync("./public/AWS Certification/SAA-C03/용어 설명").map(
    (file) => {
      const content = readFileSync(
        `./public/AWS Certification/SAA-C03/용어 설명/${file}`,
        "utf-8"
      );
      const fileName = file.substr(0, file.lastIndexOf(".")) || file;
      return { ...matter(content).data, fileName };
    }
  );

  // console.log(files);

  // const posts = readdirSync("./posts").map((file) => {
  //   const content = readFileSync(`./posts/${file}`, "utf-8");
  //   const fileName = file.substring(0, file.lastIndexOf(".")) || file;
  //   return { ...matter(content).data, fileName };
  // });

  console.log(posts);

  return {
    props: { posts },
  };
}

export default Blog;

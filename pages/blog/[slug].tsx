import { WIKI_LINK } from "@/constants/regex";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useRef } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

const Post: NextPage<{
  post: string;
  data: { title: string; date: string; category: string };
}> = ({ post, data }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // WIKI_LINK.global;
    const regexp = new RegExp(WIKI_LINK, "gi");

    console.log(regexp);

    // console.log(WIKI_LINK.);

    const content = ref.current?.textContent ?? "";
    console.log(`${content} ${content}`.replaceAll(regexp, "test"));
  }, []);

  return (
    <div
      ref={ref}
      className="blog-post_content"
      dangerouslySetInnerHTML={{ __html: post }}
    >
      {/* {post} */}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { content, data } = matter.read(
    `./public/AWS Certification/SAA-C03/용어 설명/${ctx.params?.slug}.md`
  );
  const { value: post } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return {
    props: {
      post,
      data,
    },
  };
};

export default Post;

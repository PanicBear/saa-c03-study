import { WIKI_LINK } from "@/constants/regex";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useRef } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

const Post: NextPage<{
  post: string;
}> = ({ post }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // WIKI_LINK.global;
    const regexp = new RegExp(WIKI_LINK, "gi");

    // console.log(regexp);

    console.log(WIKI_LINK);

    const content = ref.current?.textContent ?? "";
    console.log(`${content} ${content}`.replaceAll(regexp, "test"));
  }, []);

  return (
    <div
      ref={ref}
      className="blog-post_content"
      dangerouslySetInnerHTML={{ __html: post }}
    />
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
    `./public/AWS Certification/SAA-C03/용어설명/${ctx.params?.termId}.md`
  );
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  // const regexp = new RegExp(WIKI_LINK, "gi");
  const regexp = new RegExp(WIKI_LINK);

  const post = (value + "")
    // .replaceAll(WIKI_ORIGIN, "")
    .replace(regexp, "<a href='/$1'>$2</a>");

  return {
    props: {
      post,
    },
  };
};

export default Post;

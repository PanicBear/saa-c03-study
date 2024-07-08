import { DUMP_ID, WIKI_LINK } from "@/constants/regex";
import matter from "gray-matter";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import path from "path";
import { useEffect, useRef } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { twMerge } from "tailwind-merge";
import { unified } from "unified";

// TODO : wiki link for term
export default function Link({
  link,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article
      className={twMerge("p-4")}
      dangerouslySetInnerHTML={{ __html: link }}
    />
  );
}

export const getStaticProps = (async (ctx) => {
  const { content } = matter.read(
    path.join(process.cwd(), "AWS Certification", "SAA-C03", "링크.md")
  );
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return {
    props: {
      link: value + "",
    },
    revalidate: 1,
  };
}) satisfies GetStaticProps<{
  link: string;
}>;

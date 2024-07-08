import { DUMP_ID, WIKI_LINK } from "@/constants/regex";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { twMerge } from "tailwind-merge";
import { unified } from "unified";

// TODO : wiki link for term
export default function Term({
  term,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article
      className={twMerge("p-4")}
      dangerouslySetInnerHTML={{ __html: term }}
    />
  );
}

export const getStaticPaths = (() => {
  return {
    paths: [],
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = (async (ctx) => {
  const { content, data } = matter.read(
    path.join(
      process.cwd(),
      "AWS Certification",
      "SAA-C03",
      "용어설명",
      `${ctx.params?.termId}.md`
    )
  );
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  const term = (value + "").replace(WIKI_LINK, (_, link, alias) => {
    const dumpId = alias.replace(DUMP_ID, "$1");

    return `<a href='/aws-certification/SAA-C03/dump/${dumpId}' target="_blank">${alias}</a>`;
  });

  return {
    props: {
      term,
    },
    revalidate: 1,
  };
}) satisfies GetStaticProps<{
  term: string;
}>;

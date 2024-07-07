import Drawer from "@/components/drawer";
import Floating from "@/components/floating";
import { WIKI_LINK } from "@/constants/regex";
import {
  termWikiLinkReplacer,
  wrapAnswer,
  wrapAnswerSheet,
} from "@/utils/obsidian";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import { useCallback, useEffect, useRef, useState } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { twMerge } from "tailwind-merge";
import { unified } from "unified";

export default function Post({
  question,
  explanation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <article
        className={twMerge("p-4")}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <article
        className={twMerge("p-4")}
        dangerouslySetInnerHTML={{ __html: explanation }}
      />
    </>
  );
}

export const getStaticPaths = (() => {
  return {
    paths: [],
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (ctx) => {
  // let question = "";
  // let explanation = "";

  const [q, e] = readdirSync(
    `./AWS Certification/SAA-C03/덤프/문제${ctx.params?.id}`
  ).map((fileName) => {
    const content = readFileSync(
      `./AWS Certification/SAA-C03/덤프/문제${ctx.params?.id}/${fileName}`,
      "utf-8"
    );

    return matter(content).content;
  });

  const question =
    (await unified().use(remarkParse).use(remarkHtml).process(q)) + "";

  const explanation =
    (await unified().use(remarkParse).use(remarkHtml).process(e)) + "";

  return {
    props: {
      question,
      explanation,
    },
  };
}) satisfies GetStaticProps<{
  question: string;
  explanation: string;
}>;

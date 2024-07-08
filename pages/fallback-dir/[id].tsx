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
  err,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    console.log(err);
  });
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
  let question = "";
  let explanation = "";
  let err = "";

  try {
    const [q, e] = readdirSync(
      `./aws-certification/SAA-C03/dump/q${ctx.params?.id}`
    ).map((fileName) => {
      const content = readFileSync(
        `./aws-certification/SAA-C03/dump/q${ctx.params?.id}/${fileName}`,
        "utf-8"
      );

      return matter(content).content;
    });

    question =
      (await unified().use(remarkParse).use(remarkHtml).process(q)) + "";

    explanation =
      (await unified().use(remarkParse).use(remarkHtml).process(e)) + "";
  } catch (error) {
    err = JSON.stringify(error);
  }

  return {
    props: {
      question,
      explanation,
      err,
      reavalidate: 1,
    },
  };
}) satisfies GetStaticProps<{
  question: string;
  explanation: string;
}>;

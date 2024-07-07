import Drawer from "@/components/drawer";
import Floating from "@/components/floating";
import { WIKI_LINK } from "@/constants/regex";
import {
  termWikiLinkReplacer,
  wrapAnswer,
  wrapAnswerSheet,
} from "@/utils/obsidian";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
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
  const answerA = useRef<HTMLElement | null>(null);
  const answerB = useRef<HTMLElement | null>(null);
  const answerC = useRef<HTMLElement | null>(null);
  const answerD = useRef<HTMLElement | null>(null);
  const correctAnswer = useRef<HTMLElement | null>(null);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [answer, setAnswer] = useState<Answer>();

  const handleShowAnswerButtonClick = useCallback(
    () => setOpen((prev) => !prev),
    []
  );

  const handleSelectAnswer = useCallback(
    (target: HTMLElement | null, selected: Answer) => {
      if (target === null) throw new Error("target element is null");

      const isAnswerCorrect = selected === answer;

      target.classList.remove("hover:bg-blue-300");

      isAnswerCorrect
        ? target.classList.add("bg-green-400")
        : target.classList.add("bg-red-400");
    },
    [answer]
  );

  useEffect(() => {
    console.log(err);
  }, [err]);

  useEffect(() => {
    answerA.current = document.querySelector("#answer-A");
    answerB.current = document.querySelector("#answer-B");
    answerC.current = document.querySelector("#answer-C");
    answerD.current = document.querySelector("#answer-D");
    correctAnswer.current = document.querySelector("#answer");

    if (answerA.current) {
      answerA.current.onclick = () => handleSelectAnswer(answerA.current, "A");
    }
    if (answerB.current) {
      answerB.current.onclick = () => handleSelectAnswer(answerB.current, "B");
    }
    if (answerC.current) {
      answerC.current.onclick = () => handleSelectAnswer(answerC.current, "C");
    }
    if (answerD.current) {
      answerD.current.onclick = () => handleSelectAnswer(answerD.current, "D");
    }
    if (correctAnswer.current) {
      const parsedAnswer = correctAnswer.current.innerHTML?.match(
        /([A|B|C|D])./
      )?.[1] as Answer;

      if (!parsedAnswer) throw new Error("answer not parsed");

      setAnswer((prev) => (prev === parsedAnswer ? prev : parsedAnswer));
    }
  }, [handleSelectAnswer]);

  return (
    <>
      <article
        className={twMerge("p-4")}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: explanation }} /> */}

      <Drawer
        open={isOpen}
        side="bottom"
        setOpen={setOpen}
        content={<article dangerouslySetInnerHTML={{ __html: explanation }} />}
      />
      <Floating onClick={handleShowAnswerButtonClick} />
    </>
  );
}

export const getStaticPaths = (() => {
  return {
    paths: [],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (ctx) => {
  let question = "";
  let explanation = "";
  let err = process.cwd();

  try {
    const questionFile = matter.read(
      `./AWS Certification/SAA-C03/덤프/${ctx.params?.dumpId}/문제.md`
    );
    const explanationFile = matter.read(
      `./AWS Certification/SAA-C03/덤프/${ctx.params?.dumpId}/해설.md`
    );

    const parsedQuestion = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(questionFile.content);

    question = parsedQuestion.value + "";

    const parsedExplanation = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(explanationFile.content);

    question = parsedExplanation.value + "";

    question = (parsedQuestion.value + "")
      .replace(...wrapAnswerSheet("A"))
      .replace(...wrapAnswerSheet("B"))
      .replace(...wrapAnswerSheet("C"))
      .replace(...wrapAnswerSheet("D"))
      .replace(WIKI_LINK, (_, link, alias) => {
        if (alias)
          return `<a href='/aws-certification/SAA-C03/term/${link}' target="_blank">${alias}</a>`;

        return `<a href='/aws-certification/SAA-C03/term/${link}' target="_blank">${link}</a>`;
      });

    explanation = (parsedExplanation.value + "")
      .replace(...wrapAnswer())
      .replace(WIKI_LINK, (...props) => termWikiLinkReplacer(props));
  } catch (error) {
    err = JSON.stringify(error);
  }

  return {
    props: {
      question,
      explanation,
      err,
      reavalidate: 5,
    },
  };
}) satisfies GetStaticProps<{
  question: string;
  explanation: string;
  err: string;
}>;

import LinkItem from "@/components/linkItem";
import List from "@/components/list";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export default function Page({
  list,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <List>
      {list.map((item, index) => (
        <LinkItem key={index} url={item.title} label={item.title} />
      ))}
    </List>
  );
}

export const getStaticProps = (async (ctx) => {
  const list = readdirSync("./public/AWS Certification/SAA-C03/용어설명").map(
    (file) => {
      const content = readFileSync(
        `./public/AWS Certification/SAA-C03/용어설명/${file}`,
        "utf-8"
      );
      const title = file.substring(0, file.lastIndexOf(".")) || file;
      return { ...matter(content).data, title };
    }
  );

  return {
    props: { list },
  };
}) satisfies GetStaticProps<{
  list: Markdown[];
}>;

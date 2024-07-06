import LinkItem from "@/components/linkItem";
import List from "@/components/list";
import { DUMP_PREFIX } from "@/constants";
import { DUMP_ID } from "@/constants/regex";
import { readdirSync } from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Page({
  list,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <List>
      {list.map((item, index) => (
        <LinkItem
          key={index}
          url={DUMP_PREFIX + item}
          label={DUMP_PREFIX + item}
        />
      ))}
    </List>
  );
}

export const getStaticProps = (async () => {
  const list = readdirSync("/AWS Certification/SAA-C03/덤프")
    .map((item) => +item.replace(DUMP_ID, "$1"))
    .sort((a, b) => a - b);

  return {
    props: { list },
  };
}) satisfies GetStaticProps<{
  list: number[];
}>;

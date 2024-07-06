import LinkItem from "@/components/linkItem";
import List from "@/components/list";

export default function Page() {
  return (
    <List>
      <LinkItem url="dump" label="덤프파일" />
      <LinkItem url="term" label="용어설명" />
      <LinkItem url="link" label="유용한 링크" />
    </List>
  );
}

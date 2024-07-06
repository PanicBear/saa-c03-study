import { WIKI_LINK } from "@/constants/regex";

export function wrapAnswerSheet(answer: Answer): [RegExp, string] {
  return [
    new RegExp(
      `(\<p\>${answer}[\.]+[^<]*\<\/p\>)\n*(\<p\>[^<]*\<\/p\>)\n*(\<p\>[^<]*\<\/p\>)?`,
      "g"
    ),
    `<div id="answer-${answer}" class="p-2 hover:bg-blue-300 rounded-md">$1\n$2\n$3\n</div>`,
  ];
}

export function wrapAnswer(): [RegExp, string] {
  return [/\<p\>(\w).\<\/p\>/, "<p id='answer'>$1.</p>"];
}

export function termWikiLinkReplacer([_, link, alias]: [string, ...any]) {
  if (alias)
    return `<a href='/aws-certification/SAA-C03/term/${link}' target="_blank">${alias}</a>`;

  return `<a href='/aws-certification/SAA-C03/term/${link}' target="_blank">${link}</a>`;
}

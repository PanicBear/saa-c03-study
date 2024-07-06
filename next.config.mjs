/** @type {import('next').NextConfig} */

const pathsToRedirect = [
  {
    source: "/",
    destination: "/aws-certification",
    permanent: true,
  },
];

const pathsToRewrite = [
  ["/AWS%20Certification", "/aws-certification"],

  // AWS Certification/SAA-C03/덤프
  [
    "/AWS%20Certification/SAA-C03/%EB%8D%A4%ED%94%84",
    "/aws-certification/SAA-C03/dump",
  ],
  // AWS Certification/SAA-C03/덤프/문제4
  [
    "/AWS%20Certification/SAA-C03/%EB%8D%A4%ED%94%84/:questionId",
    "/aws-certification/SAA-C03/dump/:questionId",
  ],
  // AWS Certification/SAA-C03/덤프/문제4/문제
  [
    "/AWS%20Certification/SAA-C03/%EB%8D%A4%ED%94%84/:questionId/%EB%AC%B8%EC%A0%9C",
    "/aws-certification/SAA-C03/dump/:questionId/question",
  ],
  // AWS Certification/SAA-C03/덤프/문제4/해설
  [
    "/AWS%20Certification/SAA-C03/%EB%8D%A4%ED%94%84/:questionId/%ED%95%B4%EC%84%A4",
    "/aws-certification/SAA-C03/dump/:questionId/explanation",
  ],
  // AWS Certification/SAA-C03/용어설명
  [
    "/aws-certification/SAA-C03/%EC%9A%A9%EC%96%B4%EC%84%A4%EB%AA%85",
    "/aws-certification/SAA-C03/term",
  ],
  // AWS Certification/SAA-C03/용어설명/[termId]
  [
    "/aws-certification/SAA-C03/%EC%9A%A9%EC%96%B4%EC%84%A4%EB%AA%85/:termId",
    "/aws-certification/SAA-C03/term/:termId",
  ],
];
const rewrites = pathsToRewrite.map(([ko, eng]) => ({
  source: ko,
  destination: eng,
}));

const nextConfig = {
  async rewrites() {
    return rewrites;
  },
  async redirects() {
    return pathsToRedirect;
  },
  reactStrictMode: true,
};

export default nextConfig;

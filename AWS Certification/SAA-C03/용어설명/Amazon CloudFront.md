Amazon CloudFront는 .html, .css, .js 및 이미지 파일과 같은 정적 및 동적 웹 콘텐츠를 사용자에게 더 빨리 **배포하도록 지원하는 웹 서비스**입니다. CloudFront는 엣지 로케이션이라고 하는 데이터 센터의 전 세계 네트워크를 통해 콘텐츠를 제공합니다. CloudFront를 통해 서비스하는 콘텐츠를 사용자가 요청하면 지연 시간이 가장 낮은 엣지 로케이션으로 요청이 라우팅되므로 가능한 최고의 성능으로 콘텐츠가 제공됩니다.

- 콘텐츠가 이미 지연 시간이 가장 낮은 엣지 로케이션에 있는 경우 CloudFront가 콘텐츠를 즉시 제공합니다.
    
- 콘텐츠가 엣지 로케이션에 없는 경우 CloudFront는 콘텐츠의 최종 버전에 대한 소스로 지정된 오리진(Amazon S3 버킷, MediaPackage 채널, HTTP 서버(예: 웹 서버) 등)에서 콘텐츠를 검색합니다.
---

여러 오리진에서 다양한 유형의 요청을 제공하도록 단일 CloudFront 웹 배포를 구성할 수 있다.

예를 들어 웹 사이트에서 Amazon Simple Storage Service(Amazon S3) 버킷의 정적 콘텐츠와 로드 밸런서의 동적 콘텐츠를 제공할 수 있다.

CloudFront 웹 배포에서 두 가지 유형의 콘텐츠를 모두 제공할 수 있으며 다음 단계에 따라 S3 버킷의 정적 콘텐츠와 로드 밸런서의 동적 콘텐츠를 제공하도록 CloudFront 웹 배포를 구성한다.

배포를 만들 때 CloudFront가 파일에 대한 요청을 보내는 원본을 지정한다.

CloudFront에서 여러 원본을 사용할 수 있습니다. 예를 들어 Amazon S3 버킷, MediaStore 컨테이너, MediaPackage 채널, Application Load Balancer 또는 AWS Lambda 함수 URL을 사용할 수 있습니다.

원본이 하나 이상의 Amazon EC2 인스턴스에서 호스트되는 하나 이상의 HTTP 서버(웹 서버)인 경우 [[Application Load Balancer]]를 사용하여 인스턴스에 트래픽을 분산할 수 있습니다.

---
###  참조
- [AWS DOC - Amazon CloudFront](https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [[AWS Certification/SAA-C03/덤프/문제12/문제|문제12]]
- [[AWS Certification/SAA-C03/덤프/문제38/문제|문제38]]



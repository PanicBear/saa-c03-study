→ 클라이언트와 S3 버킷 간의 장거리 파일 전송을 파일을 빠르고 쉽고 안전하게 전송할 수 있는 버킷 수준 기능이다.

Transfer Acceleration은 전 세계에서 S3 버킷으로 전송 속도를 최적화하도록 설계되어있다.

Transfer Acceleration은 Amazon CloudFront에서 전 세계에 분산된 엣지 로케이션을 활용하며, 엣지 로케이션에 도착한 데이터는 최적화된 네트워크 경로를 통해 Amazon S3로 라우팅된다.


**Transfer Acceleration을 사용하는 이유**
- 전 세계 각지에서 중앙의 버킷으로 업로드하는 고객이 있는 경우
- 전 세계에 정기적으로 수 기가바이트에서 수 테라바이트의 데이터를 전송할 경우
- Amazon S3에 업로드할 때 인터넷을 통해 사용 가능한 대역폭을 충분히 활용할 수 없는 경우

---
###  참조
- [AWS DOC - S3 Transfer Acceleration](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/transfer-acceleration-getting-started.html)
- [[AWS Certification/SAA-C03/덤프/문제1/문제|문제1]]
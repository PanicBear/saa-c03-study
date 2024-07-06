업계 표준 파일 프로토콜을 사용하여 파일을 원활하게 Amazon S3에 객체로 저장하고 이에 액세스할 수 있는 파일 인터페이스를 애플리케이션에 제공하는 [[AWS Storage Gateway]] 서비스 구성이다.

[[NFS|네트워크 파일 시스템]](NFS) 및 [[SMB|서버 메시지 블록]](SMB)과 같은 파일 프로토콜을 사용하여 Amazon Simple Storage Service(S3)에서 객체를 저장하고 검색할 수 있습니다. S3 File Gateway를 통해 작성된 객체는 S3에서 직접 액세스할 수 있습니다.

게이트웨이가 생성하는 객체에 대한 초기 스토리지 클래스를 구성한 다음, 버킷 수명 주기 정책을 사용하여 Amazon S3에서 [[Amazon S3 Glacier]]로 파일을 이동할 수 있습니다.

사용 사례

1. 최근에 액세스한 데이터에 대해 빠른 로컬 액세스를 유지하면서 온프레미스 파일 데이터를 Amazon S3로 마이그레이션    
2. 온프레미스 파일 데이터를 Amazon S3에 객체로 백업하고(Microsoft SQL Server와 Oracle 데이터베이스 및 로그 포함) 수명 주기 관리 및 교차 리전 복제와 같은 S3 기능을 사용
3. 기계 학습, 빅 데이터 분석 또는 서버리스 함수와 같은 AWS 서비스로 처리하기 위해 온프레미스 애플리케이션에서 생성한 데이터를 사용하는 하이브리드 클라우드 워크플로

---
### 참조
- [AWS DOC - Amazon S3 File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/what-is-file-s3.html)
- [[AWS Storage Gateway]]
- [[Amazon S3 Glacier]]
- [[AWS Certification/SAA-C03/덤프/문제9/문제|문제9]]
Amazon S3는 워크로드의 성능, 데이터 액세스, 복원력 및 비용 요구 사항에 따라 선택할 수 있는 다양한 스토리지 클래스를 제공합니다. S3 스토리지 클래스는 다양한 액세스 패턴에 대해 가장 저렴한 스토리지를 제공하기 위해 특별히 구축되었습니다. S3 스토리지 클래스는 까다로운 성능 요구 사항, 데이터 레이크, 레지던시 요구 사항, 알 수 없거나 변경되는 액세스 패턴 또는 아카이브 스토리지를 포함하여 거의 모든 사용 사례에 적합합니다.

### S3 스토리지 클래스
- 알 수 없거나 액세스 패턴이 변경되는 데이터에 대한 자동 비용 절감
	- S3 Intelligent-Tiering
- 자주 액세스하는 데이터
	- S3 Standard
- 가장 자주 액세스하는 데이터
	- S3 Express One Zone
- 자주 액세스하지 않는 데이터
	- S3 Standard-Infrequent Access(S3 Standard-IA)
		- AZ 3개 이상
	- S3 One Zone-Infrequent Access(S3 One Zone-IA)
		- 단일 AZ
		- 비용 절감 20%
- 즉각적인 액세스가 필요한 아카이브 데이터
	- S3 Glacier Instant Retrieval
- 즉각적인 액세스가 필요하지 않고 거의 액세스하지 않는 장기 데이터
	- S3 Glacier Flexible Retrieval(이전 [[Amazon S3 Glacier|S3 Glacier]])
- 클라우드에서 가장 저렴한 스토리지로 몇 시간 만에 검색 가능한 장기간 아카이브 및 디지털 보존
	- Amazon S3 Glacier Deep Archive(S3 Glacier Deep Archive)

Amazon S3는 클라우드에서 가장 뛰어난 내구성의 스토리지를 제공합니다. 고유한 아키텍처를 기반으로 하는 S3는 99.999999999%(9 11개)를 초과하는 데이터 내구성을 제공하도록 설계되었습니다. 또한, S3는 기본적으로 최소 3개의 가용 영역에 데이터를 중복 저장하여 광범위한 장애에 대비한 복원력을 제공합니다. 고객은 스토리지 비용 또는 지연 시간을 최소화하기 위해 단일 AZ에 데이터를 저장하거나, 전체 데이터 센터의 영구적 손실에 대비한 복원력을 위해 여러 AZ에 또는 지리적 복원력 요구 사항을 충족하기 위해 여러 AWS 리전에 데이터를 저장할 수 있습니다. 기존 AWS 리전으로 해결할 수 없는 데이터 레지던시 요구 사항이 있다면 **S3 Outposts** 스토리지 클래스를 사용하여 S3 데이터를 온프레미스에 저장할 수 있습니다.

객체 수준에서 S3 스토리지 클래스를 구성할 수 있으며, 단일 범용 버킷에는 S3 Express One Zone을 제외한 모든 스토리지 클래스에 저장된 객체가 포함될 수 있습니다. Amazon S3는 전체 수명 주기 동안 데이터를 관리할 수 있는 기능도 제공합니다. S3 수명 주기 정책을 설정한 후에는 애플리케이션 변경 없이 데이터가 다른 스토리지 클래스로 자동으로 전송됩니다. S3 디렉터리 버킷은 단일 가용 영역 내에서 더 신속한 데이터 처리를 제공하는 S3 Express One Zone 스토리지 클래스에 객체만 저장할 수 있으며 S3 수명 주기 정책은 지원하지 않습니다.

---
### 참조
- [AWS DOC - Amazon S3 Storage Class](https://aws.amazon.com/ko/s3/storage-classes/)
- [[S3 Intelligent-Tiering]]
- [[AWS Certification/SAA-C03/덤프/문제22/문제|문제22]]
- [[AWS Certification/SAA-C03/덤프/문제23/문제|문제23]]
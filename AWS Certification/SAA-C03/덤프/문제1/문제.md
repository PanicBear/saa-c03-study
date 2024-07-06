A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.

The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.

Which solution meets these requirements?

---

회사는 여러 대륙에 걸쳐 도시의 온도, 습도 및 대기압에 대한 데이터를 수집합니다. 회사가 매일 각 사이트에서 수집하는 데이터의 평균 볼륨은 500GB입니다. 각 사이트에는 고속 인터넷 연결이 있습니다.

이 회사는 이러한 모든 글로벌 사이트의 데이터를 단일 Amazon S3 버킷에 최대한 빨리 집계하려고 합니다. 솔루션은 운영 복잡성을 최소화해야 합니다.

어떤 솔루션이 이러한 요구 사항을 충족합니까?

---

​

A.

Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.

대상 S3 버킷에서 [[S3 Transfer Acceleration]]을 켭니다. 멀티파트 업로드를 사용하여 사이트 데이터를 대상 S3 버킷에 직접 업로드합니다.

​

B.

Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.

각 사이트의 데이터를 가장 가까운 리전의 S3 버킷에 업로드합니다. S3 교차 리전 복제를 사용하여 대상 S3 버킷에 객체를 복사합니다. 그런 다음 원본 S3 버킷에서 데이터를 제거합니다.

​

C.

Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.

[[AWS Snowball Edge]] Storage Optimized 디바이스 작업을 매일 예약하여 각 사이트에서 가장 가까운 리전으로 데이터를 전송합니다. S3 교차 리전 복제를 사용하여 대상 S3 버킷에 객체를 복사합니다.

​

D.

Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.

각 사이트의 데이터를 가장 가까운 리전의 Amazon EC2 인스턴스로 업로드합니다. [[Amazon Elastic Block Store]]([[Amazon Elastic Block Store|Amazon EBS]]) 볼륨에 데이터를 저장합니다. 정기적으로 EBS 스냅샷을 만들어 대상 S3 버킷이 포함된 리전에 복사합니다. 해당 리전에서 EBS 볼륨을 복원합니다.

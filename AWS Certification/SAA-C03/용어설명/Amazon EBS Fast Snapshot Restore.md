---
aliases:
  - FSR
---
[[Amazon Elastic Block Store|Amazon EBS]] FSR(빠른 스냅샷 복원)을 사용하면 생성 시 완전히 초기화되는 스냅샷에서 볼륨을 생성할 수 있다. 이렇게 하면 블록에 처음 액세스할 때 블록에 대한 I/O 작업의 대기 시간이 제거된다. 빠른 스냅샷 복원을 사용하여 생성된 볼륨은 프로비저닝된 모든 성능을 즉시 제공한다.

특정 가용 영역의 특정 스냅샷에 대한 빠른 스냅샷 복원을 활성화 하여 시작할 수 있다.

활성화된 가용 영역 중 하나에서 이러한 스냅샷 중 하나에서 볼륨을 생성하면 빠른 스냅샷 복원을 사용하여 볼륨이 복원된다.

---
### 참고자료
- [AWS DOC - Amazon EBS 빠른 스냅샷 복원](https://docs.aws.amazon.com/ko_kr/ebs/latest/userguide/ebs-fast-snapshot-restore.html)
- [[Amazon Elastic Block Store]]
- [[AWS Certification/SAA-C03/덤프/문제20/문제|문제20]]
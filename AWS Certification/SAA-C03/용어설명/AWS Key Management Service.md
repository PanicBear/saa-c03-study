---
aliases:
  - AWS KMS
---
Amazon S3는 AWS Key Management Service(AWS KMS)와 통합되어 Amazon S3 객체의 서버 측 암호화를 제공한다. Amazon S3는 AWS KMS 키를 사용하여 Amazon S3 객체를 암호화한다. 객체를 보호하는 암호화 키는 AWS KMS를 암호화되지 않은 상태로 두지 않는다. 또한 이 통합을 통해 AWS KMS 키에 대한 권한을 설정하고 비밀을 보호하는 데이터 키를 생성, 암호화 및 해독하는 작업을 감사할 수 있다.

→ AWS KMS는 다중 리전 키 를 지원한다. 이는 여러 리전에서 동일한 키를 가지고 있는 것처럼 서로 바꿔서 사용할 수 있는 서로 다른 AWS 리전의 AWS KMS 키이다. 각 관련 다중 리전 키 세트에는 동일한 키 구성 요소 와 키 ID 가 있으므로 AWS KMS를 다시 암호화하거나 리전 간 호출을 수행하지 않고도 한 AWS 리전에서 데이터를 암호화하고 다른 AWS 리전에서 해독할 수 있다.

다중 리전 키는 AWS 리전 간에 암호화된 데이터를 이동하거나 리전 간 액세스가 필요한 워크로드에 유연하고 확장 가능한 솔루션을 제공한다

리전 간에 보호된 데이터를 공유, 이동 또는 백업해야 하거나 다른 리전에서 작동하는 애플리케이션의 동일한 디지털 서명을 생성해야 하는 경우 다중 리전 키를 사용할 수 있다.

---
### 참고자료
- [AWS DOC - AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
- [[AWS Certification/SAA-C03/덤프/문제36/문제|문제36]]
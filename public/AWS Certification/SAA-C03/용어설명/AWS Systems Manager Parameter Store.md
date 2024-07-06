[[AWS Systems Manager]]의 기능인 Parameter Store는 구성 데이터 관리 및 암호 관리를 위한 안전한 계층적 스토리지를 제공한다. 암호, 데이터베이스 문자열, Amazon Machine Image(AMI) ID, 라이선스 코드와 같은 데이터를 파라미터 값으로 저장할 수 있다.

- 안전하고 확장 가능한 호스팅 방식 암호 관리 서비스를 사용한다(관리할 서버가 없음).
- 데이터를 코드와 격리하여 보안 태세를 개선한다.
- 구성 데이터 및 암호화된 문자열을 계층으로 저장하고 버전을 추적한다.
- 세분화된 수준에서 액세스를 제어하고 감사한다.
- Parameter Store는 AWS 리전의 여러 가용 영역에서 호스팅되기 때문에 파라미터를 안정적으로 저장한다.

Parameter Store는 Secrets Manager와도 통합되어 있습니다. 이미 Parameter Store 파라미터에 대한 참조를 지원하는 다른 AWS 서비스를 사용할 때 Secrets Manager 비밀을 검색할 수 있습니다.

---
### 참조
- [AWS DOC - AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
- [[AWS Systems Manager]]
- [[AWS Certification/SAA-C03/덤프/문제11/문제|문제11]]
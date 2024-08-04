---
aliases:
  - 배스천 호스트
---

침입 차단 소프트웨어가 설치되어 내부와 외부 네트워크 사이에서 일종의 게이트 역할을 수행하는 호스트.

기존 사용하던 PC에서 private subnet안의 서버에 들어오게되면 보안에 취약하므로 Bastion Host에서 private subnet으로 접속하는편이 더 안전하다.

​

**Bastion Host에서 SSH pem키 인증 방법**

기본적으로 개인 인스턴스 및 Bastion 서버의 SSH는 인증에 개인 키를 사용하도록 구성됩니다. 배스천 호스트 인스턴스에서 다른 케이스에 연결할 때 여전히 개인 키가 필요합니다.

---
### 참고자료
- [AWS Bastion Host](https://medium.com/@tejasmane485/aws-bastion-host-secure-remote-access-to-your-private-instances-7012a5a74fb3)
- [[AWS Certification/SAA-C03/덤프/문제37/문제|문제37]]
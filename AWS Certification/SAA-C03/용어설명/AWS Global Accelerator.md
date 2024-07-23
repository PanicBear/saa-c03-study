_AWS Global Accelerator는 로컬 및 글로벌 사용자를 위해 애플리케이션의 성능을 개선하기 위해 가속기를_ 만드는 서비스입니다 . 선택한 가속기 유형에 따라 다음과 같은 추가 혜택을 얻을 수 있습니다.

- 표준 가속기를 사용하면 글로벌 대상 고객이 사용하는 인터넷 애플리케이션의 가용성을 개선할 수 있습니다. 표준 가속기를 사용하면 Global Accelerator가 AWS 글로벌 네트워크를 통해 트래픽을 클라이언트에 가장 가까운 Region의 엔드포인트로 전달합니다.
- 사용자 정의 라우팅 가속기를 사용하면 한 명 이상의 사용자를 여러 대상지 중 특정 대상지에 매핑할 수 있습니다.
---

AWS Global Accelerator의 표준 액셀러레이터에 대한 엔드포인트는 Network Load Balancer, [[Application Load Balancer]], Amazon EC2 인스턴스 또는 Elastic IP 주소일 수 있습니다. 표준 액셀러레이터를 사용하면 고정 IP 주소가 클라이언트의 단일 접점 역할을 하고 Global Accelerator는 들어오는 트래픽을 정상적인 엔드포인트에 분산시킵니다. Global Accelerator는 끝점의 끝점 그룹이 속한 수신기에 대해 지정한 포트(또는 포트 범위)를 사용하여 끝점으로 트래픽을 보냅니다.

---
Global Accelerator는 게임(UDP), IoT(MQTT) 또는 VoIP와 같은 HTTP 외 사용 사례는 물론, 특별히 정적 IP 주소 또는 결정적 빠른 지역 장애 복구를 요구하는 HTTP 사용 사례에 적합하다.

두 서비스 모두 DDoS 공격을 막기 위해 AWS Shield와 통합되어 있다.

---
### 참조
- [AWS DOC - AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html)
- [[AWS Certification/SAA-C03/덤프/문제12/문제|문제12]]
- [[AWS Certification/SAA-C03/덤프/문제29/문제|문제29]]
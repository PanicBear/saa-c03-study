Network Address Translation / 네트워크 주소 변환

NAT 디바이스를 사용하여 프라이빗 서브넷의 리소스가 인터넷, 다른 VPC 또는 온프레미스 네트워크에 연결되도록 허용할 수 있습니다. 이러한 인스턴스는 VPC 외부의 서비스와 통신할 수 있지만 원치 않는 연결 요청은 받을 수는 없습니다.

예를 들면 인터넷 게이트웨이를 통해 프라이빗 서브넷의 EC2 인스턴스를 인터넷에 연결할 수 있는 퍼블릭 서브넷의 NAT 디바이스를 보여줍니다. NAT 디바이스는 인스턴스의 소스 IPv4 주소를 NAT 디바이스의 주소로 바꿉니다. 인스턴스에 응답 트래픽을 전송할 때 NAT 디바이스는 주소를 원래 소스 IPv4 주소로 다시 변환합니다.

---
### 참조
- [AWS DOC - # NAT 디바이스를 사용하여 인터넷 또는 다른 네트워크에 연결](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-nat.html)
- [나무위키 - NAT](https://namu.wiki/w/NAT#toc)
- [[게이트웨이 엔드포인트]]
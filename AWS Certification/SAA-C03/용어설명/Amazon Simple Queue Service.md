---
aliases:
  - Amazon SQS
---
Amazon Simple Queue Service(Amazon SQS)는 분산된 소프트웨어 시스템 및 구성 요소를 통합하고 분리할 수 있는 안전하고 내구성이 있으며 사용 가능한 호스트 대기열을 제공합니다. Amazon SQS는 데드레터 대기열 및 비용 할당 태그와 같은 일반적인 구성을 제공합니다. AWS SDK가 지원하는 모든 프로그래밍 언어를 사용하여 액세스할 수 있는 일반 웹 서비스 API를 제공합니다.

|   |   |
|---|---|
|**Amazon SQS FIFO / 표준 대기열의 차이 및 장단점** **​**|   |
|**Amazon SQS Standard Queue (표준 대기열)**|**FIFO 대기열 (First in First Out Queue)**|
|**장점**<br><br>- 무제한에 가까운 메시지 전송 지원 (최대 처리량), 제한이 없는 TPS<br>    <br>- 최소 1회 전달 보장 (At-Least-Once-Delivery), 단 중복 수신이 될 수 있다.<br>    <br>- Best-Effort-Ordering: 최대한 순서를 보장하고자 노력한다. (하지만 신뢰할 수 없다.)|**장점**<br><br>- 메시지 순서 보장 (First-In-First-Out Delivery)<br>    <br>- Exactly-Once Processing: 1번의 전송, 1번의 수신 지켜짐 (중복수신 방지)<br>    <br>- Limited Throughput: 초당 300TPS 제한 존재|
|**단점**<br><br>- 메시지 순서 보장 안됨<br>    <br>- 반드시 1번만 읽기 보장 안됨 (중복 읽기 가능성 존재)|**단점**<br><br>- 순서를 위해 느린 퍼포먼스 (초당 300TPS)|

---
### 참조
- [AWS DOC-Amazon Simple Queue Service](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
- [[Amazon Simple Notification Service|Amazon SNS]]
- [[AWS Certification/SAA-C03/덤프/문제10/문제|문제10]]
- [[AWS Certification/SAA-C03/덤프/문제7/문제|문제7]]
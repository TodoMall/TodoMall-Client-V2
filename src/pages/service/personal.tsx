import styled from '@emotion/styled';
import Header from 'src/components/global/Header';

export default function Personal() {
  const HTML = `
<pre
  style="
    white-space: pre-wrap;
    font-family: Pretendard;
    color: #808080;
    font-size: 13px;
  "
>
마이플랜잇은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

1. 이 개인정보처리방침은 2022년 9월 1부터 적용됩니다.
2. 마이플랜잇의 제공 서비스, 투두몰은 https://todomall-app.kr와 직접 연동되어 온라인에서 이용 가능한 서비스입니다.
3. 마이플랜잇은 개인정보 처리 방침을 제공 서비스, 투두몰(https://todomall-app.kr)과 투두몰 홈페이지(https://www.todomall.kr)에 모두 공개함으로써 회원이 쉽게 볼 수 있도록 조치하고 있습니다.
4. 마이플랜잇의 개인정보 처리방침 중 중요 사항이 변경되는 경우, 변경되는 개인정보 처리방침을 시행하기 전에 홈페이지 등을 통하여 이용자에게 공지합니다.


제1조 (개인정보의 처리 목적)

마이플랜잇은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
1. 회원 관리 : 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
2. 서비스 제공 및 개발 : 콘텐츠 및 서비스 제공, 맞춤 서비스 제공, 신규 콘텐츠 및 서비스 개발 등을 목적으로 개인정보를 처리합니다.
3. 마케팅/광고에의 활용 : 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 광고 게재 등을 목적으로 개인정보를 처리합니다.
4. 통계작성을 위한 가명정보 처리 : 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.


제2조 (개인정보의 처리 및 보유 기간)

(1) 마이플랜잇은 이용자가 회원자격을 유지하고 있는 동안 수집된 이용자의 개인정보를 보유, 이용할 수 있습니다.
(2) 이용자가 탈퇴하거나 자격을 상실할 경우에는 이용자의 별도 요청이 없더라도 수집된 회원정보를 삭제 및 파기합니다. 단, 이용자의 회원 탈퇴 또는 회원 자격 상실에도 불구하고 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존하며, 이용자의 처리 정지, 삭제 요구권의 대상이 되지 않습니다.
1. 통신 사실 확인자료 제공시 필요한 가입자의 전기통신 일시, 전기통신 개시 종료시간, 통신번호 등 상대방의 가입자번호, 사용초, 통신신망에 접속된 정보통신기기의 위치추적자료 : 12개월(통신비밀보호법)
2. 통신 사실 확인자료 제공시 필요한 로그 기록 자료, IP주소 등: 3개월(통신비밀보호법)
3. 표시/광고에 관한 기록 : 6개월 (전자상거래등에서의 소비자보호에 관한 법률)
4. 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
5. 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)
6. 거래에 관한 장부 및 증빙서류 : 5년 (국세기본법, 법인세법, 부가가치세법 등)


제3조 (처리하는 개인정보의 항목)

(1) 마이플랜잇은 다음의 개인정보 항목을 처리하고 있습니다.
1. 필수항목 : 프로필/닉네임, 이메일, 전화번호, 연령대, 성별
2. 선택항목 : 이름, 생년월일
(2) 마이플랜잇은 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않습니다.
(3) 마이플랜잇은 법령에 따라 동의 없이 수집할 수 있는 자동생성 정보(로그기록 등 서비스 계약 이행과정에서 자동적으로 생성되는 정보) 등을 필수 동의 사항에 기재된 목적범위 내에서 수집하여 이용할 수 있습니다.(고객이 개별적으로 선택 동의에도 동의할 경우 해당 목적으로도 수집하여 이용)
(4) 마이플랜잇은 수집한 개인정보를 개인을 알아볼 수 없는 통계자료 등으로 가공하여 이용 또는 제공할 수 있습니다.


제4조 (동의의 거부권 및 거부 시의 불이익 등)

(1) 이용자는 개인정보 수집, 이용에 관한 동의를 거부할 권리가 있습니다.
(2) 다만, 서비스 이용, 계약 체결 및 이행 등을 위해 필요한 최소한의 개인정보 수집ㆍ이용에 관한 동의를 거부하는 경우에는 서비스 이용이 불가능하거나 처리 업무가 지연되는 등의 불이익이 있을 수 있습니다.


제5조 (개인정보의 제3자 제공에 관한 사항)

(1) 마이플랜잇은 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
(2) 마이플랜잇은 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
1. 이용자가 제3자 제공에 사전 동의한 경우
2. 서비스 사용 및 제공에 따른 요금 정산을 위하여 필요한 경우
3. 통계 작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우


제6조 (개인정보처리의 위탁에 관한 사항)

(1) 마이플랜잇은 서비스 제공 계약 이행과 회원 편의 증진을 위해 아래와 같은 업무를 외부 업체에 위탁하고 있습니다.
1. Amazon Web Services Inc.
a. 위탁받는 자 (수탁자) : Amazon Web Services Inc.
b. 위탁하는 업무의 내용 : 서비스 제공을 위한 시스템 개발 및 운영, 데이터 처리 및 보관
2. Google, Meta
a. 위탁받는 자 (수탁자) : Google, Meta
b. 위탁하는 업무의 내용 : 이용자의 서비스 이용 및 통계 분석, 맞춤형 광고 제공
(2) 개인정보의 보유 및 이용 기간은 제2조(개인정보의 처리 및 보유 기간)에 의거합니다.


제7조 (개인정보의 파기절차 및 파기방법)

(1) 마이플랜잇은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 단, 관계법령에 따라 개인정보를 보존하여야 하는 경우에는 해당 기간 경과 후 지체없이 파기합니다.
(2) 개인정보의 보유기간이 경과한 경우에는 그 경과한 날로부터, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 된 경우에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 각 지체 없이(정당한 사유가 없는 한 영업일 기준 5일 이내) 해당 개인정보를 파기합니다. 상법 등 관련 법령의 규정에 의하여 다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 보유하여야 할 필요가 있을 경우에는 일정 기간 동안 회원 데이터를 보유합니다.
1. 고객에게 미리 고지하고, 개별 동의를 받은 경우: 동의한 내용에 따른 보유기간
2. 계약 또는 청약철회 등에 관한 기록: 5년
3. 대금 결제 및 재화 등의 공급에 관한 기록: 5년
4. 고객응대 및 불법적 이용자에 대한 관련 수사기관 협조에 관한 기록: 1년
(3) 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기절차 : 마이플랜잇은 파기 사유가 발생한 개인정보를 선정하고, 마이플랜잇의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
2. 파기방법 : 서면양식에 기재하거나 종이에 출력된 개인정보는 분쇄기로 분쇄 또는 소각하거나 화학약품 처리를 하여 용해하여 파기하고, 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.


제8조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)

(1) 정보주체는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 마이플랜잇에게 행사할 수 있습니다.
(2) 제1항에 따른 권리 행사는 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 마이플랜잇은 이에 대해 지체 없이 조치하겠습니다.
(3) 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
(4) 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
(5) 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
(6) 마이플랜잇은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.


제9조 (개인정보의 안전성 확보조치에 관한 사항)

마이플랜잇은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
1. 개인정보 취급 직원의 최소화 및 교육 : 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
2. 개인정보의 암호화 : 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
3. 개인정보에 대한 접근 제한 : 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.


제10조 (개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)

(1) 마이플랜잇은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
(2) “쿠키”란 회사의 플랫폼을 운영하는데 이용되는 서버가 웹 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자가 이용한 단말기에 저장됩니다. 그러나 이 정보는 반드시 이용자가 정보를 제공하였을 때만 저장되고, 플랫폼은 이용자가 제공하지 않은 정보를 얻을 수 없으며, 기기에 저장되어 있는 다른 파일에 접근할 수 없습니다.
(3) 쿠키의 사용 목적 및 쿠키 설정 거부 방법은 다음과 같습니다.
1. 쿠키의 사용 목적 : 이용자의 관심 분야에 따라 차별화된 정보를 제공, 서비스 개편 등의 척도로 활용, 맞춤형 광고를 제공하기 위해 사용합니다.
2. 쿠키의 설치•운영 및 거부 : 이용자는 쿠키 설치에 대한 선택권을 갖고 있습니다. 단, 쿠키 저장을 거부할 경우에 로그인이 필요한 일부 서비스 제공에 어려움이 발생할 수 있습니다.
가. Internet Explorer : 도구 > 인터넷 옵션 > 개인정보
나. Google Chrome : 설정 > 고급 설정 > 개인정보
(4) 이용자에게 맞춤형 광고를 제공하기 위하여 마이플랜잇은 웹 브라우저에서는 쿠키를 수집해 사용합니다. 다음과 같은 온라인 맞춤형 광고 사업자가 광고식별자 및 행태정보를 수집하도록 허용하고 있습니다.
1. 행태정보를 수집, 처리하는 광고 사업자: Google, Meta
2. 행태정보 수집 방법: 이용자가 서비스를 실행할 때 자동 수집 및 전송


제11조 (개인정보 보호책임자에 관한 사항)

(1) 마이플랜잇은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
1. 개인정보 보호책임자 : 이명성 CPO / myplanit.unicorn@gmail.com
(2) 정보 주체께서는 마이플랜잇의 서비스, 투두몰을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 마이플랜잇은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.


제12조 (정보주체의 권익침해에 대한 구제방법)

(1) 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
(2) 「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.


제13조 (개인정보 처리방침의 고지 또는 통지 방법)

(1) 마이플랜잇은 개인정보 수집 시 고지한 범위 또는 서비스 이용약관, 본 개인정보처리방침에 명시한 범위를 넘어 고객의 개인정보를 이용하거나 제 3 자에게 제공하기 위해, 고객의 동의를 얻고자 하는 때에는 미리 고객에게 개별적으로 서면, 전자우편, 전화 등으로 해당사항을 고지합니다.
(2) 마이플랜잇은 영업의 전부 또는 일부를 양도하거나 합병ㆍ상속 등으로 그 권리ㆍ의무를 이전하는 경우 서면ㆍ전자우편 등을 통하여 고객에게 개별적으로 통지함과 동시에 홈페이지 첫 화면에서 식별할 수 있도록 표기하여 30일 이상 그 사실을 공지합니다. 다만, 서면ㆍ전자우편 기타의 방법에 의한 통지는 과실 없이 고객의 연락처를 알지 못하거나 천재ㆍ지변 기타 통지할 수 없는 정당한 이유가 있는 경우에는 2곳 이상의 중앙일간지(고객의 대부분이 특정 지역에 거주하는 경우에는 그 지역을 보급구역으로 하는 일간지로 할 수 있습니다)에 1회 이상 공고하는 것으로 갈음합니다.
(3) 만 14세 미만 아동의 개인정보 수집ㆍ이용 또는 제3자에게 제공하기 위하여 법정대리인의 동의를 받고자 하는 경우에는 전화, 팩스. 우편, 아동으로 하여금 통지내용을 법정대리인에게 제출하게 하는 방법, 법정대리인에게 전자우편을 보내면서 홈페이지의 개인정보처리방침을 볼 수 있도록 연결(하이퍼링크)시키는 방법 또는 기타 법정대리인에게 고지내용이 도달할 수 있는 합리적인 방법을 통하여 법정대리인에게 고지합니다.


제14조 (개인정보 처리방침의 개정 및 고지)

이 개인정보처리방침은 2022년 9월 1부터 적용됩니다.


공고일 : 2022년 9월 1일</pre
>`;
  return (
    <>
      <Header title="개인정보 처리방침" />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}

const HTMLDiv = styled.div`
  padding: 60px 20px;
`;

import styled from '@emotion/styled';
import Header from '@src/components/global/Header';
import React from 'react';

export const getStaticProps = async () => {
  const data = `
  <pre
  style="
  white-space: pre-wrap;
  font-family: Pretendard;
  color: #808080;
  font-size: 13px;
  "
  >
  제 1장. 총칙
  제 1조 (목적)
  투두몰 서비스 약관(이하 “본 약관”)은 주식회사 마이플랜잇이 제공하는 서비스(이하 “투두몰”)를 이용함에 있어 회원과 회사 간의 권리, 의무, 책임사항 및 회원의 서비스 이용절차 등에 관한 사항을 규정함을 목적으로 합니다.
  제 2조 (정의)
  (1) 본 약관의 용어 정의는 다음 각 호와 같습니다.
  1. 회사 : “마이플랜잇”을 의미하며, “투두몰"을 운영하는 사업자로도 사용합니다.
  2. 서비스 : “투두몰”에서 제공하거나, “투두몰”과 직접 연동되어 제공되는 서비스를 의미합니다.
  3. 콘텐츠 : “마이플랜잇"이 “투두몰"을 통해 “회원”에게 제공하는 디지털 콘텐츠를 의미합니다.
  4. 게시물 : “회원"이 “투두몰"에 등록하는 이미지 콘텐츠를 의미합니다.
  5. 회원 : “투두몰”의 회원가입절차를 거친 후, “투두몰”이 제공하는 서비스를 이용하는 자를 의미합니다.
  6. 회원ID : 회원의 식별과 서비스 이용을 위하여 회원이 신청하고, 회사가 승인한 개인식별정보를 의미합니다.
  7. 비밀번호 : 회원이 부여 받은 회원ID와 일치된 회원임을 확인하고 자신의 비밀 보호를 위해 회원이 설정한 영문 또는 숫자, 특수문자의 조합을 의미합니다.
  (2) 제 1항에서 정의되지 않은 용어의 의미는 관련 법령 및 일반적인 거래관행을 따릅니다.
  제 3조 (약관의 명시, 효력 및 변경)
  (1) 본 약관은 모든 회원에 대하여 그 효력이 발생합니다.
  (2) 회사는 정의된 약관을 회원이 알 수 있도록 투두몰의 약관 화면에 게시합니다.
  (3) 회사는 합리적인 사유가 발생하면 약관의 규제에 관한 법률에 위배되지 않는 범위 안에서 이 약관을 변경 할 수 있으며, 회사가 약관을 변경할 때에는 적용일자와 변경사유를 밝혀 그 적용일자 7일 전부터 투두몰에서 공지합니다. 다만, 회원에게 불리한 약관을 변경할 때에는 해당 내용을 그 적용일자 30일 전부터 공지합니다. 이 경우, 개정 전 내용과 개정 후 내용을 명확히 비교해 회원이 알기 쉽도록 표시합니다.
  (4) 회사가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 회원이 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 회사에 송신하여 회사의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
  (5) 이 약관에 동의하는 것은 정기적으로 회사가 운영하는 투두몰을 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원의 피해에 대해 회사는 책임을 지지 않습니다.
  (6) 변경된 약관에 동의하지 않는 회원은 회원 탈퇴를 요청할 수 있으며, 회사가 제3항에 따라 회원에게 약관 변경 적용일까지 거부의사를 표시하지 않으면, 회사는 회원이 변경된 약관에 동의한 것으로 간주합니다.
  제 4조 (약관 외 준칙)
  (1) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래등에서의소비자보호에관한법률, 약관의규제등에관한법률, 공정거래위원회가 정하는 전자상거래등에서의소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
  (2) 회사는 필요하면 특정 서비스에 적용될 사항(이하 “개별약관”)을 정하여 이를 투두몰을 통하여 공지할 수 있습니다.
  (3) 회사는 필요하면 서비스 이용과 관련된 세부적인 내용(이하 “이용정책”)을 정하여 이를 투두몰을 통하여 공지할 수 있습니다.
  (4) 개별약관이나 이용정책의 변경이 있으면 회사는 변경 내용의 효력발생일 7일 이전에 투두몰을 통하여 해당 변경 사항을 공지합니다.
  제 2장. 회원 관리
  제 5조 (회원가입)
  (1) 서비스를 이용하고자 하는 자는 회사가 정한 회원가입 신청 양식에 따라 회원정보를 기입한 후, 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. 회원가입 신청 양식은 필수 기재 항목과 선택 기재 항목으로 구분 되어 있으며 필수 기재 항목은 반드시 입력해야 합니다.
  (2) 회사는 모든 회원에게 광고성 이메일(E-mail) 수신여부, 광고성 문자메시지(SMS) 수신여부, 개인정보처리방침 동의 여부를 확인할 수 있습니다.
  (3) 회사는 제1항과 같이 회원가입 신청 양식을 제출한 자 중 다음 각호의 사유에 해당하지 아니한 자를 회원으로 등록합니다. 
  1. 본인확인절차에서 본인이 아님이 확인된 경우
  2. 이미 가입된 회원
  3. 신청, 등록 내용에 허위, 기재누락, 오기 등이 있는 경우
  4. 기타 이 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우
  5. 투두몰 이용약관의 적용을 받는 자가 해당 약관을 위반한 경우
  6. 사회의 안녕질서 또는 미풍양속을 저해하거나, 저해할 목적으로 신청한 경우
  (4) 제3항의 각호의 사유에 해당하는 자는 회원가입의 승낙을 거부할 수 있습니다.
  (5) 회원가입의 성립시기는 회사의 회원가입 승낙이 해당 서비스화면에 게시된 시점으로 합니다.
  제 6조 (회원 탈퇴 및 자격 상실 등)
  (1) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며, 회사는 요청을 받은 즉시 회원탈퇴를 처리합니다.
  (2) 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을 일정 기간 동안 제한 및 정지시킬 수 있습니다. 이 경우 회원에게 사유와 기간을 통지합니다.
  1. 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
  2. 서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
  (3) 회사가 회원 자격을 제한, 정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.
  (4) 회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 사유와 함께 통지합니다.
  (5) 회원자격의 제한, 정지 및 상실과 관련해 발생한 손해에 대해서는 자신의 귀책사유로 자격에 변동이 일어난 당해 회원이 책임을 져야 하고, 회사는 귀책사유가 없는 한 책임을 지지 않습니다.
  제 7조 (회원 관리)
  (1) 회사가 회원에게 통지를 하는 경우, 회원이 회원가입 시 지정한 전자 우편 주소로 할 수 있습니다.
  (2) 회사가 불특정 다수 회원에게 통지를 하는 경우 경우, 1주일 이상 공지사항에 게시함으로써 개별 통지를 대신 할 수 있습니다. 다만, 회원 본인과 관련해 중대한 영향을 미치는 사항애 대하여 개별통지를 합니다.
  (3) 회사는 회원이 1년 이상 로그인 하지 않으면, 휴면계정으로 간주하고 회사가 제공하는 서비스 이용을 제한할 수 있습니다. 휴면계정으로 지정된 이후 다시 서비스를 이용하려면 거래안전을 위해 회사가 정하는 본인확인 절차 등을 이행하여야 합니다.
  제 3장 회사의 서비스
  제 8조 (서비스의 제공 및 변경)
  (1) 회원은 회원 자격이 유지되는 기간 동안 서비스를 이용할 수 있습니다.
  (2) 회사가 회원에게 제공하는 서비스는 다음과 같습니다.
  1. 콘텐츠 다운로드, 실행, 관리를 위한 기능 제공
  2. 게시물 등록, 관리를 위한 기능
  3. 기타 회사가 정하는 업무
  (3) 회사는 변경될 서비스의 내용 및 제공일자를 회원에게 통지하고 서비스를 변경하여 제공할 수 있습니다. 이 경우에 변경된 서비스의 내용 및 제공일자를 명시하여, 현재의 서비스 내용을 게시한 곳에 즉시 공지합니다.
  제 9조 (서비스의 중단)
  (1) 회사는 컴퓨터 등 정보통신설비의 보수, 점검, 교체 및 고장, 통신의 두절 등의 사유가 발생하면 서비스를 일시적으로 중단할 수 있습니다. 
  (2) 회사는 제1항의 사유에 의해 회원 또는 제3자가 입은 손해에 대해 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
  (3) 회사는 다음과 같은 불가항력으로 서비스를 제공할 수 없으면 서비스의 제공을 제한하거나 일시 중단할 수 있습니다. 이러한 경우, 회원 또는 제3자에게 손해가 발생했더라도 책임을 부담하지 않습니다.
  1 서비스용 설비의 보수 등 공사로 인한 부득이한 경우
  2. 회원이 회사의 영업활동을 방해하는 경우
  3. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
  4. 서비스 제공업자와의 계약 종료 등과 같은 회사의 제반 사정으로 서비스를 유지할 수 없는 경우
  5. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우
  (4) 제9조제1항과 제9조제3항의 사유로 서비스가 일시 중단될 경우, 서비스 일시 중단 사실과 그 사유를 제7조에서 정한 방법으로 통지합니다.
  제 10조 (서비스 이용료)
  (1) 회사는 투두몰의 일부 콘텐츠를 제공할 때, 이용료를 부과할 수 있습니다
  (2) 제10조 제1항의 이용료는 본 조 및 개별 약관 또는 별도 신청서에서 정하는 바를 따릅니다.
  제 4장 회사와 회원의 의무
  제 11조 (회사의 의무)
  (1) 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 서비스를 제공하는데 최선을 다하여야 합니다.
  (2) 회사는 서비스 제공과 관련하여 취득한 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다.
  (3) 회사는 서비스와 관련한 회원의 불만사항이 접수되는 경우 이를 신속하게 처리하여야 하며, 신속한 처리가 곤란한 경우 그 사유와 처리 일정을 제7조에서 정한 방법으로 통지합니다.
  (4) 회사는 회원의 개인정보를 특정 개인을 알아볼 수 없는 형태로 가공하여 통계자료로 사용할 수 있고, 이를 위하여 회원의 컴퓨터에 쿠키를 전송할 수 있습니다. 이 경우 회원은 쿠키의 수신을 거부하거나 쿠키의 수신에 대하여 경고하도록 사용하는 컴퓨터의 브라우저의 설정을 변경할 수 있으며, 쿠키의 설정 변경에 의해 서비스 이용이 변경되는 것은 회원의 책임입니다.
  (5) 회사가 제공하는 서비스로 인하여 회원에게 손해가 발생한 경우, 그러한 손해가 회사의 고의나 중과실에 기해 발생한 경우에 한하여 회사에서 책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다.
  (6) 회사는 정보통신망 이용촉진 및 정보보호에 관한 법률, 통신비밀보호법, 전기통신사업법 등 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.
  제 12조 (회원의 의무)
  (1) 회원은 서비스를 이용할 때, 다음 각 호의 행위를 하여서는 아니 됩니다.
  1. 회원가입 신청 또는 회원 정보 변경 시, 허위 내용의 등록
  2. 타인의 정보 도용
  3. 회사의 서비스 및 콘텐츠 정보를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위
  4. 타인의 명예를 손상시키거나 불이익을 주는 행위
  5. 회사 또는 제3자의 저작권 등 기타 권리를 침해하는 행위
  6. 기타 불법적이거나 부당한 행위
  (2) 회원은 관계 법령, 본 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 아니 됩니다.
  (3) 회원은 제12조제1항에 명시된 행위를 한 경우, 회사는 제6조에 의해 회원의 서비스 이용을 제한 또는 중지 할 수 있습니다.
  제 13조 (회원 ID와 비밀번호 관리에 대한 의무와 책임)
  (1) 제14조의 경우를 제외한 회원 ID 및 비밀번호 관리 책임은 회원에게 있습니다.
  (2) 회원은 본인의 회원 ID 및 비밀번호를 제3자에게 이용하게 해서는 안되며, 회원 본인의 회원 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지하는 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우 그에 따라야 합니다.
  (3) 회사는 회원의 ID와 비밀번호의 도용으로 인한 피해를 방지하기 위하여, 사이트에 1년 이상 로그인(log-in)한 기록이 없는 ID를 휴면 ID로 정하며, 휴면 ID에 대하여 회원 휴면해제절차를 수행한 후 서비스를 이용하도록 로그인(log-in)을 제한할 수 있습니다.
  제 14조 (개인정보보호)
  (1) 회사는 회원의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 해당 회원의 동의를 받습니다.
  (2) 제공된 개인정보는 해당 회원의 동의 없이 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 회사가 집니다. 다만, 다음의 경우는 예외로 합니다.
  1. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우
  2. 재화 등의 거래에 따른 대금정산을 위하여 필요한 경우
  3. 도용방지를 위하여 본인확인에 필요한 경우
  4. 법률의 규정 또는 법률에 의하여 필요한 불가피한 사유가 있는 경우
  (3) 회사가 제14조제2항과 제14조제3항에 의해 회원의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원, 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항 등 정보통신망이용촉진등에관한법률 제12조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며, 회원는 언제든지 이 동의를 철회할 수 있습니다.
  (4) 회원은 언제든지 회사가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 회사는  이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 
  (5) 회사는 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
  (6) 회사 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.
  제 15조 (개인정보의 위탁)
  회사는 수집된 개인정보의 처리 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나, 필요한 경우 당해 업무의 일부 또는 전부를 회사가 선정한 회사에 위탁할 수 있습니다. 개인정보의 위탁에 관한 사항은 관련법령 및 회사가 정하는 개인정보처리방침에 정한 바에 따릅니다.
  제 5장 저작권, 콘텐츠와 게시물
  제 16조 (저작권의 귀속 및 이용 제한)
  (1) 회원은 회사의 저작권 정책을 지켜야 합니다.
  (2) 회사가 서비스에서 제공하는 콘텐츠에 대한 저작권과 지적 재산권은 회사에 귀속합니다. 회사에서 제공하는 콘텐츠를 회사의 사전 허락 없이 복제, 전송, 기타의 방법으로 다른 사이트, 블로그, SNS 등에 게재하는 경우 그 작성자 및 이를 방치한 온라인서비스제공자는 저작권법 위반에 따른 책임을 부담할 수 있습니다. 
  (3) 회원은 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
  (4) 회사는 회원이 작성한 게시물을 플랜어스의 마케팅 목적으로 수정, 재가공, 배포 할 수 있습니다. 단, 이 경우 게시물 작성자의 ID와 닉네임을 표시함으로써 저작권이 작성자에게 있음을 표시합니다. 
  제 17조(자료의 보관)
  (1) 회원이 서비스를 이용하며 축적한 게시물의 책임은 회원에게 있으며, 무료 서비스의 장애, 제공 중단, 자료 멸실, 삭제, 변조 등으로 인한 손해에 대해서 회사는 원상 복구에 최선을 다할 의무만을 지닙니다.
  (2) 회원이 탈퇴를 하거나, 제6조에 의거해 회원 자격을 상실할 경우, 회원의 게시물은 모두 삭제되며 삭제된 자료는 복구할 수 없습니다.
  제 6장 기타사항
  제 18조(분쟁해결)
  (1) 회사는 회원으로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
  (2) 회사와 회원간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
  제 19조 (손해배상)
  (1) 회원이 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 본 약관을 위반한 회원은 회사에 발생하는 모든 손해를 배상하여야 합니다.
  (2) 회원이 서비스를 이용함에 있어 행한 불법행위나 본 약관 위반행위로 인하여 회사가 당해 회원 이외의 제3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 회원은 자신의 책임과 비용으로 회사를 면책시켜야 하며, 당해 회원은 그로 인하여 회사에 발생한 모든 손해를 배상하여야 합니다.
  제 20조 (회사의 면책)
  (1) 회사는 회원의 귀책사유로 서비스 이용에 장애가 발생한 것에 대해 책임을 지지 않습니다.
  (2) 회원이 자신의 개인정보를 타인에게 유출하거나 제공하여 발생하는 피해에 대해 회사는 일절 책임을 지지 않습니다.
  제 21조 (준거법 및 관할법원)
  (1) 이 서비스와 관련하여 회사와 회원 사이에 분쟁이 발생하여 소송이 제기되었을 때에는 민사소송법에 따라 관할법원을 정합니다.
  (2) 이 약관과 회사와 회원 간의 전자상거래 소송에는 대한민국 법령이 적용됩니다.
  제 22조 (기타 조항)
  (1) 이 약관에 명시하지 않은 사항은 관련법령과 회사의 규정 및 기타 상관례에 따릅니다.
  (2) 회사는 필요하면 특정 서비스나 기능의 전부 또는 일부를 제7조의 방법으로 공지한 후, 일시적 또는 영구적으로 수정하거나 중단할 수 있습니다.
  (3) 각 당사자는 상대방의 서면 동의 없이 이 약관상의 권리와 의무를 제3자에게 양도하거나 처분할 수 없습니다.
  (4) 이 약관과 관련하여 당사자 간의 합의에 따라 추가로 작성된 계약서, 협정서, 통보서 등과 회사의 정책변경, 법령의 제·개정 또는 공공기관의 고시나 지침 등에 따라 회사가 서비스에서 공지하는 내용도 이용계약의 일부를 구성합니다.
  부칙
  이 약관은 2022년 9월 1일부터 시행합니다.
  공고일 : 2022년 9월 1일
  </pre>`;

  return {
    props: {
      html: data,
    },
  };
};

const Personal = ({ html }: { html: string }) => {
  return (
    <Container>
      <Header text="개인정보 처리방침" isBack />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const HTMLDiv = styled.div`
  padding: 3rem 1.2rem;
`;
export default Personal;

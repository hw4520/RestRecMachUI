import React from 'react';

const TableComponent = () => {
  // 테이블 구성 및 데이터 처리 로직을 작성합니다.

  return (
    // 테이블 컴포넌트의 JSX 코드를 작성합니다.
    <div>
      {
        <table>
            <tr>
                <th>번호</th>
                <th>상호명</th>
                <th>주소</th>
                <th>연락처</th>
            </tr>
        </table>
      }
    </div>
  );
};

export default TableComponent;
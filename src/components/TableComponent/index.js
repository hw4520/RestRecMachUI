import { useState } from "react";

const TableComponent = () => {
  // 테이블 데이터 상태 관리
  const [tableData, setTableData] = useState([]);

  // 테이블 데이터 가져오기
  const fetchTableData = () => {
    // 샘플 데이터
    const sampleData = [
      { name: "맛집1", address: "주소1", phone: "전화번호1" },
      { name: "맛집2", address: "주소2", phone: "전화번호2" },
      { name: "맛집3", address: "주소3", phone: "전화번호3" },
    ];

    setTableData(sampleData);
  };

  // 테이블 컨텐츠 JSX
  const tableContent = (
    <table>
      <thead>
        <tr>
          <th>가게명</th>
          <th>주소</th>
          <th>전화번호</th>
        </tr>
      </thead>
      <tbody>
        {/* 테이블 데이터를 기반으로 동적으로 행을 생성 */}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>{row.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div>
      {tableContent}
    </div>
  );
};

export default TableComponent;
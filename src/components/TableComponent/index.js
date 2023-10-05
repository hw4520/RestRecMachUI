import { useState, useEffect } from "react";

const TableComponent = () => {
  // 테이블 데이터 상태 관리
  const [tableData, setTableData] = useState([]);

  // 테이블 데이터 가져오기
  const fetchTableData = () => {
    // 샘플 데이터
    const sampleData = [
      { id: 1, name: "맛집1", address: "주소1", phone: "전화번호1" },
      { id: 2, name: "맛집2", address: "주소2", phone: "전화번호2" },
      { id: 3, name: "맛집3", address: "주소3", phone: "전화번호3" },
    ];

    setTableData(sampleData);
  };

  // 컴포넌트가 마운트되었을 때 데이터를 가져오도록 useEffect 사용
  useEffect(() => {
    fetchTableData();
  }, []);

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
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>{row.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // 메인으로 가는 버튼 클릭 핸들러
  const handleGoBack = () => {
    window.location.reload();
  };

  return (
    <div>
      {tableContent}
      {/* 메인으로 가는 버튼 JSX */}
      <button type="button" onClick={handleGoBack}>
        메인으로 가기
      </button>
    </div>
  );
};

export default TableComponent;

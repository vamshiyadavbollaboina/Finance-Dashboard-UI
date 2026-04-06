import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  color: ${(props) => (props.darkMode ? "#f1f5f9" : "#1e293b")};
  box-shadow: ${(props) => 
    props.darkMode ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.05)"};
  width: 97%;
  margin: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#1e293b")};
`;

export const SortButton = styled.button`
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  color: ${(props) => (props.darkMode ? "#cbd5e1" : "#64748b")};
  &:hover { background: ${(props) => (props.darkMode ? "#475569" : "#e2e8f0")}; }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${(props) => (props.darkMode ? "#121212" : "#f8fafc")};
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#e2e8f0")};
  width: 100%;
  max-width: 320px;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  color: ${(props) => (props.darkMode ? "#f1f5f9" : "#1e293b")};
  &::placeholder {
    color: ${(props) => (props.darkMode ? "#64748b" : "#94a3b8")};
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.darkMode ? "#334155" : "#cbd5e1")};
    border-radius: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  min-width: 750px;
`;

export const Th = styled.th`
  padding: 16px 15px;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#64748b")};
  border-bottom: 1px solid ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
`;

export const Row = styled.tr`
  border-bottom: 1px solid ${(props) => (props.darkMode ? "rgba(255,255,255,0.05)" : "#f8fafc")};
  &:hover {
    background: ${(props) => (props.darkMode ? "rgba(255,255,255,0.02)" : "#f1f5f9")};
  }
`;

export const Td = styled.td`
  padding: 18px 15px;
  font-size: 14px;
  vertical-align: middle;
  color: ${(props) => (props.darkMode ? "#e2e8f0" : "#475569")};
  text-align: ${(props) => props.align || "left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Amount = styled(Td)`
  font-weight: 700;
  color: ${(props) => (props.type === "income" 
    ? (props.darkMode ? "#4ade80" : "#10b981") 
    : (props.darkMode ? "#fb7185" : "#ef4444"))};
`;

export const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  background: ${(props) =>
    props.type === "income" 
      ? (props.darkMode ? "rgba(74, 222, 128, 0.15)" : "rgba(16, 185, 129, 0.1)") 
      : (props.darkMode ? "rgba(251, 113, 133, 0.15)" : "rgba(239, 68, 68, 0.1)")};
  color: ${(props) => (props.type === "income" 
    ? (props.darkMode ? "#4ade80" : "#10b981") 
    : (props.darkMode ? "#fb7185" : "#ef4444"))};
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  min-width: 80px;
  text-align: center;
`;

export const DeleteButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: #ef4444;
  font-size: 16px;
  display: inline-flex;
  opacity: 0.6;
  transition: all 0.2s;
  &:hover { opacity: 1; transform: scale(1.2); }
`;


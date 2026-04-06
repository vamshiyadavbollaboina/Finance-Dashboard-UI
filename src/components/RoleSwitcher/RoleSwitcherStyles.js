import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  color: ${(props) => (props.darkMode ? "#f1f5f9" : "#1e293b")};
  border-bottom: 1px solid ${(props) => (props.darkMode ? "#334155" : "#e2e8f0")};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const LogoIcon = styled.div`
  background: #00b894;
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 800;
  font-size: 18px;
  box-shadow: 0 4px 10px rgba(0, 184, 148, 0.3);
`;

export const LogoText = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${(props) => (props.darkMode ? "#fff" : "#1e293b")};

  span {
    color: #00b894;
  }

  @media (max-width: 400px) {
    display: none; 
`;

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${(props) => (props.darkMode ? "#2d3748" : "#f8fafc")};
  padding: 4px 10px;
  border-radius: 10px;
  color: #00b894;
  font-size: 18px;
`;

export const RoleSelect = styled.select`
  padding: 6px 8px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: ${(props) => (props.darkMode ? "#cbd5e1" : "#475569")};

  option {
    background: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
    color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const ThemeButton = styled.button`
  border: none;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  background: ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  color: ${(props) => (props.darkMode ? "#facc15" : "#64748b")};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => (props.darkMode ? "#475569" : "#e2e8f0")};
  }
`;

export const ExportGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s;
  
  background: ${(props) =>
    props.type === "csv" ? "rgba(0, 184, 148, 0.15)" : "rgba(9, 132, 227, 0.15)"};
  color: ${(props) =>
    props.type === "csv" ? "#00b894" : "#0984e3"};

  &:hover {
    background: ${(props) =>
      props.type === "csv" ? "#00b894" : "#0984e3"};
    color: #fff;
    transform: translateY(-1px);
  }

  span {
    @media (max-width: 600px) {
      display: none; 
    }
  }
`;
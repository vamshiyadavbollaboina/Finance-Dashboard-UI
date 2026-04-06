import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 97%;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#1e293b")};
`;

export const Subtitle = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#64748b")};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 16px;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  box-shadow: ${(props) => 
    props.darkMode ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.05)"};
`;

export const IconWrap = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;

  background: ${(props) => {
    if (props.index === 1) return props.darkMode ? "rgba(74, 222, 128, 0.1)" : "#ecfdf5";
    if (props.index === 2) return props.darkMode ? "rgba(251, 113, 133, 0.1)" : "#fef2f2";
    if (props.index === 3) return props.darkMode ? "rgba(245, 158, 11, 0.1)" : "#fffbeb";
    return props.darkMode ? "rgba(99, 102, 241, 0.1)" : "#eef2ff";
  }};

  color: ${(props) => {
    if (props.index === 1) return props.darkMode ? "#4ade80" : "#10b981";
    if (props.index === 2) return props.darkMode ? "#fb7185" : "#ef4444";
    if (props.index === 3) return "#f59e0b";
    return "#6366f1";
  }};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#64748b")};
`;

export const Value = styled.p`
  margin: 2px 0 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#f8fafc" : "#1e293b")};
`;
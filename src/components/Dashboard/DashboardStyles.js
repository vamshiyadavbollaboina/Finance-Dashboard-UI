import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  width: 97%;
  color: ${(props) => (props.darkMode ? "#f8fafc" : "#1e293b")};
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #64748b;
  background: rgba(100, 116, 139, 0.05);
  border-radius: 20px;
  margin: 40px;
  border: 2px dashed #cbd5e1;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 20px;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 8px;
`;

export const Amount = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${(props) => (props.darkMode ? "#f8fafc" : "#1e293b")};
  transition: color 0.3s ease;
`;

export const Icon = styled.div`
  font-size: 28px;
  padding: 12px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${Card}:nth-child(1) & { color: #6366f1; background: rgba(99, 102, 241, 0.1); }
  ${Card}:nth-child(2) & { color: #10b981; background: rgba(16, 185, 129, 0.1); }
  ${Card}:nth-child(3) & { color: #ef4444; background: rgba(239, 68, 68, 0.1); }
`;

export const ChartsLayout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartBox = styled.div`
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  padding: 24px;
  border-radius: 24px;
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
`;

export const ChartTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#cbd5e1" : "#1e293b")};
`;

export const CanvasWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;
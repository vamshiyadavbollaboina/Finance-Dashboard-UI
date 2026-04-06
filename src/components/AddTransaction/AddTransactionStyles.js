import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  border-radius: 20px;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  color: ${(props) => (props.darkMode ? "#f1f5f9" : "#1e293b")};
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#f1f5f9")};
  box-shadow: ${(props) => 
    props.darkMode ? "0 10px 30px rgba(0,0,0,0.5)" : "0 10px 30px rgba(0,0,0,0.05)"};
  transition: all 0.3s ease;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
  color: #00b894;
  font-size: 24px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#1e293b")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => (props.darkMode ? "#94a3b8" : "#64748b")};
`;

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.2s;
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#e2e8f0")};
  background: ${(props) => (props.darkMode ? "#0f172a" : "#f8fafc")};
  color: ${(props) => (props.darkMode ? "#f8fafc" : "#1e293b")};

  &:focus {
    outline: none;
    border-color: #00b894;
    box-shadow: 0 0 0 3px rgba(0, 184, 148, 0.1);
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.darkMode ? "#334155" : "#e2e8f0")};
  background: ${(props) => (props.darkMode ? "#0f172a" : "#f8fafc")};
  color: ${(props) => (props.darkMode ? "#f8fafc" : "#1e293b")};

  &:focus {
    outline: none;
    border-color: #00b894;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.2s;
  background: #00b894; 
  color: #fff;

  &:hover {
    background: #00a383;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 184, 148, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
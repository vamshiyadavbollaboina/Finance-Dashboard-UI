import AppContext from "../../context/AppContext";
import { FaMoon, FaSun, FaFileCsv, FaFileCode, FaUserShield, FaEye } from "react-icons/fa";
import {
  Header, Left, LogoSection, LogoIcon, LogoText, RoleContainer,
  RoleSelect, Right, ThemeButton, ExportGroup, ExportButton
} from "./RoleSwitcherStyles";

const RoleSwitcher = () => {
  return (
    <AppContext.Consumer>
      {(value) => {
        const { transactions, role, setRole, darkMode, setDarkMode } = value;

        const triggerDownload = (content, fileName) => {
          const link = document.createElement("a");
          link.href = content;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        const handleExportCSV = () => {
          const headers = "Date,Category,Amount,Type\n";
          const rows = transactions.map(t => 
            `${t.date},${t.category},${t.amount},${t.type}`
          ).join("\n");
          
          const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(headers + rows);
          triggerDownload(csvContent, "finance_report.csv");
        };

        const handleExportJSON = () => {
          const jsonContent = "data:text/json;charset=utf-8," + 
            encodeURIComponent(JSON.stringify(transactions, null, 2));
          triggerDownload(jsonContent, "finance_report.json");
        };

        return (
          <Header darkMode={darkMode}>
            <Left>
              <LogoSection>
                <LogoIcon>₹</LogoIcon>
                <LogoText darkMode={darkMode}>
                  Finance<span>Pro</span>
                </LogoText>
              </LogoSection>

              <RoleContainer darkMode={darkMode}>
                {role === "admin" ? <FaUserShield /> : <FaEye />}
                <RoleSelect
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  darkMode={darkMode}
                >
                  <option value="admin">Admin</option>
                  <option value="viewer">Viewer</option>
                </RoleSelect>
              </RoleContainer>
            </Left>

            <Right>
              <ThemeButton onClick={() => setDarkMode(!darkMode)} darkMode={darkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </ThemeButton>

              <ExportGroup>
                <ExportButton type="csv" onClick={handleExportCSV}>
                  <FaFileCsv size={16} />
                  <span>CSV</span>
                </ExportButton>

                <ExportButton type="json" onClick={handleExportJSON}>
                  <FaFileCode size={16} />
                  <span>JSON</span>
                </ExportButton>
              </ExportGroup>
            </Right>
          </Header>
        );
      }}
    </AppContext.Consumer>
  );
};

export default RoleSwitcher;
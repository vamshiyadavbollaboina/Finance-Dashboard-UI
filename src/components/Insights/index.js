import AppContext from "../../context/AppContext";
import { FaArrowUp, FaArrowDown, FaCrown, FaPercent } from "react-icons/fa";
import {
  Container, Header, Title, Subtitle, Grid,
  Card, IconWrap, Content, CardTitle, Value
} from "./InsightsStyles";

const Insights = () => (
  <AppContext.Consumer>
    {(value) => {
      const { transactions, darkMode } = value;

      const expenses = transactions.filter(t => t.type === "expense");
      const income = transactions.filter(t => t.type === "income");

      const totalExpenses = expenses.reduce((a, t) => a + t.amount, 0);
      const totalIncome = income.reduce((a, t) => a + t.amount, 0);

      const peak = expenses.length
        ? expenses.reduce((max, t) => t.amount > max.amount ? t : max)
        : { category: "None", amount: 0 };

      const ratio = totalIncome > 0
        ? ((totalExpenses / totalIncome) * 100).toFixed(1)
        : 0;

      return (
        <Container darkMode={darkMode}>
          <Header>
            <Title darkMode={darkMode}>Financial Overview</Title>
            <Subtitle darkMode={darkMode}>Real-time spending analysis</Subtitle>
          </Header>

          <Grid>
            <Card darkMode={darkMode}>
              <IconWrap index={1} darkMode={darkMode}><FaArrowUp /></IconWrap>
              <Content>
                <CardTitle darkMode={darkMode}>Total Revenue</CardTitle>
                <Value darkMode={darkMode}>₹{totalIncome.toLocaleString()}</Value>
              </Content>
            </Card>

            <Card darkMode={darkMode}>
              <IconWrap index={2} darkMode={darkMode}><FaArrowDown /></IconWrap>
              <Content>
                <CardTitle darkMode={darkMode}>Total Spend</CardTitle>
                <Value darkMode={darkMode}>₹{totalExpenses.toLocaleString()}</Value>
              </Content>
            </Card>

            <Card darkMode={darkMode}>
              <IconWrap index={3} darkMode={darkMode}><FaCrown /></IconWrap>
              <Content>
                <CardTitle darkMode={darkMode}>Peak Category</CardTitle>
                <Value darkMode={darkMode}>{peak.category}</Value>
              </Content>
            </Card>

            <Card darkMode={darkMode}>
              <IconWrap index={4} darkMode={darkMode}><FaPercent /></IconWrap>
              <Content>
                <CardTitle darkMode={darkMode}>Burn Rate</CardTitle>
                <Value darkMode={darkMode}>{ratio}% of Income</Value>
              </Content>
            </Card>
          </Grid>
        </Container>
      );
    }}
  </AppContext.Consumer>
);

export default Insights;
import AppContext from "../../context/AppContext";
import { Line, Pie } from "react-chartjs-2";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  Container, Empty, StatsRow, Card, CardInner,
  Title, Amount, Icon, ChartsLayout, ChartBox,
  ChartTitle, CanvasWrapper
} from "./DashboardStyles";

import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, LineElement, Title as ChartTitleJS,
  Tooltip, Legend, ArcElement, Filler
} from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  ChartTitleJS, Tooltip, Legend, ArcElement, Filler
);

const Dashboard = () => {
  return (
    <AppContext.Consumer>
      {(value) => {
        const { transactions, darkMode } = value;

        if (transactions.length === 0) {
          return <Empty>Please add a transaction to see the dashboard</Empty>;
        }

        const income = transactions
          .filter((t) => t.type === "income")
          .reduce((acc, t) => acc + t.amount, 0);

        const expense = transactions
          .filter((t) => t.type === "expense")
          .reduce((acc, t) => acc + t.amount, 0);

        const balance = income - expense;

        const sortedDates = [...new Set(transactions.map((t) => t.date))].sort();
        
        const incomeData = sortedDates.map((date) =>
          transactions
            .filter((t) => t.date === date && t.type === "income")
            .reduce((acc, t) => acc + t.amount, 0)
        );

        const expenseData = sortedDates.map((date) =>
          transactions
            .filter((t) => t.date === date && t.type === "expense")
            .reduce((acc, t) => acc + t.amount, 0)
        );

        const lineChartData = {
          labels: sortedDates,
          datasets: [
            {
              label: "Income",
              data: incomeData,
              borderColor: "#00b894",
              backgroundColor: "rgba(0,184,148,0.1)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Expenses",
              data: expenseData,
              borderColor: "#e17055",
              backgroundColor: "rgba(225,112,85,0.1)",
              tension: 0.4,
              fill: true,
            }
          ]
        };

        const categoryMap = {};
        transactions
          .filter((t) => t.type === "expense")
          .forEach((t) => {
            categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
          });

        const pieChartData = {
          labels: Object.keys(categoryMap),
          datasets: [
            {
              data: Object.values(categoryMap),
              backgroundColor: ["#6c5ce7", "#00b894", "#fdcb6e", "#e17055", "#0984e3", "#e84393"],
              borderWidth: 2,
            }
          ]
        };

        return (
          <Container darkMode={darkMode}>
            <StatsRow>
              <Card darkMode={darkMode}>
                <CardInner>
                  <Title>Net Balance</Title>
                  <Amount darkMode={darkMode}>₹{balance.toLocaleString()}</Amount>
                </CardInner>
                <Icon><FaWallet /></Icon>
              </Card>

              <Card darkMode={darkMode}>
                <CardInner>
                  <Title>Total Income</Title>
                  <Amount darkMode={darkMode}>₹{income.toLocaleString()}</Amount>
                </CardInner>
                <Icon><FaArrowUp /></Icon>
              </Card>

              <Card darkMode={darkMode}>
                <CardInner>
                  <Title>Total Expenses</Title>
                  <Amount darkMode={darkMode}>₹{expense.toLocaleString()}</Amount>
                </CardInner>
                <Icon><FaArrowDown /></Icon>
              </Card>
            </StatsRow>

            <ChartsLayout>
              <ChartBox darkMode={darkMode}>
                <ChartTitle darkMode={darkMode}>Cash Flow Trend</ChartTitle>
                <CanvasWrapper>
                  <Line 
                    data={lineChartData} 
                    options={{ 
                      responsive: true, 
                      maintainAspectRatio: false,
                      plugins: { legend: { labels: { color: darkMode ? '#fff' : '#666' } } }
                    }} 
                  />
                </CanvasWrapper>
              </ChartBox>

              <ChartBox darkMode={darkMode}>
                <ChartTitle darkMode={darkMode}>Spending Split</ChartTitle>
                <CanvasWrapper>
                  <Pie 
                    data={pieChartData} 
                    options={{ 
                      responsive: true, 
                      maintainAspectRatio: false,
                      plugins: { legend: { labels: { color: darkMode ? '#fff' : '#666' } } }
                    }}
                  />
                </CanvasWrapper>
              </ChartBox>
            </ChartsLayout>
          </Container>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Dashboard;
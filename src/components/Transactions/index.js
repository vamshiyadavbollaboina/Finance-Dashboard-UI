import React, { useState } from "react";
import AppContext from "../../context/AppContext";
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaTrashAlt } from "react-icons/fa";
import {
  Container, Header, TitleSection, Title, SortButton, SearchWrapper,
  Input, TableWrapper, Table, Th, Td, Row, Amount, Badge, DeleteButton
} from "./TransactionsStyles";

const Transactions = () => {
  const [sortOrder, setSortOrder] = useState("desc");

  return (
    <AppContext.Consumer>
      {(value) => {
        const { transactions, setTransactions, filter, setFilter, role, darkMode } = value;

        const handleDelete = (id) => {
          if (window.confirm("Delete this transaction?")) {
            setTransactions(transactions.filter(t => t.id !== id));
          }
        };

        const filteredList = transactions
          .filter(t => t.category.toLowerCase().includes(filter.toLowerCase()))
          .sort((a, b) => {
            return sortOrder === "asc" 
              ? new Date(a.date) - new Date(b.date) 
              : new Date(b.date) - new Date(a.date);
          });

        return (
          <Container darkMode={darkMode}>
            <Header>
              <TitleSection>
                <Title darkMode={darkMode}>Recent Activity</Title>
                <SortButton darkMode={darkMode} onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                  {sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
                </SortButton>
              </TitleSection>

              <SearchWrapper darkMode={darkMode}>
                <FaSearch color={darkMode ? "#64748b" : "#94a3b8"} size={14} />
                <Input
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search category..."
                  darkMode={darkMode}
                />
              </SearchWrapper>
            </Header>

            <TableWrapper darkMode={darkMode}>
              <Table>
                <thead>
                  <tr>
                    <Th width="18%" darkMode={darkMode}>Date</Th>
                    <Th width="32%" darkMode={darkMode}>Category</Th>
                    <Th width="15%" align="center" darkMode={darkMode}>Type</Th>
                    <Th width="20%" align="right" darkMode={darkMode}>Amount</Th>
                    {role === "admin" && (
                      <Th width="15%" align="center" darkMode={darkMode}>Action</Th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredList.map((t) => (
                    <Row key={t.id} darkMode={darkMode}>
                      <Td darkMode={darkMode}>{t.date}</Td>
                      <Td darkMode={darkMode} style={{ fontWeight: 600 }}>{t.category}</Td>
                      <Td align="center">
                        <Badge type={t.type} darkMode={darkMode}>{t.type}</Badge>
                      </Td>
                      <Amount type={t.type} align="right" darkMode={darkMode}>
                        {t.type === "income" ? "+ " : "- "}₹{t.amount.toLocaleString()}
                      </Amount>
                      {role === "admin" && (
                        <Td align="center">
                          <DeleteButton onClick={() => handleDelete(t.id)}>
                            <FaTrashAlt />
                          </DeleteButton>
                        </Td>
                      )}
                    </Row>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
          </Container>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Transactions;
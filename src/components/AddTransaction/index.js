import { useState } from "react";
import AppContext from "../../context/AppContext";
import { FaPlusCircle } from "react-icons/fa";
import {
  Container, Card, Header, Title, Form, InputGroup,
  InputRow, Label, Input, Select, Button
} from "./AddTransactionStyles";

const AddTransaction = () => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AppContext.Consumer>
      {(value) => {
        const { transactions, setTransactions, role, darkMode } = value;

        if (role === "viewer") return null;

        const handleSubmit = (event) => {
          event.preventDefault();

          if (!form.date || !form.category || !form.amount) {
            alert("Please fill in all fields.");
            return;
          }

          const newTransaction = {
            ...form,
            amount: Number(form.amount),
            id: Date.now(),
          };

          setTransactions([newTransaction, ...transactions]);

          setForm({
            date: "",
            category: "",
            amount: "",
            type: "expense",
          });
        };

        return (
          <Container>
            <Card darkMode={darkMode}>
              <Header>
                <FaPlusCircle />
                <Title darkMode={darkMode}>New Transaction</Title>
              </Header>

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label darkMode={darkMode}>Date</Label>
                  <Input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    darkMode={darkMode}
                  />
                </InputGroup>

                <InputGroup>
                  <Label darkMode={darkMode}>Category</Label>
                  <Input
                    type="text"
                    name="category"
                    placeholder="e.g. Groceries"
                    required
                    value={form.category}
                    onChange={handleChange}
                    darkMode={darkMode}
                  />
                </InputGroup>

                <InputRow>
                  <InputGroup>
                    <Label darkMode={darkMode}>Amount (₹)</Label>
                    <Input
                      type="number"
                      name="amount"
                      placeholder="0.00"
                      required
                      value={form.amount}
                      onChange={handleChange}
                      darkMode={darkMode}
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label darkMode={darkMode}>Type</Label>
                    <Select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      darkMode={darkMode}
                    >
                      <option value="income">Income</option>
                      <option value="expense">Expense</option>
                    </Select>
                  </InputGroup>
                </InputRow>

                <Button type="submit" darkMode={darkMode}>
                  Add Transaction
                </Button>
              </Form>
            </Card>
          </Container>
        );
      }}
    </AppContext.Consumer>
  );
};

export default AddTransaction;
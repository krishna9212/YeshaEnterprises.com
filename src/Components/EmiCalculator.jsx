import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Slider, Typography, TextField } from "@mui/material";

function EMICalculator() {
  const [amount, setAmount] = useState(100000); // Default values
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [editField, setEditField] = useState(null); // Track which field is being edited
  const COLORS = ["#FF6900", "#6B62FF"]; 


  // Automatically calculate EMI when values change
  useEffect(() => {
    const principal = parseFloat(amount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const months = parseInt(tenure) * 12; // Tenure in months

    if (principal && rate && months) {
      const emi =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);

      const totalPayment = emi * months;
      const totalInterest = totalPayment - principal;

      setEmi(emi.toFixed(2));
      setTotalInterest(totalInterest.toFixed(2));
    } else {
      setEmi(null);
      setTotalInterest(null);
    }
  }, [amount, interestRate, tenure]);

  const data = [
    { name: "Principal", value: parseFloat(amount) },
    { name: "Interest", value: parseFloat(totalInterest) || 0 },
  ];

  const handleEditComplete = () => {
    setEditField(null); // Exit edit mode
  };

  return (
    <>
    <div className="flex flex-col-reverse py-5  md:flex-row justify-center p-2 items-center md:items-start h-min-screen px-4 bg-orange-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Left Side - Controls */}
      <div className="lg:w-1/2  w-full shadow-lg py-8 md:py-9 rounded-lg p-[27px] mb-6 lg:mb-0 lg:mr-6 bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
  <h1 className="text-4xl font-extrabold text-center mb-6 text-orange-500 dark:text-gray-200">
    EMI Calculator
  </h1>
  <div className="mb-6">
    <Typography variant="h6" className="mb-2 text-black dark:text-gray-200">
      Loan Amount (₹)
    </Typography>
    {editField === "amount" ? (
      <TextField
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        onBlur={handleEditComplete}
        autoFocus
        type="number"
        inputProps={{ style: { color: "blue" } }}
        variant="outlined"
        fullWidth
      />
    ) : (
      <div
        onClick={() => setEditField("amount")}
        className="text-center mt-2 text-[0.97rem] cursor-pointer text-black dark:text-gray-200"
      >
        ₹{amount.toLocaleString()}
      </div>
    )}
    <Slider
      value={amount}
      onChange={(e, val) => setAmount(val)}
      min={1000}
      max={500000}
      step={10000}
      valueLabelDisplay="auto"
      sx={{
        "& .MuiSlider-thumb": {
          boxShadow: "0 0 8px rgba(79, 70, 229, 0.7)",
        },
      }}
    />
  </div>

  <div className="mb-6">
    <Typography variant="h6" className="mb-2 text-black dark:text-gray-200">
      Annual Interest Rate (%)
    </Typography>
    {editField === "interestRate" ? (
      <TextField
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
        onBlur={handleEditComplete}
        autoFocus
        type="number"
        fullWidth
        inputProps={{ style: { color: "blue" } }}
        
        variant="outlined"
      />
    ) : (
      <div
        onClick={() => setEditField("interestRate")}
        className="text-center mt-2 text-[0.97rem] cursor-pointer text-black dark:text-gray-200"
      >
        {interestRate}%
      </div>
    )}
    <Slider
      value={interestRate}
      onChange={(e, val) => setInterestRate(val)}
      min={1}
      max={20}
      step={0.1}
      valueLabelDisplay="auto"
    />
  </div>

  <div className="mb-6">
    <Typography variant="h6" className="mb-2 text-black dark:text-gray-200">
      Tenure (Years)
    </Typography>
    {editField === "tenure" ? (
      <TextField
        value={tenure}
        onChange={(e) => setTenure(Number(e.target.value))}
        onBlur={handleEditComplete}
        autoFocus
        type="number"
        fullWidth
        inputProps={{ style: { color: "blue" } }}
        
        variant="outlined"
      />
    ) : (
      <div
        onClick={() => setEditField("tenure")}
        className="text-center mt-2 text-[0.97rem] cursor-pointer text-black dark:text-gray-200"
      >
        {tenure} Years
      </div>
    )}
    <Slider
      value={tenure}
      onChange={(e, val) => setTenure(val)}
      min={1}
      max={30}
      step={1}
      valueLabelDisplay="auto"
    />
  </div>
</div>


      {/* Right Side - Pie Chart */}
      <div className="lg:w-1/2 w-[100%] mb-5 py-8 md:py-[2.35rem] md:mb-0 shadow-lg rounded-lg  md:p-9 flex flex-col items-center bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-4xl pt-2 font-extrabold text-center mb-6 text-orange-500 dark:text-gray-200 ">
          EMI Breakdown
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center">
          {emi && (
            <>
              <p className="text-lg">
                <strong>EMI per month:</strong>{" "}
                ₹{parseFloat(emi).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="text-lg ">
                <strong>Total Interest Payable:</strong>{" "}
                ₹{parseFloat(totalInterest).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
    </>

  );
}

export default EMICalculator;

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const ChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataSets();
  }, []);

  const fetchDataSets = () => {
    const keys = Object.keys(localStorage);
    const sets = keys.filter((key) => key.startsWith('entry_')).map((key) => JSON.parse(localStorage.getItem(key)));
    setData(sets);
  };

  return (
    <>
      <Navbar title='Chart Page' />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {data.map((entry, index) => (
            <Bar
              key={index}
              dataKey="salary"
              fill={(entry.salary && entry.salary < 20000) ? "#ff0000" : "#00ff00"}
              name={`Salary - ${entry.name}`}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartPage;

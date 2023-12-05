"use client";
import React from "react";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
const RadarChartPlot = () => {
  const data = [
    {
      name: "Desempenho das turmas",
      pontuacao: 430,
    },
    {
      name: "Taxa de acerto",
      pontuacao: 380,
    },
    {
      name: "Desempenho geral",
      pontuacao: 320,
    },
    {
      name: "Desempenho dos alunos",
      pontuacao: 220,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar
            name="Desempenho da sua instituição"
            dataKey="pontuacao"
            stroke="yellow"
            fill="#FE4725"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

const Stats = () => {
  return (
    <div className="w-[54rem] h-[20rem] bg-red-600 rounded-md p-3 ">
      <h1 className="text-3xl font-semibold text-white">Estatísticas</h1>
      <div className="max-h-[90%] h-[90%] bg-white rounded-lg">
        <RadarChartPlot />
      </div>
    </div>
  );
};

export default Stats;

import React from 'react';
import { Radar } from 'react-chartjs';

let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonInfo = ({pokemon}) => {
  const labels = pokemon.stats.map((info) => {
    return capitalize(info.stat.name);
  });

  const data = pokemon.stats.map((info) => {
    return info.base_stat;
  });

  let chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        fillColor: "rgba(255, 99, 132, 0.2)",
        strokeColor: "rgba(255, 99, 132, 1)",
        pointColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)"
      }
    ]
  };

  return(
    <div className="Aligner">
      <img className="Aligner-item" src={pokemon.sprites.front_default} alt='pokemon front' />
      <Radar className="Aligner-item" data={chartData} width={300} height={250} />
    </div>
  )

}

export default PokemonInfo;

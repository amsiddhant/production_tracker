import React, { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = (props) => {

    const [profileState, setProfileState] = useState(props);
  
  
  
    var acc = parseInt(profileState.account)
    var hyd = parseInt(profileState.hydra)
    var thumb = parseInt(profileState.thumb)
    var other = parseInt(profileState.other)


    useEffect(() => {
        setProfileState(props);
      
      }, [props]);


  const data = {
    labels: ['Account', 'Feb', 'Mar', 'April', 'May'],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [{acc}, {hyd}, 2, 6, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)'
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: {acc}
    }
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart
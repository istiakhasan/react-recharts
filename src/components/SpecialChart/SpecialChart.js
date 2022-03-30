import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SpecialChart = () => {
    const [phones,setPhones]=useState([])
    console.log(phones)
  
    useEffect(()=>{
     axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
     .then(data=>{
         const loadedData=data.data.data;
         const phoneData=   loadedData.map(phone=>{
           const parts=phone.slug.split('-');
           const ph={
               name:parts[0],
               value:parseInt(parts[1])

           }
           return ph;
       })
       
     setPhones(phoneData)
     })
    },[])
    
      
    return (
   
        <BarChart width={800} height={500} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey={"name"}/>
          <Tooltip />
          <YAxis />
        </BarChart>
      
    );
};

export default SpecialChart;
#How to add Rechart?
1.Go to rechart official website<br/>

2.npm install recharts <br/>
3.   "<LineChart width={800} height={500} data={data}>
           <Line dataKey={'price'}></Line>
           <Line dataKey={'salese'}></Line>
           <XAxis dataKey={"name"}></XAxis>
           <Tooltip />
           
           <YAxis></YAxis>

     </LineChart>"



<br/>
##How to add axios?
1.go to axios website <br/>
2.npm i axios<br/>
3.   axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
     .then(data=>console.log(data))

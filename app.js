const data = d3.csv('cars.csv');

var svg = d3.select('svg');

var width = 200;
var height = 200;

var xScale = d3.scaleLog().base(10)
      .domain([10, 150])
      .range([0, width]);
var yScale = d3.scaleLog().base(10)
      .domain([10, 150])
      .range([height, 0]);

var xAxis = d3.axisBottom(xScale)
      .tickValues([10, 20, 50, 100])
      .tickFormat(d3.format("~s"));

var yAxis = d3.axisLeft(yScale)
      .tickValues([10, 20, 50, 100])
      .tickFormat(d3.format("~s"));

var radiusScale = d3.scaleLinear()
      .domain([0, 12])
      .range([2, 14]);

svg.append("g")
      .attr("transform", 'translate(50,50)')
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(+d.AverageCityMPG))
      .attr("cy", d => yScale(+d.AverageHighwayMPG))
      .attr("r", d => radiusScale(+d.EngineCylinders));


svg.append("g")
      .attr("transform", 'translate(50,50)')
      .call(yAxis);

svg.append("g")
      .attr("transform", 'translate(50,250)')
      .call(xAxis);




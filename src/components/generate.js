import React from "react"
import paper, {Path } from "paper"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function getColor(){
    var colorList = ['#69B3F5','#F5BB6D','#EBDBBE','#C0CFFE','#F5BCEE']
    return colorList[Math.floor(Math.random() * colorList.length)];
}

function makeRectangle(){
    var color = getColor()
    var sizeX = getRandomInt(50,500)
    var sizeY = getRandomInt(50,500)

    var pointX = getRandomInt(0,Math.round(paper.view.bounds['width'])-50)
    var pointY = getRandomInt(0,Math.round(paper.view.bounds['height'])-50)

    var pathRectangle = new Path.Rectangle({
        point: [pointX,pointY],
        size: [sizeX,sizeY],
        // strokeColor: 'purple',
        fillColor: color,
    })
    console.log(pathRectangle.position)
    return pathRectangle 
}

function makeCircle(){
    var color = getColor()
    var radius = getRandomInt(30,300)
    var centerX = getRandomInt (0,Math.round(paper.view.bounds['width'])-50)
    var centerY = getRandomInt(0,Math.round(paper.view.bounds['height'])-50)

    var pathCircle = new Path.Circle({
        radius: radius,
        center: [centerX,centerY],
        fillColor: color,
    })
}

class Generate extends React.Component {
  componentDidMount () {
    // paperjs
    paper.setup(this.canvas)
    paper.tools.forEach(tool => tool.remove())

    var pathRectangle = makeRectangle()
    makeCircle()
    paper.view.onFrame = () => {
       	// pathRectangle.size += 1;
        pathRectangle.rotate(1);
        pathRectangle.fillColor.hue += 1
    }


    console.log(paper.view.bounds)
    console.log(Math.round((paper.view.bounds['width'])))

  }

  render () {
    return (
      <canvas
        resize='true'
        style={{ width: '100%', height: '100%' }}
        ref={el => {
          this.canvas = el
        }}
      />
    )
  }
}

export default Generate
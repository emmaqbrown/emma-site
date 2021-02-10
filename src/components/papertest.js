import React from "react"
import paper, {Path } from 'paper'

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
    var sizeX = getRandomInt(50,300)
    var sizeY = getRandomInt(50,300)

    var pointX = getRandomInt(0,500)
    var pointY = getRandomInt(0,500)

    var pathRectangle = new Path.Rectangle({
        point: [pointX,pointY],
        size: [sizeX,sizeY],
        // strokeColor: 'purple',
        fillColor: color,
    })
}

function makeCircle(){
    var color = getColor()
    var radius = getRandomInt(30,100)
    var centerX = getRandomInt(0,500)
    var centerY = getRandomInt(0,500)

    var pathCircle = new Path.Circle({
        radius: radius,
        center: [centerX,centerY],
        fillColor: color,
    })
}

class PaperExample extends React.Component {
  componentDidMount () {
    // paperjs
    paper.setup(this.canvas)
    paper.tools.forEach(tool => tool.remove())

    makeRectangle()
    makeCircle()
    // paper.view.onFrame = () => {
    //    	// pathRectangle.size += 1;
    //     pathRectangle.rotate(1);
    // }
  
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

export default PaperExample
import React from "react"
import paper, {Path,Point } from "paper"

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

function makeFunkyRect(){
    var point1 = new Point(Math.round(paper.view.bounds['width']/2+getRandomInt(0,300)), Math.round(paper.view.bounds['height']/2)+getRandomInt(500,900))
    var point2 = new Point(Math.round(paper.view.bounds['width']/2)+getRandomInt(300,500), Math.round(paper.view.bounds['height']/2)+getRandomInt(0,300))
    var point3 = new Point(Math.round(paper.view.bounds['width']/2)+getRandomInt(0,300), Math.round(paper.view.bounds['height']/2)-getRandomInt(25,50))
    var point4 = new Point(Math.round(paper.view.bounds['width']/2)-getRandomInt(300,500), Math.round(paper.view.bounds['height']/2)+getRandomInt(0,300))
    var color = getColor()

    var Face = new Path({
      segments: [point1, point2, point3, point4],
      closed: true,
      fillColor: color,

    })

    Face.smooth()
}

function makeFunkyCircle(){
  var color = getColor()

    var Face = new Path({
      segments: [
        new Point(Math.round(paper.view.bounds['width']/2), Math.round(paper.view.bounds['height']/2)+getRandomInt(100,300)), 
        new Point(Math.round(paper.view.bounds['width']/2)+getRandomInt(100,300), Math.round(paper.view.bounds['height']/2)),
        new Point(Math.round(paper.view.bounds['width']/2), Math.round(paper.view.bounds['height']/2)-getRandomInt(100,300)),
        new Point(Math.round(paper.view.bounds['width']/2)-getRandomInt(100,300), Math.round(paper.view.bounds['height']/2))
      ],
      // strokeColor: 'black',
      closed: true,
      fillColor: color,

    })

    
    Face.smooth()
}

class Generate extends React.Component {
  componentDidMount () {
    // paperjs
    paper.setup(this.canvas)
    paper.tools.forEach(tool => tool.remove())

    // var pathRectangle = makeRectangle()
    makeFunkyRect()
    makeFunkyCircle()
    // pathRectangle.rotate(getRandomInt(1,100));
    // pathRectangle.fillColor(getColor())
    // paper.view.onFrame = () => {
    //    	// pathRectangle.size += 1;
    //     pathRectangle.rotate(1);
    //     pathRectangle.fillColor(getColor())
    // }


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
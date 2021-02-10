import React from "react"
import paper, {Path,Point } from "paper"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }



function makeLeftEye(point){
  var radius = getRandomInt(10,20)

  var Eye = new Path.Circle({
    radius: radius,
    center: [point.x+150,point.y],
    strokeColor: 'black',
    strokeWidth: 1,
})
}

function makeRightEye(point){
  var radius = getRandomInt(10,20)

  var Eye = new Path.Circle({
    radius: radius,
    center: [point.x-150,point.y],
    strokeColor: 'black',
    strokeWidth: 1,
    })
}


function makeMouth(point1,point2,point3){
  var mouth = new Path({
    segments: [point1.add([250,70]), point2.subtract([0,100]), point3.subtract([120,-75])],
    strokeColor: 'black',
  })
  console.log(point1)
  mouth.smooth()
}

class GenerateFace extends React.Component {
  componentDidMount () {
    // paperjs
    paper.setup(this.canvas)
    paper.tools.forEach(tool => tool.remove())

    var randomVal = getRandomInt(100,300)

    var point1 = new Point(Math.round(paper.view.bounds['width']/2), Math.round(paper.view.bounds['height']/2)+getRandomInt(200,300))
    var point2 = new Point(Math.round(paper.view.bounds['width']/2)+getRandomInt(300,500), Math.round(paper.view.bounds['height']/2))
    var point3 = new Point(Math.round(paper.view.bounds['width']/2), Math.round(paper.view.bounds['height']/2)-getRandomInt(25,50))
    var point4 = new Point(Math.round(paper.view.bounds['width']/2)-getRandomInt(300,500), Math.round(paper.view.bounds['height']/2))

    var Face = new Path({
      segments: [point1, point2, point3, point4],
      strokeColor: 'black',
      closed: true,
    })

    Face.smooth()

    makeLeftEye(point4)
    makeRightEye(point2)
    makeMouth(point4,point1,point2)


    // var Eye = new Path.Circle({
    //     radius: radius,
    //     center: [point4.x+150,point4.y],
    //     strokeColor: 'black',
    //     strokeWidth: 1,
    // })


 



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

export default GenerateFace
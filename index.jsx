var React = require('react')
var _ = require('lodash')

console.log("working")
var GAMEBOARD_WIDTH = 100
var PADDLE_HEIGHT = 20
var PADDLE_WIDTH = 3
var HALF_PADDLE = PADDLE_HEIGHT/2

var gameState = {
    leftPaddle: {
        x:2,
        y:50
    },
    rightPaddle: {
        x:98,
        y:50
    },
    ball: {

    }
}

var HelloWorld = React.createClass({
    render: function() {
        return (<div>Hello {this.props.personsName}</div>)
    }
})


var GameBoard = React.createClass({
    onMouseMove: function(event) {
        var coords = eventCoordinates(event)
        console.log("coords", coords.x, coords.y)
    },

    render: function() {
        return (
            <svg {...this.props} onMouseMove={this.onMouseMove}>
                <Paddle paddle={this.props.gameState.leftPaddle}/>
                <Paddle paddle={this.props.gameState.rightPaddle}/>
            </svg>
        )
    }
})

var Paddle = React.createClass({
    render: function() {
        var x = this.props.paddle.x
        var y = this.props.paddle.y - HALF_PADDLE
        return (
            <rect x={x} y={y} width={PADDLE_WIDTH} height={PADDLE_HEIGHT}/>
        )
    }
})


React.render(
    <GameBoard height="50%" width="50%" viewBox="0 0 {GAMEBOARD_WIDTH} {GAMEBOARD_WIDTH}" gameState={gameState} >
    </GameBoard>, document.getElementById("react-here")
)


function eventCoordinates(event) {
    console.log("pageY", event.pageY, event.target.offsetTop)
    return {
        x: event.pageX - event.target.offsetLeft,
        y: event.pageY - event.target.offsetTop
    }
}
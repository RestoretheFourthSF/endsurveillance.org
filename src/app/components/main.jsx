/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Dataset = require('../utility/dataset.js');


//Maybe this belongs somewhere else?
Dataset.getDataFromGoogle(function (politicians) {
  window.politicians = politicians;
  }
);

let {
  Avatar,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton
} = mui;


let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
      'max-width':'906px',
      margin:'0 auto',
      display:'inline-flex',
    };

    let standardActions = [
      { text: 'Okay' }
    ];

    let cardStyle={
      width:'200px',
      margin:'20px'
    }
    return (
      <div style={containerStyle}>
      <Card style={cardStyle}>
        <CardHeader
          title="Congress Critter"
          subtitle="A Scorecard for your Congress Critter"
          avatar={<Avatar style={{color:'red'}}>A</Avatar>}/>
        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardTitle title="Title" subtitle="Subtitle"/>
        <CardActions>
          <FlatButton label="Call "/>
          <FlatButton label="Emails"/>
        </CardActions>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
      <br/>

      <Card style={cardStyle}>
        <CardHeader
          title="Congress Critter2"
          subtitle="A Scorecard for your Congress Critter"
          avatar={<Avatar style={{color:'red'}}>A</Avatar>}/>
        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardTitle title="Title" subtitle="Subtitle"/>
        <CardActions>
          <FlatButton label="Call "/>
          <FlatButton label="Emails"/>
        </CardActions>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

});

module.exports = Main;

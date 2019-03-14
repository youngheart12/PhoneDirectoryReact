import React,{Component} from 'react';
import {Row,Col,Container, FormGroup, Label, Input,Button} from 'reactstrap';
import Header from './Component/Header/header';
import DataList from './Component/Subscriber/Datalist/datalist';
import './/Component/Subscriber/subscriber.css';
import './/Component/Subscriber/Datalist/datalist.css';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.postId=0;
    this.state = {
      name:'',
      number:'',
      id:" ",
      dataArray:[],
      isMove:false,
      isButton:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
    
  }
  
  handleSubmit=(event)=> {
   this.postId=this.state.postId+1;
   const copyPostArray=Object.assign([],this.state.dataArray)
   copyPostArray.push({
       id:this.postId,
       name:this.state.name,
       number:this.state.number
   })
   this.setState({
       dataArray:copyPostArray
   })
  
  }


  deleteHandler =(index)=>
  {
    const copyPostArray=Object.assign([],this.state.dataArray);
    copyPostArray.splice(index,1);
    this.setState({
      dataArray:copyPostArray
    })
    console.log("yes i am in")
  }


  AddButtonHandler=()=>
  {
    this.setState({isMove:!this.state.isMove})
    
  }
  BackButtonHandler=()=>
  {
    this.setState({isMove:!this.state.isMove})
  }
  render() {
    const post= this.state.dataArray.map((posts,index)=>
    {
      return<DataList name={posts.name}
      key={posts.id}
      number={posts.number}
      delete={this.deleteHandler.bind(this,index)}
      />
    })
    let activeComponent;
    if(this.state.isMove)
    {
     activeComponent= 
        <div>
        <Header name="ADD SUBSCRIBER"></Header>
        <Container className="container-fluid"> 
        <br></br>
        <Row>
            <Col md="4">
           <Button color="danger" onClick={this.BackButtonHandler}>BACK</Button>
            </Col>
        </Row>
            <Row>
                <Col md="4">
                <FormGroup>
          <Label for="PersonName">Name</Label>
          <Input type="text" name="Name" value={this.state.name} placeholder="Enter Your Name" onChange={this.handleChange('name')} />
        </FormGroup></Col>
            </Row>
        <Row><Col md="4">
        <FormGroup>
          <Label for="Numberofperson">Phone Number</Label>
          <Input type="text" name="Number" value={this.state.number} placeholder="Enter Your Phone Number" onChange={this.handleChange('number')}/>
        </FormGroup>
        </Col></Row>
        <Row>
            <Col md="4">
            <p><b>Subscriber to be added: </b></p>
            <p>Name:{this.state.name}</p>
            <p>Number:{this.state.number}</p>
            </Col>
        </Row>
       <Row><Col md="4">
     <Button color="info" onClick={this.handleSubmit}>Add</Button>
       </Col></Row>
        </Container>
        </div>  
    }else 
    {
     activeComponent= <div>
      <Header name="PHONE DIRECTORY"></Header>
  <Container className="container-fluid">
      <Row className="Rowpro">
        <Button color="success" className="Addbutton" onClick={this.AddButtonHandler}>ADD</Button>  
      </Row>
      <Row className="Rowpro">
          <Col md ="4"><b>NAME</b></Col>
          <Col md="4"><b>PHONE</b></Col>
      </Row>
  </Container>
  {post}
  </div>
    }
    return (
      <div>
        {activeComponent}
      </div>
    );
  }
}

export default App;

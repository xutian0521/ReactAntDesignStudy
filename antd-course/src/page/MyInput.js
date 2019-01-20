const MyInput= ({onChange}) => (<input onChange={onChange}></input>);

class Demo extends React.Component{
    onTextChange =(event) =>{
        console.log(event.target.value);
    }
    render(){
        return (<MyInput onChange={this.onTextChange}></MyInput>);
    }
}
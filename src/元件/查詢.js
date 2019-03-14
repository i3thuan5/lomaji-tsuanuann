import React from 'react';

class 查詢 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.tsua = React.createRef();
    this.liuA = React.createRef();
  }
  componentDidMount() {
      this.tsua.current.focus();    
  }
  送出(e) {
    e.preventDefault();
    let 句子 = this.tsua.current.value;
    this.props.handleClick(句子);
  }
  phahJi(e)
  {
    console.log('ee',e.ctrlKey,e.key,e.altKey)
    if((e.altKey && e.key==='Enter') || (e.ctrlKey && e.key==='Enter'))
    {
      this.liuA.current.click();
      this.tsua.current.focus();
    }
    else if(e.altKey && e.key==='z')
    {
      document.getElementById("臺羅").children[0].click();
      this.tsua.current.focus();
    }
    else if(e.altKey && e.key==='x')
    {
      document.getElementById("白話字").children[0].click();
      this.tsua.current.focus();
    }
  }
  render() {
    let { 預設句子, 正在查詢 } = this.props;
    return (
      <form className='ui form'
       onSubmit={this.送出.bind(this)}>

        <div className="app block">
          <textarea
            ref={this.tsua}
            defaultValue={預設句子}
            onKeyDown={this.phahJi.bind(this)}
            rows='3' 
            placeholder={
              '欲轉換書寫的臺羅傳統調、臺羅數字調、'+
              '白話字傳統調、白話字數字調、漢羅'
            }/>
        </div>

        <div className="app clearing">
          <button
            ref={this.liuA}
            className={
              `ui huge primary right floated button ${
              正在查詢 ? "disabled" : ""}`
            }
            type='submit'
          >轉換羅馬字(Alt+Enter)</button>
        </div>

      </form>
    );
  }
}

export default 查詢;

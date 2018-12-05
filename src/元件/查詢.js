import React from 'react';

class 查詢 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  送出(e) {
    e.preventDefault();
    let 句子 = this.refText.value;
    this.props.handleClick(句子);
  }
  phahJi(e)
  {
    console.log('ee',e.ctrlKey,e.key,e.altKey)
    if(e.ctrlKey && e.key==='Enter')
    {
      this.myRef.current.click();
    }
    else if(e.ctrlKey && e.altKey && e.key==='z')
    {
      console.log('go tl')
    }
    else if(e.ctrlKey && e.altKey && e.key==='x')
    {
      console.log('go poj')
    }
  }
  render() {
    let { 預設句子, 正在查詢 } = this.props;
    return (
      <form className='ui form'
       onSubmit={this.送出.bind(this)}>

        <div className="app block">
          <textarea defaultValue={預設句子}
          ref={(c) => { this.refText = c; }}
          onKeyPress={this.phahJi.bind(this)}
          rows='3' 
          placeholder={
            '欲轉換書寫的臺羅傳統調、臺羅數字調、'+
            '白話字傳統調、白話字數字調、漢羅'
          }/>
        </div>

        <div className="app clearing">
          <button className={
            `ui huge primary right floated button ${
            正在查詢 ? "disabled" : ""}`}
            type='submit'
            ref={this.myRef}
          >轉換羅馬字(Ctrl+Enter)</button>
        </div>

      </form>
    );
  }
}

export default 查詢;

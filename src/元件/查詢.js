import React from 'react';

class 查詢 extends React.PureComponent {
  送出(e) {
    e.preventDefault();
    let 句子 = this.refText.value;
    this.props.handleClick(句子);
  }
  render() {
    let { 預設句子, 正在查詢 } = this.props;
    return (
      <form className='ui form'
       onSubmit={this.送出.bind(this)}>

        <div className="app block">
          <textarea defaultValue={預設句子}
          ref={(c) => { this.refText = c; }}
          rows='3' 
          placeholder='欲轉換書寫的臺羅、白話字'/>
        </div>

        <div className="app clearing">
          <button className={
            `ui huge primary right floated button ${
            正在查詢 ? "disabled" : ""}`}
            type='submit'
          >轉換羅馬字</button>
        </div>

      </form>
    );
  }
}

export default 查詢;

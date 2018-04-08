import React from 'react';

class 查詢 extends React.Component {
  送出(e) {
    e.preventDefault();
    let 句子 = this.refText.value;
    this.props.handleClick(句子);
  }
  render() {
    let {預設句子} = this.props;
    return (
      <form className='ui form'
       onSubmit={this.送出.bind(this)}>

        <div className="app block">
          <textarea defaultValue={預設句子}
          ref={(c) => { this.refText = c; }}
          rows='3' />
        </div>

        <div className="app clearing">
          <button type='submit'>查</button>
        </div>

      </form>
    );
  }
}

export default 查詢;

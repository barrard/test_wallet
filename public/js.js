if (!localStorage.getItem('seed')) {
  // document.getElementById('one_time_new_account').style.display = 'block'
}else{
  document.getElementById('one_time_new_account').innerHTML = 'Welcome'
  setSeedFromLS()

}



function call_when_mined(txHash, callback) {
  web3.eth.getTransactionReceipt(txHash, function (e, r) {
    if (e) { console.log(e) }
    else {
      if (r == null) {
        setTimeout(function () {
          call_when_mined(txHash, callback)
        }, 500)
      } else {
        callback(txHash);
      }
    }
  })
}